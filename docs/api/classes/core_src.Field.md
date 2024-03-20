---
sidebar: "auto"
editLinks: false
sidebarDepth: 4
---

[Class Docs](../index.md) / [core/src](../modules/core_src.md) / Field

# Class: Field

[core/src](../modules/core_src.md).Field

## Constructors

### constructor

• **new Field**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IField`](../interfaces/core_src.IField.md) |

#### Defined in

[packages/core/src/Field.ts:53](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L53)

## Properties

### cols

• `Private` `Readonly` **cols**: `number`

#### Defined in

[packages/core/src/Field.ts:39](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L39)

___

### deltaX

• `Private` `Readonly` **deltaX**: `number`

#### Defined in

[packages/core/src/Field.ts:45](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L45)

___

### deltaY

• `Private` `Readonly` **deltaY**: `number`

#### Defined in

[packages/core/src/Field.ts:44](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L44)

___

### flipY

• `Private` `Readonly` **flipY**: `boolean`

#### Defined in

[packages/core/src/Field.ts:48](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L48)

___

### grid

• **grid**: (``null`` \| [`Vector`](core_src.Vector.md))[][]

#### Defined in

[packages/core/src/Field.ts:49](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L49)

___

### isContinuous

• `Private` `Readonly` **isContinuous**: `boolean`

#### Defined in

[packages/core/src/Field.ts:43](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L43)

___

### isFields

• `Private` `Readonly` **isFields**: `boolean`

#### Defined in

[packages/core/src/Field.ts:47](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L47)

___

### range

• **range**: `undefined` \| (`undefined` \| `number`)[]

#### Defined in

[packages/core/src/Field.ts:50](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L50)

___

### rows

• `Private` `Readonly` **rows**: `number`

#### Defined in

[packages/core/src/Field.ts:40](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L40)

___

### translateX

• `Private` `Readonly` **translateX**: `undefined` \| `boolean`

#### Defined in

[packages/core/src/Field.ts:46](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L46)

___

### us

• `Private` `Readonly` **us**: `number`[]

#### Defined in

[packages/core/src/Field.ts:41](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L41)

___

### vs

• `Private` `Readonly` **vs**: `number`[]

#### Defined in

[packages/core/src/Field.ts:42](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L42)

___

### wrapX

• `Private` **wrapX**: `boolean`

#### Defined in

[packages/core/src/Field.ts:51](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L51)

___

### xmax

• `Private` `Readonly` **xmax**: `number`

#### Defined in

[packages/core/src/Field.ts:36](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L36)

___

### xmin

• `Private` `Readonly` **xmin**: `number`

#### Defined in

[packages/core/src/Field.ts:35](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L35)

___

### ymax

• `Private` `Readonly` **ymax**: `number`

#### Defined in

[packages/core/src/Field.ts:38](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L38)

___

### ymin

• `Private` `Readonly` **ymin**: `number`

#### Defined in

[packages/core/src/Field.ts:37](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L37)

## Methods

### bilinearInterpolateVector

▸ `Private` **bilinearInterpolateVector**(`x`, `y`, `g00`, `g10`, `g01`, `g11`): [`Vector`](core_src.Vector.md)

Bilinear interpolation for Vector
针对向量进行双线性插值
https://en.wikipedia.org/wiki/Bilinear_interpolation

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `g00` | `Object` |
| `g00.u` | `number` |
| `g00.v` | `number` |
| `g10` | `Object` |
| `g10.u` | `number` |
| `g10.v` | `number` |
| `g01` | `Object` |
| `g01.u` | `number` |
| `g01.v` | `number` |
| `g11` | `Object` |
| `g11.u` | `number` |
| `g11.v` | `number` |

#### Returns

[`Vector`](core_src.Vector.md)

#### Defined in

[packages/core/src/Field.ts:164](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L164)

___

### buildGrid

▸ **buildGrid**(): (``null`` \| [`Vector`](core_src.Vector.md))[][]

#### Returns

(``null`` \| [`Vector`](core_src.Vector.md))[][]

#### Defined in

[packages/core/src/Field.ts:113](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L113)

___

### calculateRange

▸ **calculateRange**(): `undefined` \| `any`[]

calculate vector value range

#### Returns

`undefined` \| `any`[]

#### Defined in

[packages/core/src/Field.ts:187](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L187)

___

### checkFields

▸ **checkFields**(): `boolean`

判断是否是 `Field` 的实例

#### Returns

`boolean`

boolean

#### Defined in

[packages/core/src/Field.ts:523](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L523)

___

### clampColumnIndex

▸ `Private` **clampColumnIndex**(`ii`): `number`

Check the column index is inside the field,
adjusting to min or max when needed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ii` | `number` | index |

#### Returns

`number`

i - inside the allowed indexes

#### Defined in

[packages/core/src/Field.ts:363](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L363)

___

### clampRowIndex

▸ `Private` **clampRowIndex**(`jj`): `number`

Check the row index is inside the field,
adjusting to min or max when needed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jj` | `number` | index |

#### Returns

`number`

j - inside the allowed indexes

#### Defined in

[packages/core/src/Field.ts:382](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L382)

___

### contains

▸ **contains**(`lon`, `lat`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon` | `number` |
| `lat` | `number` |

