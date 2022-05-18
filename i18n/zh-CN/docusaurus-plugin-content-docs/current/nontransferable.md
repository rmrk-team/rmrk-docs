---
title: "不可转让的NFT"
---

由Vitalik Buterin推广为[soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html)的不可转让NFT是对声誉跟踪有用的NFT：它们被添加到地址中但却是不可转移的，因此它们不能被出售，并会永久地为给定的地址提供一些修饰属性。

> 译注：修饰属性指如POAP等这一类无法被转移的链上荣誉或者污点

在RMRK中，这是一个特别有趣的概念，因为NFT可以在另一个可转让的NFT中不可转让。因此，像[Kanaria](https://kanaria.rmrk.app)这样的NFT可以在其中包含不可转让的宝石，为其提供持久的好处和奖金，但不能被移除。

在处理游戏中的角色和技能系统时，可以进一步利用这一点。可以学习技能并将其“安装”到角色的大脑中，但不能被移除。

除了简单的开/关标志外，Kusama实现（见下文）还支持临时可转让性和临时不可转让性，这允许铸造方指定NFT只能在一定数量的块之后才能移动，或者在一定数量之前不能移动。

## 实现

下面的实现将直接指向代码。有关如何使用它们来铸造您自己的 NFT 的示例，请参阅侧边栏中每个子类型实现的章节。

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard)
- EVM(开发中)
- Pallets(开发中)