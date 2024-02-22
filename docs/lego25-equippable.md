---
title: "Catalogs and Equippable NFTs"
---

![](../static/img/post_imgs/eq_01.png)

We introduce the concept of a Catalog (previously known as Base).

A Catalog can be considered a _catalog of parts_ from which an NFT can be composed. Parts can be
either of the `slot` type or `fixed` type. Slots are intended for equippables.

> Note: a catalog is referenced in an NFT as a separate [asset](/lego2-multi-resource) by specifying
> the catalog ID and cherry picking the list of parts from the catalog for that NFT instance. The
> approach differs slightly per implementation, so the examples below will mostly use pseudo-code to
> communicate the concept.

Catalogs can be of different media types.

The catalog's type indicates what the final output of an NFT will be when this asset is rendered.
Supported types are PNG, SVG, audio, video, mixed, although only PNG and SVG have been implemented
in RMRK front-ends so far.

It is easiest to understand catalogs and equippables through a visual example like a PNG or SVG
catalog, so we will focus on this in the explanations below. Additional examples of different types are
at the end of this page.

The most important concept to understand with regard to equippables is that the final output is not
static. Equipping, e.g., a hat onto a rhino does not generate a new static image in place of an old
one. Instead, the hat is dynamically rendered _inside_ the image of the rhino, and the image of the
rhino has to be prepared for this functionality in advance.

This is what the Catalog system allows: minting collections with equippability in mind, regardless
of type - audio files can be prepared with slots for audio stems, movie catalogs can be prepared with
filter slots, but video files can also have a slot for subtitles, or even an alternative audio
track, and more.

## How a Catalog Works: Chunkies Example

A catalog is a list of "components" a combination of which can be used to form a single NFT.

Let's take for example an avatar project called Chunkies: chubby characters that can hold items,
wear headwear, and have have different backgrounds along with looking unique between each other.
Here are some combinations.

![Chunky examples](/img/post_imgs/P5FUhk8.jpeg)

Each Chunky is a combination of different parts from the Chunky catalog.

![Chunky catalog](/img/post_imgs/chunky1.png)

Some of those parts are slots into which other compatible images can be placed - these are the
equippables. The slots are not visible when inspected individually - on the final composition they
would come, for example, behind the Chunky (background), or between the fingers and the palm. The
red diagonal lines below show where an item would appear.

![Chunky slots](/img/post_imgs/chunky2.png)

The process of adding an equippable asset to an NFT:

1. create a catalog entity (one-time process for given collection)
2. add a new asset to each target NFT, cherry picking the catalog's parts

This new asset defines a catalog and some picked parts, like so:

```
    "assets": [
        {
            "catalog": "base-8788686-CHUNKBASE",
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
            "thumb": "ipfs://QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"
        }
    ],
```

You can see in the mock code above that we are dealing with the `assets` array of a certain NFT

> Note that asset used to be called resource, and catalog was called base, so the actual code you
> find in the Kusama implementation will reflect this - these examples will focus on the updated
> nomenclature.

This NFT in particular has only a single asset - the equippable catalog itself. The `catalog` value
refers to the ID of the Catalog meta-entity, the `id` field is used for indexing and to be able to
target a specific asset when wanting to replace, accept, or remove it, while `pending` tells us
whether the NFT owner has accepted this asset (false means yes, it has been accepted).

> ❗️ More info on acceptance mechanics in [multi asset NFTs](/lego2-multi-resource).

The most important part is `parts` - this is the array in which we specify which parts from the
assigned `catalog` make up this NFT. The parts themselves are defined in the `catalog` itself, like
so:

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
    src: 'ipfs://QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR/var1/var1_head.svg',
    z: 9,
  },
  ...
