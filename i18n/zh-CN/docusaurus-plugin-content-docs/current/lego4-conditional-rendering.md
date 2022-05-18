---
title: "条件渲染"
---

条件渲染使用[jsonlogic](https://jsonlogic.com/)根据某些链上和链下条件定义对NFT的仅客户端渲染更改。

例如，描绘月球图像的NFT，如果上面有50个 🌓 和30个 🚀 表情符号，就会变成半月形并且有火箭降落在上面的样子。

一个苹果的NFT可能会在某个区块后腐烂，变成一个烂苹果的图像，或者如果通过🍴emoji表情及时消费，它就会变成一个苹果核。

如果自行车的NFT图像被出售超过50次，则可能会显示出变质和破旧的迹象。

如果人们在集合中铸造了超过50只狼，或者将别的狼[发送到](lego1-nested.md)原始的狼里，那狼图像就会显示为一个狼群。

这些互动可以产生游戏内效果，但也可以是社区驱动的艺术。这是一种协作体验，如果有足够多的人以某种方式与NFT交互，它的本质就会改变。

NFT 的逻辑块可能如下所示：

```
    "logic": [
        {
            ">": ["emotes.🚀", 50],
            "priority": [2,3,1] // change resource prio based on condition == true
        },
        {
            ">": ["emotes.❄", 100],
            "resources.0.bg": "newhash" // overrides the background image in the base, if such a part exists
        },
        {
            "==": ["this.rain", "true"],
            "resources.0.bg": "hash-of-rainy-background"
        }
    ],
```

在上面的示例中，您可以看到三个场景：

- 如果 NFT 获得超过 50 个火箭[表情](lego3-emote.md)，它将显示不同的资源作为最高优先级。因此，如果月球上有50枚火箭，则表明月球着陆。
- 如果NFT获得超过50个雪emoji，则第一个资源的默认背景将被覆盖并显示为雪山。
- 如果 NFT 的可变属性设置为“rain”，则背景变为下雨图像。

## 实现

目前还没有该规范的落地实现。

- Kusama (研究阶段)
- EVM (研究阶段)
- Pallets (研究阶段)