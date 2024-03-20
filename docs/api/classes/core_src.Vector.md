---
sidebar: "auto"
editLinks: false
sidebarDepth: 4
---

[Class Docs](../index.md) / [core/src](../modules/core_src.md) / Vector

# Class: Vector

[core/src](../modules/core_src.md).Vector

## Constructors

### constructor

• **new Vector**(`u`, `v`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `number` |
| `v` | `number` |

#### Defined in

[packages/core/src/Vector.ts:6](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L6)

## Properties

### m

• **m**: `number`

#### Defined in

[packages/core/src/Vector.ts:4](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L4)

___

### u

• **u**: `number`

#### Defined in

[packages/core/src/Vector.ts:2](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L2)

___

### v

• **v**: `number`

#### Defined in

[packages/core/src/Vector.ts:3](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L3)

## Methods

### directionFrom

▸ **directionFrom**(): `number`

Angle in degrees (0 to 360º) From x-->
N is 0º and E is 90º

#### Returns

`number`

#### Defined in

[packages/core/src/Vector.ts:40](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L40)

___

### directionTo

▸ **directionTo**(): `number`

流体方向 （这里指风向，范围为0-360º）
N is 0º and E is 90º

#### Returns

`number`

#### Defined in

[packages/core/src/Vector.ts:26](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L26)

___

### magnitude

▸ **magnitude**(): `number`

向量值（这里指风速）

#### Returns

`number`

#### Defined in

[packages/core/src/Vector.ts:17](https://github.com/sakitam-fdd/wind-layer/blob/fa9bdd2/packages/core/src/Vector.ts#L17)
