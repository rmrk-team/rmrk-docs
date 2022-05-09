---
title: "NFT 2.0 Lego 1: Nested NFTs"
---

The concept of _nested_ NFTs refers to NFTs being able to _own_ other NFTs.

At its core, the principle is simple: the owner of an NFT does not have to be an externally owned
account or a smart contract, it can also be a specific NFT.

The process of sending an NFT into another is functionally identical to sending to another user. The
process of sending an NFT _out_ of another NFT involves issuing a transaction from the address which
owns the _parent_.

Some NFTs can be configured with special conditions for parent-child relationships. For example:

- some parent NFTs will allow the owner of a child NFT to withdraw that child at any time (e.g.
  virtual land containing an avatar)
- some parent NFTs will be prohibited from executing certain interactions on a child (e.g. the owner
  of a house in which someone else's avatar is a guest should not be able to BURN the guest...
  probably)
- some parent NFTs will have special withdrawal conditions, like a music NFT that accepts music
  stems. The stems can be removed by their owners until a certain number of co-composers upvote a
  stem enough, or until the owner of the parent music track seals and "publishes" it

The concept of nested NFTs is further expanded through the idea of
[equippability](lego2.5-equippable).

## Provable Digital Scarcity

Most NFT projects today are only mock-scarce. Sure, there is a limited supply of them, but the utility of these NFTs (if any) is uncapped. 

As an example, you can log into 500 different instances of Sandbox with the same wallet using the same NFT. You can equip the same hat onto 500 different in-game avatars at the same time, because its visual representation is just a client-side thing. The platforms and projects are not at all Sybil-resistant, and the NFTs not scarce.

With RMRK, and to use games as an example again for simplicity, a piece of metaverse land IS an NFT. And for an avatar to be IN that land, it has to be IN that land - literally sent into the other NFT. By definition, if it is in one land, it cannot be in another. If a hat is equipped on one avatar (by being sent into it and then equipped), it cannot be on another.

With RMRK's standards, true and provable digital scarcity as originally promised by NFT technology comes default.

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#children)
- [EVM](https://github.com/rmrk-team/evm/blob/master/contracts/RMRK/RMRKNestable.sol)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)