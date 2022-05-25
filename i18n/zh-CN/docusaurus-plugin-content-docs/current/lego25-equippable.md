---
title: "Base和可装备NFT"
---

我们引入了BASE的概念。

Base可以被认为是组成NFT的 _部件清单_。部件可以是`slot(插槽)`类型或`fixed(固定)`类型。插槽用于实现可装备物件。

> 注意：通过指定base并挑选每个NFT的部件列表，将base作为单独的资源添加到NFT。每个实现的方法略有不同，因此下面的示例将主要使用伪代码来传达这个概念。

> 译注：译者制作了一个中文介绍视频，同样介绍了如何理解Base，可以参考该视频：https://www.bilibili.com/video/BV1VT4y1v7Ss?t=492.8

Base可以是不同的媒体类型。

Base类型指示了在渲染此资源时，NFT的最终输出是什么。支持的类型是 PNG、SVG、音频、视频，甚至混合类型。

通过像PNG或SVG base这样的视觉示例来理解base和可装备物件是最容易的，因此我们将在下面的解释中专注这一点。本页末尾提供了不同类型的其他示例。

关于可装备物件的最重要的概念是最终输出不是静态的。例如，在犀牛身上戴上一顶帽子并不会生成新的静态图像来代替旧图像。取而代之的是，帽子在犀牛的图像中动态渲染，犀牛的图像必须提前为这个功能做好准备。

这就是Base系统所允许的：无论类型如何，在mint NFT集合时都提前考虑到装备能力 - 音频文件可以为音频stem准备插槽，电影base可以使用过滤器插槽作准备，但视频文件也可以有字幕插槽，甚至是替代音轨等等。

## Base是怎么工作的：Chunkies案例

Base是“组件”的列表，它们的组合可用于形成单个 NFT。

让我们以一个名为Chunkies的角色项目为例：胖乎乎的角色可以拿着物品，戴着头饰，有不同的背景，而且彼此之间看起来很独特。这里有一些组合。

![Chunky examples](/img/post_imgs/P5FUhk8.jpeg)

每个Chunky都是来自Chunky base的不同部件的组合。

![Chunky base](/img/post_imgs/chunky1.png)

其中一些部件是可以放置其他兼容图像的插槽 - 这些是可装备的物件。单独检查时，这些插槽是不可见的 - 在最终的构图中，它们会出现，例如，在Chunky的（背景）后面，或者在手指和手掌之间。下面的红色对角线显示了物件将出现的位置。

![Chunky slots](/img/post_imgs/chunky2.png)

将可装备资源添加到NFT的过程：

1. 创建一个base实体
2. 向目标NFT添加新资源
   
这个新资源定义了一个base和一些挑选的部件，如下所示：

```
    "resources": [
        {
            "base": "base-8788686-CHUNKBASE",
            "id": "Whqja-r1",
            "parts": [
                "var1_body",
                "var1_eyes",
                "1fa78_handleft",
                "1fa78_handright",
                "var1_head",
                "background",
                "foreground",
                "headwear",
                "objectleft",
                "objectright",
                "necklace",
            ],
            "pending": false,
            "themeId": "bandicoot",
            "thumb": "ipfs://ipfs/QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"
        }
    ],
```

你可以在上面的模拟代码中看到，我们正在处理某个NFT的`resources`数组。

特别是这个NFT只有一个资源——可装备的base本身。该`base`值是指Base元实体的ID，资源的`id`用于索引，并且能够在想要替换、接受或删除特定资源时定位某个资源，同时`pending`告诉我们NFT所有者是否已接受这个资源（如果是"否"，代表已经接受）。

> ❗️ 更多的接受机制信息在[多源NFT](/lego2-multi-resource)查看。

最重要的部分是`parts`——这是一个数组，我们在其中指定选中的`base`中的哪些部分组成了这个NFT。这些部件是在`base`自身中定义的，如下所示：

```
  ...,
  {
    type: 'slot',
    id: 'headwear',
    equippable: [
      '9cba890074545f2e7c-KANPRTN',
      'e0b9bdcc456a36497a-EVNTS',
    ],
    z: 13,
  },
  {
    type: 'fixed',
    id: 'var1_head',
    src: 'ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR/var1/var1_head.svg',
    z: 9,
  },
  ...
```

第一个槽是`headwear（头饰）`，你可以看到它是一个`slot`类型。`equippable`数组列出了允许作为可装备物件的集合。Base的发布者可以在任何时候修改这个值，随意添加和删除集合。

`fixed`部件只指明应该被渲染的视图。它是不可变的。

两者中的`z`值都指示视图出现在SVG base上的哪一层，高度方向。数字越大，“离相机越近”。这对于插槽尤其重要，因为——根据上图——`z`手持插槽的值需要在手指和手掌之间，并且背景的`z`值就需要是最小的，从而使它被渲染在最下面。

因此，作为base的资源将从该base中挑选出一部分来组成最终的NFT，直到我们得到五颜六色的chunkies。

