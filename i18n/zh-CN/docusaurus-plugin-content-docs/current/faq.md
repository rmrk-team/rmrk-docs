---
title: "FAQ: 常见问题解答"
---

非技术性的FAQ现在托管在[自助知识库](https://coda.io/@rmrk/faq).

## IPFS托管是怎么工作的？

IPFS或星际文件系统使用“内容散列”。这意味着一段内容通过散列算法进行处理，这是一种单向数学函数，对于相同的输入总是产生相同的输出。即使更改原始内容中的单个字母也会产生完全不同的哈希值。

然后将这些哈希转换为如下内容地址：`ipfs://QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR`，浏览器或[IPFS网关](https://docs.ipfs.io/concepts/ipfs-gateway/)可以访问。

世界各地的许多机器都运行IPFS协议，并公布它们托管的内容哈希值，以便在需要找到某个内容时，可以为其建立路径。

这些机器在访问这段内容时，下载并重新托管它，将其保存在内存中，允许您使用它并向其他人宣传他们拥有副本，并在网络上传播它。但是除非内容 _被固定_，否则它会在一段时间不被访问后消失，或者一旦机器通过称为垃圾收集的过程重新启动后就会消失。

被固定的内容永远不会被垃圾收集。

有几种服务可以为您下载和固定IPFS内容，但需要付费。[Pinata](https://pinata.cloud)和[Crust](https://curst.network)是非常受欢迎的。或者，您可以[运行自己的节点](https://medium.com/ethereum-developers/how-to-host-your-ipfs-files-online-forever-f0c56b9b5398)并将内容固定在那里，但是您的节点必须始终在线并且可以通过互联网访问才能正常工作，这不是大多数人可以在家中运行的。

在IPFS上托管NFT内容时，您需要为使用此类服务​​固定您自己的内容付费，或者确保内容是持久的并且不会消失。

通过[Singular.app](https://singular.app)铸造(NFT)时，RMRK为你将涵盖这份固定费用。
