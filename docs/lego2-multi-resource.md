---
title: "Multi-resource NFTs"
---

A _resource_ is a type of output for an NFT: usually a media file.

A resource can be an image, a movie, a PDF file, or even a BASE (a special entity - see
[here](/lego25-equippable)). A multi-resource NFT is one that can output a different resource based
on specific contextual information, e.g. load a PDF if loaded into a PDF reader, vs. loading an
image in a virtual gallery.

A resource is NOT an NFT or a standalone entity you can reference. It is _part_ of an NFT - one of
several outputs it can have.

Every RMRK NFT has zero or more resources. When it has zero resources, the metadata is "root level".
Any new resource added to this NFT will override the root metadata, making this NFT _revealable_.

## Examples

It is best to explain with some examples.

- [Revealable NFTs](/revealable) - mint identical NFTs and reveal them as unique later, all on chain
  without centralizing metadata
- [Cross-game skin files](/cross_game_skins) - supporting different game engines for cross-game
  cosmetics in the same NFT
- [Backing up NFT metadata](/backups) - metadata redundancy and safety without centralized actors
- [Ticketing systems](/ticketing) - tickets and ticket-stubs for proof of attendance and access
- [Mixed Media NFTs](/usecases/mixedmedia) - eBooks that are audio and PDF at the same time, songs that are
  music videos and audio files at the same time, paintings with making-of videos, and more.

### Equippables and Forward Compatibility

When using the [Nested](/lego1-nested) and [Equippable](/lego25-equippable) NFTs, a multi-resource
NFT can be made compatible with collections coming out in the future, adding utility to an NFT
project that might otherwise die from lack of community interest post-launch.

As an example, a pickaxe compatible with a
[Chunky](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies) in
[Skybreach](https://skybreach.app) would have a pixel-drawn resource compatible with the Skybreach
game engine.

Should a new 3D game come out later on, this same NFT can be made compatible with it easily. The
issuer would add a new 3D resource to it, compatible with the new game's engine. Every owner
accepting this new resource in their NFT would automatically have a more valuable NFT on their
hands - no unrelated airdrops needed, no token spam in owner wallets. Just an NFT that can be and do
more.

This not only adds more life to existing NFT projects, it also introduces the concept of dynamic
rarity where the more collections an NFT is made compatible with, the more demand and thus value it
has.

## Proposing, Accepting, Replacing

Adding a new resource into a multi-resource NFT requires the consent of both the issuer and the
NFT's owner.

Specifically, only the issuer of the collection can propose a new resource, and only the owner can
accept it. If the issuer and owner are the same, no accept step is necessary.

An owner of an NFT cannot add new resources onto their own NFT. This prevents mock-value from being
added to an NFT.

An issuer cannot add new resources to an NFT without the owner's approval. This approval can be made
ahead of time, or it can be made on-demand as a new resource is proposed.

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your
own NFTs, please refer to the sidebar section for each implementation subtype.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#resources-and-resource)
- [EVM](https://github.com/rmrk-team/MultiResourceEIP)
  - In production examples:
    - [NCVerse](https://neoncrisis.io/my-collection/ncverse)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)
