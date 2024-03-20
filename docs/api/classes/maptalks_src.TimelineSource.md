---
sidebar: "auto"
editLinks: false
sidebarDepth: 4
---

[Class Docs](../index.md) / [maptalks/src](../modules/maptalks_src.md) / TimelineSource

# Class: TimelineSource

[maptalks/src](../modules/maptalks_src.md).TimelineSource

## Hierarchy

- `EventEmitter`

  ↳ **`TimelineSource`**

## Constructors

### constructor

• **new TimelineSource**(`id`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options` | `TimelineSourceOptions` |

#### Overrides

EventEmitter.constructor

#### Defined in

packages/gl-core/dist/index.d.ts:860

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/gl-core/dist/index.d.ts:817

___

### coordinates

• **coordinates**: `WithUndef`<`Coordinates`\>

影像坐标

#### Defined in

packages/gl-core/dist/index.d.ts:845

___

### dispatcher

• **dispatcher**: `any`

#### Defined in

packages/gl-core/dist/index.d.ts:855

___

### id

• **id**: `string`

数据源 id

#### Defined in

packages/gl-core/dist/index.d.ts:821

___

### intervals

• **intervals**: (`ImageSourceInterval` \| `TileSourceInterval`)[]

#### Defined in

packages/gl-core/dist/index.d.ts:859

___

### layer

• **layer**: `WithNull`<`BaseLayer`\>

#### Defined in

packages/gl-core/dist/index.d.ts:856

___

### maxZoom

• **maxZoom**: `number`

支持的最大层级

#### Defined in

packages/gl-core/dist/index.d.ts:833

___

### minZoom

• **minZoom**: `number`

支持的最小层级

#### Defined in

packages/gl-core/dist/index.d.ts:829

___

### options

• **options**: `TimelineSourceOptions`

配置项

#### Defined in

packages/gl-core/dist/index.d.ts:849

___

### parseOptions

• **parseOptions**: `ParseOptionsType`

#### Defined in

packages/gl-core/dist/index.d.ts:857

___

### renderer

• **renderer**: `Renderer`

#### Defined in

packages/gl-core/dist/index.d.ts:854

___

### roundZoom

• **roundZoom**: `boolean`

生成瓦片时的配置

#### Defined in

packages/gl-core/dist/index.d.ts:837

___

### tileBounds

• **tileBounds**: `undefined` \| `Bounds`

#### Defined in

packages/gl-core/dist/index.d.ts:858

___

### tileSize

• **tileSize**: `number`

瓦片大小

#### Defined in

packages/gl-core/dist/index.d.ts:841

___

### type

• **type**: [`timeline`](../enums/maptalks_src.LayerSourceType.md#timeline)

数据源类型

#### Defined in

packages/gl-core/dist/index.d.ts:825

___

### wrapX

• **wrapX**: `boolean`

是否跨世界渲染

#### Defined in

packages/gl-core/dist/index.d.ts:853

## Accessors

### cache

• `get` **cache**(): `Map`<`string`, `any`\>

#### Returns

`Map`<`string`, `any`\>

#### Defined in

packages/gl-core/dist/index.d.ts:863

___

### privateType

• `get` **privateType**(): [`LayerSourceType`](../enums/maptalks_src.LayerSourceType.md)

#### Returns

[`LayerSourceType`](../enums/maptalks_src.LayerSourceType.md)

#### Defined in

packages/gl-core/dist/index.d.ts:862

___

### source

• `get` **source**(): ([`TileSource`](maptalks_src.TileSource.md) \| [`ImageSource`](maptalks_src.ImageSource.md))[]

#### Returns

([`TileSource`](maptalks_src.TileSource.md) \| [`ImageSource`](maptalks_src.ImageSource.md))[]

#### Defined in

packages/gl-core/dist/index.d.ts:864

___

### sourceCache

• `get` **sourceCache**(): `SourceCache`[]

#### Returns

`SourceCache`[]

#### Defined in

packages/gl-core/dist/index.d.ts:865

___

### track

• `get` **track**(): `Track`

#### Returns

`Track`

#### Defined in

packages/gl-core/dist/index.d.ts:861

## Methods

### animate

▸ **animate**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.position` | `any` |

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:870

___

### clear

▸ **clear**(): [`TimelineSource`](maptalks_src.TimelineSource.md)

清空所有的订阅者

#### Returns

[`TimelineSource`](maptalks_src.TimelineSource.md)

#### Inherited from

EventEmitter.clear

#### Defined in

node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:165

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:880

___

### emit

▸ **emit**(`type`, `args?`): `any`

触发事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `args?` | `any` |

#### Returns

`any`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:160

___

### getFadeTime

▸ **getFadeTime**(): `number`

#### Returns

`number`

#### Defined in

packages/gl-core/dist/index.d.ts:868

___

### has

▸ **has**(`type`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

#### Returns

`any`

#### Inherited from

EventEmitter.has

#### Defined in

node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:161

___

### load

▸ **load**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | `any` |

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:878

___

### loaded

▸ **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/gl-core/dist/index.d.ts:879

___

### off

▸ **off**(`type`, `handler?`, `context?`): [`TimelineSource`](maptalks_src.TimelineSource.md)

取消监听

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `handler?` | `any` |
| `context?` | `any` |

#### Returns

[`TimelineSource`](maptalks_src.TimelineSource.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:154

___

### on

▸ **on**(`type`, `handler`, `context?`): [`TimelineSource`](maptalks_src.TimelineSource.md)

添加订阅者

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `any` | 事件类型 |
| `handler` | `any` | 回调函数 |
| `context?` | `any` | 上下文 |

#### Returns

[`TimelineSource`](maptalks_src.TimelineSource.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:140

___

### onAdd

▸ **onAdd**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `any` |

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:866

___

### once

▸ **once**(`type`, `handler`, `context?`): [`TimelineSource`](maptalks_src.TimelineSource.md)

添加一次性订阅者

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `handler` | `any` |
| `context?` | `any` |

#### Returns

[`TimelineSource`](maptalks_src.TimelineSource.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/.pnpm/@sakitam-gis+vis-engine@1.5.2/node_modules/@sakitam-gis/vis-engine/dist/index.d.ts:147

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:874

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:873

___

### prepare

▸ **prepare**(`renderer`, `dispatcher`, `parseOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |
| `dispatcher` | `any` |
| `parseOptions` | `ParseOptionsType` |

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:867

___

### restart

▸ **restart**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:877

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:875

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:876

___

### tilesLoadEnd

▸ **tilesLoadEnd**(): `void`

#### Returns

`void`

#### Defined in

packages/gl-core/dist/index.d.ts:869
