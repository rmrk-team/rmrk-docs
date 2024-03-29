---
title: 可证明的数字稀缺性
---

今天大多数NFT项目只是模拟的稀缺。当然，它们的供应有限，但这些NFT（如果有的话）的效用没有上限。

例如，您可以使用相同的NFT使用相同的钱包登录500个不同的Sandbox实例。您可以同时将同一顶帽子装备到500个不同的游戏内角色上，因为它的视觉表现只是客户端的东西。平台和项目根本不是抗女巫的，NFT也不稀缺。

> 译注：女巫攻击，简言之就是开小号。[这里](https://academy.binance.com/zh/articles/sybil-attacks-explained)了解更多。

使用RMRK，为了简单起见，再次以游戏为例，一块元宇宙土地 **就是** 一个NFT。而要使角色在那个土地上，它就必须 **在** 那个土地上——字面意思是[发送到](/lego1-nested)另一个 NFT。根据定义，如果它在一个土地上，它就不可能在另一个土地上。如果一顶帽子[装备](/lego25-equippable)在一个角色上（通过被发送进去然后装备），它就不能在另一个角色上。

> 译注：这个章节的概念其实很容易理解，RMRK实现了链上的可组合能力，确保了NFT与NFT之间的关系在链上有实际的体现。而目前可玩的链游与元宇宙中的NFT之间存在的关系依然被保存在中心化的存储中，并没有将关系体现到链上。所以NFT功能的稀缺性，是一种虚假的稀缺，任何客户端都可以无限扩展或者无效化某个NFT的承诺功能。

在RMRK标准中，真正的、可证明的数字稀缺性就像NFT技术最初承诺的那样，变成了默认实现。