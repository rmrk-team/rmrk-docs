---
title: "Non-transferable NFTs"
---

Non-transferable NFTs, popularized by Vitalik Buterin as [soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html), are NFTs that are useful for reputation tracking: they get added to addresses but are non-transferable, so they cannot be sold and permanently assign some modifier to a given address.

In RMRK this is an especially interesting concept as NFTs can be non-transferable inside another transferable NFT. Thus, an NFT like a [Kanaria](https://kanaria.rmrk.app) can have non-transferable gems inside it that give it long lasting benefits and bonuses, but cannot be removed.

This can be further utilized when dealing with in-game avatars and skill systems. A skill can be learned and "installed" into an avatar's brain, but cannot be removed.

In addition to a simple on/off flag, the Kusama implementation (see below) supports temporary transferability and temporary non-transferability which allows a minter to specify that an NFT should be movable only after a certain number of blocks, or not before a certain number of blocks.

## Examples

As mentioned in the concept of [equippables](/docs/lego2.5-equippable.md), a very good example of using non-transferable NFTs is when using them as reputation indicators, but not on accounts as documented in the aforementioned [soulbound post](), but inside other transferable or non-transferable NFTs.

This can be avatars that have an NFT brain with 2 skill slots at level 2, and learn five different skills (non transferable NFTs), two of which they can then equip into slots. They therefore prime their character with currently active skills which are bound to the character and its progress in a game. This is how [Skybreach Chunkies](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies) work.

A dapp or chain can use avatars with reputational tokens to establish trust, performance indicators, and even grant perks like free transactions on chain past a certain level of reputation. Examples in production using RMRK non-transferables as equippables inside of transferables are: [CitizenD](https://twitter.com/citizendxyz), [Zeitgeist](https://zeitgeist.pm/), [Kusama Governance Rewards](https://www.youtube.com/embed/lpT7hubqzFQ), [Kabocha](https://twitter.com/kabochanetwork), [DeQuest](https://ntst.dequest.io/).

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard)
- EVM (in development)
- Pallets (in development)