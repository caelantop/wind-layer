/* eslint-disable no-restricted-globals */
import { asyncAll, isWorker } from './util';
import Actor from './Actor';
import type { RequestAdapter } from './Request';
import getRequest from './Request';

export default class Worker {
  public self: any;

  public actor: Actor;

  public referrer: string;

  public request: RequestAdapter;

  public cancelMap: Map<any, any> = new Map();

  constructor(self: any) {
    this.self = self;
    this.actor = new Actor(self, this);
    this.request = getRequest();
  }

  setReferrer(dispatcherId: string, referrer: string) {
    this.referrer = referrer;
  }

  configDeps(dispatcherId: string, deps: string[], callback: any) {
    if (deps && Array.isArray(deps) && deps.length > 0) {
      try {
        self.importScripts(...deps);
        callback(null, true);
      } catch (e) {
        asyncAll(
          deps,
          (d, done) => {
            this.request.fetch(
              {
                url: d,
                type: 'arrayBuffer',
              },
              (err, data) => {
                if (err) {
                  done(err, false);
                  return console.error(err);
                }
                const url = URL.createObjectURL(new Blob([data], { type: 'application/javascript' }));
                self.importScripts(url);
                // Mobile Safari
                setTimeout(() => {
                  URL.revokeObjectURL(url);
                });
                done(null, true);
              },
            );
          },
          callback,
        );
      }
    } else {
      callback(null, true);
    }
  }

  loadData(dispatcherId: string, params: any, callback: any) {
    const cancelId = params?.cancelId;
    const { cancel } = this.request.fetch(params, (err, data) => {
      this.cancelMap.delete(cancelId);
      if (err) {
        callback(err);
      } else {
        if (params?.decodeType === 0) {
          this.request.arrayBuffer2Image(data, callback);
        } else if (params?.decodeType === 1) {
          this.request.arrayBuffer2unit8(data, callback);
        } else if (params?.decodeType === 2) {
          this.request.arrayBuffer2tiff(data, callback);
        } else if (params?.decodeType === 3) {
          this.request.parseExif(data, callback);
        }
      }
    });
    this.cancelMap.set(cancelId, cancel);
  }

  cancel(dispatcherId: string, params: any, callback: any) {
    const cancelId = params?.cancelId;
    const c = this.cancelMap.get(cancelId);
    if (c) {
      c();
      callback(null, true);
    } else {
      callback(new Error('无相关的可取消请求！'));
    }
  }
}

if (isWorker()) {
  (self as any).worker = new Worker(self as any);
}