我们的旗舰项目Kanaria使用了同样的方式。如果你愿意，你可以在[这里](https://gist.github.com/Yuripetusko/dccd18ef3efe6058d73c29dbe0ef5b6f)探索它的完整base。

Kanaria项目的完整图形分解及其base工作原理也可在[此处](https://url.rmrk.app/demobird)获得。

## 示例：可升级角色

通过使用可装备物件和多资源，一种完全去中心化的链上表示角色级别要求的方式是可能的。

如果我们以1级的Chunky为例，这个NFT可以有一个指向该Chunky base的资源，但从中只选择`equippable`设置为1级集合的部件，将NFT限制为只能装备1级装备。

级别本身可以是角色内部可装备的NFT——“level brain”需要以成功的任务旅行的形式收集经验。根据收集到的成就，Chunky可以获得不同类型的升级。

例如，要升级到2级，Chunky需要完成两个任务。如果这些任务是在火世界中完成的，那么下一个资源可能会有一个火[主题](#theming)。如果它们是在水世界中完成的，则应用为水主题。NFT所有者会选择将哪些“任务成功”装备到角色内部的“等级NFT”中，并以此方式创建完整的“经验集”。

一旦这个Chunky积累了足够的经验进入2级，就可以向其中添加一个新资源，通过ID定位前一个资源，以便在NFT所有者接受时替换它。该资源将指向同一个base，但现在将选择配置为接受1级和2级物品集合的插槽部件，从而现在可以装备更高级别的装备。

另一个例子是将具有一定数量插槽的“brain NFT”赋予特定级别的角色。例如，2级角色的大脑中只能 _装备_ 2种技能，但如果角色知道超过 2 种技能，玩家必须在休息一段时间后选择加载哪些技能，就像在《龙与地下城》里的巫师咒语。

## 示例：音乐

一首歌曲NFT可以有一个音乐base资源，这个base拥有一个具有固定的节拍，但有用于人声、鼓、合成器、效果器的插槽，甚至是用于可视化的插槽——甚至可能用于一些可运行的[p5.js](https://p5js.org/)代码。

在向使用自己的stem为歌曲创作做出贡献的任何人支付版税的情况下，这真的很酷，但不仅如此，我们可以更进一步：歌曲本身，或者可能只是一个stem还可以被装备到一个元宇宙的土地base资源上。

这样，无论谁进入这片土地，它都会作为该地区的配乐，背景音乐播放。因此，音乐不仅与它自己的项目或发行人的相关项目兼容，而且与任何可以在 RMRK 标准上启动的项目兼容。

## 示例：游戏

游戏用例是显而易见的，我们通过[Skybreach](https://skybreach.app)将其变成了概念验证。

- 房子可以被装备到一块土地上。
- 一个广告牌也可以被装备到土地上，然后通过额外的社区管理方式，为股东赚取收益。
- 角色可以装备夹克。那件夹克有口袋可以用于装备别的东西和用于补丁的插槽。
- 一个NPC可以是一个装备了个性NFT的NFT，或者上架出售的技能NFT。

## 主题

RMRK规范支持主题插值。这允许将另一层独特性应用于您的NFT，而无需专门设计和开发它们。

一个base将包含按名称键入的主题，如下所示：

```
...
themes: {
  sunkissed: {
    theme_color_1: '#ffd592',
    theme_color_2: '#edffd9',
    theme_color_3: '#eb5a8b',
    theme_color_4: '#ee9154',
  },
  retrosteel: {
    theme_color_1: '#98baff',
    theme_color_2: '#8af3fc',
    theme_color_3: '#5562e9',
    theme_color_4: '#d16dd1',
  },
  ...
```

这些是可以包含任何值的变量——在这个例子中它们是颜色。然后，SVG本身可以包含一个占位符数据属性，该变量被插入其中，但它有自己的默认值：

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" data-theme_color_3="red" />
</svg>
```

最后，主题被选为要添加到NFT的资源的一部分：

```json
    "resources": [
        {
            "base": "base-8788686-CHUNKBASE",
            "id": "Whqja-r1",
            "parts": [...],
            "pending": false,
            "themeId": "sunkissed", // <--- THIS HERE
            "thumb": "ipfs://ipfs/QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"
        }
    ],
```

这确实需要一些额外的工作来制作SVG并准备它们以供使用，但它会在你的NFT上产生数量级更大的更多可能的组合。

[这里](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/themeadd.md)提供了更全面的示例。

## 其他示例

[Mushroomtopia 可组合 PFP 项目](https://twitter.com/bitfalls/status/1508793028454014978?s=20&t=v1MmdhrE3WrtfjBkj3kcxw)是可组合性和可装备性的创造性应用。

在以下视频中可以看到一些与游戏相关的可装备的有趣的早期实验：

<iframe width="560" height="315" src="https://www.youtube.com/embed/_RW7XymkI_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 实现

下面的实现将直接指向代码。有关如何使用它们来铸造您自己的 NFT 的示例，请参阅侧边栏中每个子类型实现的章节。

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/equip.md)
- EVM (开发中)
- Pallets (开发中)