```

The first slot is `headwear` and you can see it is a `slot` type. The `equippable` array lists the
collections that are allowed as equippables. The issuer of the catalog can modify this value at any
time, adding and removing collections at will.

The `fixed` part just points to a visual which should be rendered. It is immutable.

The `z` value in both indicates on which layer the visual appears on the SVG catalog, height-wise. The
higher the number, the "closer to camera" it is. This is especially important for slot, since - per
the image above - the `z` value of the handheld slot needs to be between the fingers and the palm,
and the `z` value of the background needs to be the lowest of all to be rendered at the bottom.

Thus, an asset which is a catalog will cherry pick parts from that catalog to compose a final NFT,
until we get our colorful chunkies.

Our flagship project, Kanaria, uses this same approach. If you wish, you can explore its full
catalog [here](https://gist.github.com/Yuripetusko/dccd18ef3efe6058d73c29dbe0ef5b6f).

A full graphical breakdown of the Kanaria project and how its catalog works is also available
[here](https://url.rmrk.app/demobird).

## Example: Leveling Characters

![](../static/img/post_imgs/eq_02.png)

A fully decentralized and on-chain way of representing level-requirements for characters is possible
by using equippables and multi assets.

If we take for example a Chunky that is level 1, this NFT can have an asset that points to the
Chunky catalog, but from it picks only the parts that have the `equippable` value set to level-1
collections of items, limiting the NFT to equipping only level 1 gear.

The level itself can be an equippable NFT inside the avatar - a "level brain" which needs to collect
experience in the form of successful quest trips. Based on the achievements collected, the Chunky
can get a different type of level-up.

For example, for level 2, a Chunky needs to have two successful quests. If those quests are done in
a fire world, then the next asset could have a fire [theme](#theming). If they are done in a water
world, a water theme could apply. The NFT owner would choose which "quest successes" to equip into
the "Level NFT" which is inside the avatar, and use them to create full "experience sets" this way.

Once this Chunky has amassed enough experience to go to level 2, a new asset can be added to it,
targeting the previous one by ID to replace it when accepted by the NFT owner. This asset will point
to the same catalog, but will now pick slot parts that are configured to accept level 1 and level 2
collections of items, thereby making it possible to now equip higher level gear.

Another example is giving "brain NFTs" with a certain number of slots to a certain level character.
For example, a character of level 2 can have only 2 skills _equipped_ into its brain, but if the
avatar is aware of more than 2 skills, the player must choose which ones to load after a rest
period, like with wizard spells in Dungeons and Dragons.

This is explored in depth in the [Character Progression](/usecases/charprog) use case.

## Example: Music

![](../static/img/post_imgs/eq_03.png)

A song NFT could have as an asset a music catalog with a fixed beat, but slots for vocals, drums,
synth, effect, even a slot for a visualization - perhaps even for some runnable
[p5.js](https://p5js.org/) code.

Not only is this really cool in the context of paying royalties to anyone who contributed to a
song's creation with their own stem, but we can take it further: the song itself, or maybe just a
single stem can be made equippable on the catalog asset of a metaverse land.

That way, whoever enters this land gets it played as a soundtrack of the area, background music. The
music is thus compatible not just with its own project, or the issuer's associated projects, but
with any project that can be launched on RMRK standards.

## Example: Games

The game use case is so obvious, we turned it into a proof of concept with
[Skybreach](https://skybreach.app).

- A house can be equipped on a plot of land.
- A billboard can be equipped and then additionally community governed to earn yield to
  shareholders.
- An avatar can equip a jacket. That jacket can have pockets which equip stuff, and slots for
  patches.
- An NPC can be an NFT which has a personality-NFT installed, or a skill-NFT for sale.

## Theming

The RMRK spec supports theme interpolation. This allows for yet another layer of uniqueness to be
applied to your NFTs without having to specifically design and develop them.

![](../static/img/post_imgs/eq_04.png)

A catalog will contain themes keyed by name, like so:

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

These are variables that can contain any value - in this example they are colors. Then, an SVG
itself can contain a placeholder data attribute that this variable is inserted into, but which has a
default value of its own:

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" data-theme_color_3="red" />
</svg>
```

Finally, the theme is selected as part of the asset being added to the NFT:

```json
    "assets": [
        {
            "catalog": "base-8788686-CHUNKBASE",
            "id": "Whqja-r1",
            "parts": [...],
            "pending": false,
            "themeId": "sunkissed", // <--- THIS HERE
            "thumb": "ipfs://QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"
        }
    ],
```

This does take a little bit of extra work in making the SVGs and preparing them for use, but it
results in orders of magnitude more of possible combinations on your NFTs.

A more comprehensive example is available
[here](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/themeadd.md),
but applies only to the Kusama implementation which is now deprecated.

## Other Examples

A creative application of composability and equippability is the
[Mushroomtopia composable PFP project](https://twitter.com/bitfalls/status/1508793028454014978?s=20&t=v1MmdhrE3WrtfjBkj3kcxw).

Some interesting early experiments with game-related equippables can be seen in the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_RW7XymkI_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Another interesting example is using equippable NFTs to represent on-chain participation, like in
the example of
[Kusama Governance Rewards](https://app.subsocial.network/6214/referendum-voting-rewards-the-past-the-present-the-future-32141).
For a breakdown, please see the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lpT7hubqzFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your
own NFTs, please refer to the sidebar section for each implementation subtype.

- [EVM: EIP 6059](https://eips.ethereum.org/EIPS/eip-6059)
