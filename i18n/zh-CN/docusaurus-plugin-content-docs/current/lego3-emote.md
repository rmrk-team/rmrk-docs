---
title: "链上表情"
---

RMRK支持对NFT做出“反应”。

在底层实现上，为unicode被应用到NFT ID上单独记录。

> 译注：类似于维护一个映射关系，可能是每个NFT ID对应一个由各种emoji unicode组成的数组。

反应是一种开关，这意味着当你已经发送了 👍 时，再次发送 👍 的话，实际上会移除它。

> 译注：和微博、推特同理，点赞之后如果再点一次，就是取消之前的点赞。

目前，所有的反应都同样适用并由所有实现渲染，但未来会有计划，向集合添加接受条件，以限制没有特定NFT的人的表情，限制表情数量以适应FCFS(First Come, First Served)列表，限制NFT可以接收的表情类型，等等。

在传输过程中，所有反应也会与NFT一起转移。这些反应本身不是NFT，只是添加到现有数据记录——NFT中。

## 实现

下面的实现将直接指向代码。有关如何使用它们来铸造您自己的 NFT 的示例，请参阅侧边栏中每个子类型实现的章节。

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/emote.md)
- EVM (研究阶段)
- Pallets (研究阶段)
- Rollups (研究阶段)
