import Field from './Field';
import type { IField } from './Field';

const hasOwnProperty = Object.prototype.hasOwnProperty;
const symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined;

function baseGetTag(value: any) {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value);
  }
  const isOwn = hasOwnProperty.call(value, symToStringTag);
  const tag = value[symToStringTag];
  let unmasked = false;
  try {
    value[symToStringTag] = undefined;
    unmasked = true;
  } catch (e) {
    //
  }

  const result = Object.prototype.toString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

export function TypeOf(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * 判断是否为函数
 * @param value
 * @returns {boolean}
 */
export function isFunction(value: any): value is (...args: any[]) => any {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (!isObject(value)) {
    return false;
  }
  const tag = baseGetTag(value);
  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object Proxy]'
  );
}

/**
 * 判断是否为对象
 * @param value
 * @returns {boolean}
 */
export function isObject(value: any) {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
}

/**
 * is date value
 * @param val
 * @returns {boolean}
 */
export function isDate(val: any) {
  return Object.prototype.toString.call(val) === '[object Date]';
}

/**
 * is array buffer
 * @param val
 * @returns {boolean}
 */
export function isArrayBuffer(val: any) {
  return Object.prototype.toString.call(val) === '[object ArrayBuffer]';
}

/**
 * 判断是否为合法字符串
 * @param value
 * @returns {boolean}
 */
export function isString(value: any): boolean {
  if (value == null) {
    return false;
  }
  return typeof value === 'string' || (value.constructor !== null && value.constructor === String);
}

/**
 * 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value: any) {
  return Object.prototype.toString.call(value) === '[object Number]' && !isNaN(value);
}

/**
 * 判断对象是否为空
 * @param object
 * @returns {boolean}
 */
export function isEmpty(object: any) {
  let property;
  for (property in object) {
    return false;
  }
  return !property;
}

/**
 * 判断是否为 `null`
 * @param obj
 * @returns {boolean}
 */
export function isNull(obj: any) {
  return obj == null;
}

/**
 * 判断是否是数组
 * @param arr
 */
export function isArray(arr: any): boolean {
  return Array.isArray(arr);
}

/**
 * assign object
 * @param target
 * @param sources
 */
export function assign(target: object, ...sources: any[]) {
  return Object.assign(target, ...sources);
}

/**
 * 打印⚠️信息
 * @param msg
 * @param n
 */
export function warnLog(msg: string, n?: string) {
  console.warn(`${n || 'wind-layer'}: ${msg}`);
}

const warnings = {};

/**
 * 在程序运行时只打印同类型警告一次
 * @param namespaces
 * @param msg
 */
export function warnOnce(namespaces: string, msg: string) {
  if (!warnings[msg]) {
    warnLog(msg, namespaces);
    warnings[msg] = true;
  }
}

/**
 * Get floored division
 * @param a
 * @param n
 * @returns {Number} returns remainder of floored division,
 * i.e., floor(a / n). Useful for consistent modulo of negative numbers.
 * See http://en.wikipedia.org/wiki/Modulo_operation.
 */
export function floorMod(a: number, n: number) {
  return a - n * Math.floor(a / n);
}

/**
 * 检查值是否合法
 * @param val
 * @returns {boolean}
 */
export function isValide(val: any) {
  return val !== undefined && val !== null && !isNaN(val);
}

export interface IGFSItem {
  header: {
    parameterCategory: number | string;
    parameterNumber: number | string;
    dx: number;
    dy: number;
    nx: number;
    ny: number;
    lo1: number;
    lo2: number;
    la1: number;
    la2: number;
    [key: string]: any;
  };
  data: number[];
}

/**
 * format gfs json to vector
 * @param data
 * @param options
 */
export function formatData(data: IGFSItem[], options: Partial<IField> = {}) {
  let uComp: IGFSItem = undefined as unknown as IGFSItem;
  let vComp: IGFSItem = undefined as unknown as IGFSItem;

  if ((process.env.NODE_ENV as string) === ('development' as string)) {
    console.time('format-data');
  }

  data.forEach(function (record: IGFSItem) {
    switch (record.header.parameterCategory + ',' + record.header.parameterNumber) {
      case '1,2':
      case '2,2':
        uComp = record;
        break;
      case '1,3':
      case '2,3':
        vComp = record;
        break;
    }
  });

  if (!vComp || !uComp) {
    return undefined;
  }

  const header = uComp.header;
  const vectorField = new Field({
    xmin: header.lo1, // 一般格点数据是按照矩形范围来切割，所以定义其经纬度范围
    ymin: header.la1,
    xmax: header.lo2,
    ymax: header.la2,
    deltaX: header.dx, // x（经度）增量
    deltaY: header.dy, // y（维度）增量
    cols: header.nx, // 列（可由 `(xmax - xmin) / deltaX` 得到）
    rows: header.ny, // 行
    us: uComp.data, // U分量
    vs: vComp.data, // V分量
    ...options,
  });

  if ((process.env.NODE_ENV as string) === ('development' as string)) {
    console.timeEnd('format-data');
  }

  return vectorField;
}

/**
 * create canvas
 * @param width
 * @param height
 * @param retina
 * @param Canvas
 * @returns {HTMLCanvasElement}
 */
export function createCanvas(width: number, height: number, retina: number, Canvas?: any): HTMLCanvasElement {
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = width * retina;
    canvas.height = height * retina;
    return canvas;
  } else {
    // create a new canvas instance in node.js
    // the canvas class needs to have a default constructor without any parameter
    return new Canvas(width * retina, height * retina);
  }
}

/**
 * 移除 dom
 * @param node
 * @returns {removeDomNode}
 */
export function removeDomNode(node: HTMLElement | HTMLCanvasElement) {
  if (!node) {
    return null;
  }
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
  return node;
}

const keyword = /(\D+)/;
const hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
// eslint-disable-next-line no-useless-escape
const rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
const colorNames: {
  [key: string]: number[];
} = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
};

export function getColor(string: string) {
  let rgb: any[] = [];

  if (string.match(hex)) {
    let match = string.match(hex);

    if (match !== null) {
      // @ts-ignore
      match = match[1];

      for (let i = 0; i < 3; i++) {
        // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
        const i2 = i * 2;
        // @ts-ignore
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }

      rgb[3] = 1;
    }
  } else if (string.match(rgba)) {
    const match = string.match(rgba);
    for (let i = 0; i < 3; i++) {
      // @ts-ignore
      rgb[i] = parseInt(match[i + 1], 0);
    }

    // @ts-ignore
    if (match[4]) {
      // @ts-ignore
      rgb[3] = parseFloat(match[4]);
    } else {
      rgb[3] = 1;
    }
  } else if (string.match(keyword)) {
    const match = string.match(keyword);
    // @ts-ignore
    if (match[1] === 'transparent') {
      return [0, 0, 0, 0];
    }
    // @ts-ignore
    rgb = colorNames[match[1]];
    if (!rgb) {
      return null;
    }
    rgb[3] = 1;
    return rgb;
  } else {
    return null;
  }

  return rgb;
}

export function compareVersion(v1, v2) {
  // eslint-disable-next-line no-param-reassign
  v1 = v1.split('.');
  // eslint-disable-next-line no-param-reassign
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}