#### Returns

`any`

#### Defined in

[packages/core/src/Field.ts:249](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L249)

___

### extent

▸ **extent**(): `number`[]

grib data extent
格点数据范围

#### Returns

`number`[]

#### Defined in

[packages/core/src/Field.ts:148](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L148)

___

### getDecimalIndexes

▸ **getDecimalIndexes**(`lon`, `lat`): `number`[]

获取经纬度所在的位置索引

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon` | `number` |
| `lat` | `number` |

#### Returns

`number`[]

#### Defined in

[packages/core/src/Field.ts:266](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L266)

___

### getFourSurroundingIndexes

▸ `Private` **getFourSurroundingIndexes**(`i`, `j`): `number`[]

计算索引位置周围的数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `number` | decimal index |
| `j` | `number` | decimal index |

#### Returns

`number`[]

[fi, ci, fj, cj]

#### Defined in

[packages/core/src/Field.ts:401](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L401)

___

### getFourSurroundingValues

▸ `Private` **getFourSurroundingValues**(`fi`, `ci`, `fj`, `cj`): ``null`` \| `any`[]

Get four surrounding values or null if not available,
from 4 integer indexes

#### Parameters

| Name | Type |
| :------ | :------ |
| `fi` | `number` |
| `ci` | `number` |
| `fj` | `number` |
| `cj` | `number` |

#### Returns

``null`` \| `any`[]

#### Defined in

[packages/core/src/Field.ts:426](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L426)

___

### getWrappedLongitudes

▸ `Private` **getWrappedLongitudes**(): `number`[]

#### Returns

`number`[]

#### Defined in

[packages/core/src/Field.ts:232](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L232)

___

### hasValueAt

▸ **hasValueAt**(`lon`, `lat`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon` | `number` |
| `lat` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Field.ts:325](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L325)

___

### interpolatePoint

▸ `Private` **interpolatePoint**(`i`, `j`): ``null`` \| [`Vector`](core_src.Vector.md)

基于向量的双线性插值

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `j` | `number` |

#### Returns

``null`` \| [`Vector`](core_src.Vector.md)

#### Defined in

[packages/core/src/Field.ts:335](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L335)

___

### interpolatedValueAt

▸ **interpolatedValueAt**(`lon`, `lat`): ``null`` \| [`Vector`](core_src.Vector.md)

Get interpolated grid value lon-lat coordinates
双线性插值

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon` | `number` |
| `lat` | `number` |

#### Returns

``null`` \| [`Vector`](core_src.Vector.md)

#### Defined in

[packages/core/src/Field.ts:310](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L310)

___

### isValid

▸ `Private` **isValid**(`x`): `boolean`

检查 uv是否合法

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/Field.ts:228](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L228)

___

### latitudeAtY

▸ `Private` **latitudeAtY**(`j`): `number`

Latitude for grid-index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `j` | `number` | row index (integer) |

#### Returns

`number`

latitude at the center of the cell

#### Defined in

[packages/core/src/Field.ts:485](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L485)

___

### lonLatAtIndexes

▸ **lonLatAtIndexes**(`i`, `j`): `number`[]

Lon-Lat for grid indexes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `number` | column index (integer) |
| `j` | `number` | row index (integer) |

#### Returns

`number`[]

[lon, lat]

#### Defined in

[packages/core/src/Field.ts:459](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L459)

___

### longitudeAtX

▸ `Private` **longitudeAtX**(`i`): `number`

Longitude for grid-index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `number` | column index (integer) |

#### Returns

`number`

longitude at the center of the cell

#### Defined in

[packages/core/src/Field.ts:471](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L471)

___

### randomize

▸ **randomize**(`o?`, `width`, `height`, `unproject`): `IPosition`

生成粒子位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `IPosition` |
| `width` | `number` |
| `height` | `number` |
| `unproject` | (`a`: `number`[]) => ``null`` \| [`number`, `number`] |

#### Returns

`IPosition`

IPosition

#### Defined in

[packages/core/src/Field.ts:498](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L498)

___

### release

▸ **release**(): `void`

release data

#### Returns

`void`

#### Defined in

[packages/core/src/Field.ts:140](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L140)

___

### valueAt

▸ **valueAt**(`lon`, `lat`): ``null`` \| [`Vector`](core_src.Vector.md)

Nearest value at lon-lat coordinates
线性插值

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon` | `number` |
| `lat` | `number` |

#### Returns

``null`` \| [`Vector`](core_src.Vector.md)

#### Defined in

[packages/core/src/Field.ts:283](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L283)

___

### valueAtIndexes

▸ **valueAtIndexes**(`i`, `j`): ``null`` \| [`Vector`](core_src.Vector.md)

Value for grid indexes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `number` | column index (integer) |
| `j` | `number` | row index (integer) |

#### Returns

``null`` \| [`Vector`](core_src.Vector.md)

#### Defined in

[packages/core/src/Field.ts:449](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Field.ts#L449)
