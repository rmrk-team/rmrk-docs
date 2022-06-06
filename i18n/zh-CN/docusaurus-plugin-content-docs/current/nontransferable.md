---
title: "不可转让的NFT"
---

由Vitalik Buterin推广为[soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html)的不可转让NFT是对声誉跟踪有用的NFT：它们被添加到地址中但却是不可转移的，因此它们不能被出售，并会永久地为给定的地址提供一些修饰属性。

> 译注：修饰属性指如POAP等这一类无法被转移的链上荣誉或者污点

在RMRK中，这是一个特别有趣的概念，因为NFT可以在另一个可转让的NFT中不可转让。因此，像[Kanaria](https://kanaria.rmrk.app)这样的NFT可以在其中包含不可转让的宝石，为其提供持久的好处和奖金，但不能被移除，此外还有一些可交易的NFT。

![Kanaria example image](/img/post_imgs/ntnft.png)

在处理游戏中的角色和技能系统时，可以进一步利用这一点。可以学习技能并将其“安装”到角色的大脑中，但不能被移除。

除了简单的开/关标志外，Kusama实现（见下文）还支持临时可转让性和临时不可转让性，这允许铸造方指定NFT只能在一定数量的块之后才能移动，或者在一定数量之前不能移动。

## 示例
如[可装备](/lego25-equippable)概念中所述，使用不可转让NFT的一个很好的例子是使用它们作为声誉指标，但不是在上述[灵魂绑定文章](https://vitalik.ca/general/2022/01/26/soulbound.html)中记录的帐户上，而是在其他可转让或不可转让的NFT中。

- [Zeitgeist](https://zeitgeist.pm)是一个预测市场链，将为每个链用户提供一个角色，并根据他们在预测市场中的表现给予他们声誉（不可转让）代币来装备。

- [Citizend](https://www.citizend.xyz/)是一个作为 DAO 的公共非抽签项目launchpad，将为用户角色提供基于表现的声誉令牌（不可转让），根据他们获得的声誉，稍后将在治理中拥有更好的机会和更突出的投票。

- [Governance Rewards in Kusama](https://www.youtube.com/watch?v=lpT7hubqzFQ)为人们参与的每一次链上公投奖励奖杯，他们可以将其装备到他们的“声誉”架子上。这不仅在视觉上表明了你在世界上最大的 DAO（Kusama 和 Polkadot）中的链上活动，而且还为其他应用程序提供了非常好的服务，例如你从像Acala这样的Defi中心跨链读取该信息，也许你现在的声誉可以作为足够的抵押品来获得抵押不足的贷款。

- [Phala World](https://phala.world)跟踪用户的web3活动，并将其转化为Phala World游戏角色内的不可转让的声誉令牌，只能通过这种方式升级。因此，您不是通过玩游戏来升级，而是通过成为一个优秀的web3公民来升级，这会转化为您的角色上不可转让的技能和经验。

- [Kabocha](https://rmrk.link/kabocha)Seeds是Kabocha治理的核心，代表了网络和未来Publiks中不断演进的角色、权利和声誉。Seeds是基于对项目的持续贡献而增长的独特的、不可转让的资产。他们将定义您如何在未来的Publik域中建立身份、投票权和访问权限。

- [InvArch](https://rmrk.link/invarch)是使用RMRK NFT进行IP管理的区块链，许可证本质上是不可转让的NFT，作为另一个 NFT 的一部分，以及其他与想法相关的信息。因此，不可转让的NFT也可以作为想法的“声誉”代币。

- [Skybreach](https://skybreach.app)使用不可转移的NFT作为NFT角色的NFT大脑，这些大脑内部的NFT技能可以装备到插槽中，以及NFT的个性、NFT的制作配方、NFT的寻路算法等。例如，一个具有NFT大脑的角色，在2级具有2个技能槽，但有5种不同的技能。所以现在他们需要选择从5种技能中选哪2种出来激活使用。他们可以升级角色以获得拥有3个插槽的NFT大脑上的新资源，因此在3级时他们可以装备从5个技能种装备3个，以此类推。这就是[Skybreach Chunkies](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies)的工作方式。

上述所有项目也是[全球物品经济](/econ)的一部分，配合RMRK得以实现，因此它们可以拥有可互换的配件，这些配件可以跨系列兼容，因此随着时间的推移，它们始终会获得新的实用性。

## 实现

下面的实现将直接指向代码。有关如何使用它们来铸造您自己的 NFT 的示例，请参阅侧边栏中每个子类型实现的章节。

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard)
- EVM(开发中)
- Pallets(开发中)