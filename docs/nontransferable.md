---
title: "Non-transferable NFTs"
---

Non-transferable NFTs, popularized by Vitalik Buterin as [soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html), are NFTs that are useful for reputation tracking: they get added to addresses but are non-transferable, so they cannot be sold and permanently assign some modifier to a given address.

In RMRK this is an especially interesting concept as NFTs can be non-transferable inside another transferable NFT. Thus, an NFT like a [Kanaria](https://kanaria.rmrk.app) can have non-transferable gems inside it that give it long lasting benefits and bonuses, but cannot be removed.

This can be further utilized when dealing with in-game avatars and skill systems. A skill can be learned and "installed" into an avatar's brain, but cannot be removed.

In addition to a simple on/off flag, the Kusama implementation (see below) supports temporary transferability and temporary non-transferability which allows a minter to specify that an NFT should be movable only after a certain number of blocks, or not before a certain number of blocks.

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard)
- EVM (in development)
- Pallets (in development)