# wind-layer 各包参数说明

## `WindCore` 参数说明

:::tip
此类库主要用于外部扩展，不可以直接使用，相关参数也需要通过扩展图层传入。
:::

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `minVelocity` | 粒子最小风速 | `number` | 配置此值主要影响当`colorScale`为颜色数组时的颜色索引，非必填 |
| `maxVelocity` | 粒子最大风速 | `number` | 配置此值主要影响当`colorScale`为颜色数组时的颜色索引，必填 |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## fieldOptions 数据配置项说明

```ts
export interface IField {
  /* 一般格点数据是按照矩形范围来切割，所以定义其经纬度范围 */
  xmin: number; // 经度最小值
  ymin: number; // 纬度最小值
  xmax: number; // 经度最大值
  ymax: number; // 纬度最大值
  deltaX: number; // x（经度）增量
  deltaY: number; // y（纬度）增量 (默认我们采用的数据和格点原始数据方向保持一致，数据从左上到右下) 但是需要注意的是此时 deltaY为 -(ymax-ymin) / rows
  cols: number; // 列（可由 `(xmax - xmin) / deltaX` 得到）
  rows: number; // 行
  us: number[]; // U分量
  vs: number[]; // V分量
  flipY?: boolean; // 因为grib2json的问题，我们需要翻转 Y 轴数据
  wrapX?: boolean; // 是否实现跨世界渲染
  wrappedX?: boolean; // 当数据范围时按照 [0, 360] 时需要对x方向进行切割转换为 [-180, 180]，即将废弃
  translateX?: boolean; // 当数据范围时按照 [0, 360] 时需要对x方向进行切割转换为 [-180, 180]
}
```

## `ol-wind` 参数说明

:::tip
对应于 `openlayers 6` 相关参数，风场默认参数最好最好放到参数的 `windOptions`
:::

### 图层参数

| 参数 | 说明           | 类型        | 默认值 |
|---------|--------------|-----------|------|
| `forceRender` | 在鼠标交互时始终显示粒子 | `boolean` | `--` |
| `windOptions` | 风场参数，具体配置如下  | `object`  | `--` |
| `fieldOptions` | 数据配置项        | `object`  | `--` |
| `zIndex` | 图层层级         | `number`  | `--` |
其他参数遵循 `ol` 基础图层参数。

### windOptions

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## `ol5-wind` 参数说明

### 图层参数

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `windOptions` | 风场参数，具体配置如下 | `object` | `--` |
| `fieldOptions` | 数据配置项        | `object`  | `--` |
| `map` | 地图对象, 在使用 `WindLayer` 必须配置，不需要调用 `addLayer`，在使用 `PerfWindLayer`，可选，具体可以参考 `openlayer` 官方文档 | `ol.Map` | `--` |
| `zIndex` | 图层层级 | `number` | `--` |
其他参数遵循 `ol` 基础图层参数。

### windOptions

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## `openlayers-wind` 参数说明

:::tip
对应于 `openlayers 3-4` 相关参数
:::

### 图层参数

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `windOptions` | 风场参数，具体配置如下 | `object` | `--` |
| `fieldOptions` | 数据配置项        | `object`  | `--` |
| `map` | 地图对象，必须配置，不需要调用 `addLayer`，具体可以参考 `openlayer` 官方文档 | `ol.Map` | `--` |
| `zIndex` | 图层层级 | `number` | `--` |
其他参数遵循 `ol` 基础图层参数。

### windOptions

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## `amap-wind` 参数说明

:::tip
注意地图 `viewMode` 最好不要设置为 `3D` 模式，目前性能有一定问题
:::

### 图层参数

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `fieldOptions` | 数据配置项        | `object`  | `--` |
| `windOptions` | 风场参数，具体配置如下 | `object` | `--` |
| `zIndex` | 图层层级 | `number` | `--` |
其他参数遵循 `高德地图` 的 `CanvasLayer` 基础图层参数，请自行查阅对应文档。

### windOptions

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## `bmap-wind` 参数说明

:::tip
百度地图风场图层主要实现是基于官方  `Overlay` 图层来实现的，基础参数请查阅对应文档，使用 `addOverlay` 添加图层。
:::

### 图层参数

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `fieldOptions` | 数据配置项        | `object`  | `--` |
| `windOptions` | 风场参数，具体配置如下 | `object` | `--` |
| `zIndex` | 图层层级 | `number` | `--` |

### windOptions

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## `@sakitam-gis/maptalks-wind` 旧版 参数说明

:::tip
默认只有 `canvas` renderer
:::

### 图层参数

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `windOptions` | 风场参数，具体配置如下 | `object` | `--` |
| `fieldOptions` | 数据配置项        | `object`  | `--` |
| `zIndex` | 图层层级 | `number` | `--` |
其他参数遵循 `maptalks` 的 `CanvasLayer` 基础图层参数。

### windOptions

| 参数 | 说明 | 类型 | 默认值 |
|---------|---------|-----|------|
| `globalAlpha` | 全局透明度，主要影响粒子路径拖尾效果 | `number` | `0.9` |
| `lineWidth` | 粒子路径宽度 | `number\|function` | `1`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `colorScale` | 粒子颜色配置 | `string\|function\|string[]` | `#fff`，当为回调函数时，参数`function(m:对应点风速值) => string` |
| `velocityScale` | 对于粒子路径步长的乘积基数 | `number` | `1 / 25` |
| `maxAge \| particleAge(不推荐使用) ` | 粒子路径能够生成的最大帧数 | `number` | `90` |
| `paths ` | 生成的粒子路径数量 | `number\|function` | `800`, 当为回调函数时，参数`function(m:对应点风速值) => number` |
| `particleMultiplier` | 粒子路径数量的系数，不推荐使用（视野宽度 * 高度 * 系数） | `number` | `1 / 300` |
| `frameRate` | 帧率（ms） | `number` | `20` |

## @sakitam-gis/mapbox-wind 参数说明

<sfc-playground src="./index.vue" language="vue" title="" desc="plotty渲染"></sfc-playground>
