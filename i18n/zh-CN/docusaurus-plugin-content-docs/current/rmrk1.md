---
title: RMRK 1.0 (已弃用)
---

由于RMRK的发源地Kusama没有智能合约或可编程性，RMRK1.0基于`system.remark`这个许多[Substrate](https://substrate.dev)链的工具函数，包括[Kusama](https://kusama.network)。

> 译注：下文的“标记”对应的英文含义就是Remarks

标记就像笔记，就像区块上的涂鸦。信息不存储在链的trie中，而是作为输入存储在块中。标记是无影响的外部调用（外部输入），这意味着它们不会改变链的存储，而是与块记录一起存储在节点的硬盘上。

通过以特殊方式解释这些数据，工具可以以不同于外部观察者的方式理解信息。

打个比方，区块链是一艘船，每个区块都是一个集装箱。区块里面是交易。标记不将内容放入集装箱中，而是在集装箱侧面涂鸦。消息仍然会被发送，但不会影响集装箱的内容。到达时，一个特殊的语言解释器（RMRK 规范）将解释这些涂鸦以形成NFT状态的连贯图。

如何解释这一点的 **规则** 称为规范或标准，RMRK就是这样一组规则。因此，RMRK将规则应用于 _标记_，这就是我们所说的[基于Substrate的区块链](https://dotleap.com/an-explanation-of-substrate-for-humans/)（如 Kusama 或 Polkadot）上的区块链涂鸦。

> RMRK 是一套规则，规定如何解释区块链涂鸦，让我们在没有智能合约的情况下模拟链上的逻辑。

例如，想象一下像这样发出涂鸦（标记）：

```
ALICE::Init::Apple::5
```

Alice的账户被允许发出如下的SEND交易：

```
ALICE::Send::Apple::3::Bob
```

RMRK标准确保Alice拥有超过3个苹果，她是发送交易的人，并且接收者是有效的（不是乱填的地址）。

如果Alice尝试：

```
ALICE::Send::Apple::10::Alice
```

。。。她基本就能无限打印苹果。我们不希望这样，因此系统 **必须** 检查发送的数量是否小于或等于库存中的数量。如果Bob试图发出和Alice同样的交易也是一样的——工具会阻止并忽略这样的标记，因为Bob不能与Alice的库存交互。

这些规则在[RMRK规范](https://github.com/rmrk-team/rmrk-spec)中进行了定义，但在本文档中进行了提高易读性、澄清、编纂和举例说明。

在许多方面，RMRK1.0就像你在以太坊上可能习惯的任何NFT标准——一种存储多媒体引用的简单方法。我们通过链上[表情](lego3-emote.md)增强了这一点。

自[RMRK 2](rmrk2.md)发布以来，RMRK 1.0已被弃用。在[旧版Singular](https://singular.rmrk.app)上可以看到旧的RMRK1 NFT 。