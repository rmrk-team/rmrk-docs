---
title: Getting Started
---

Welcome to the RMRK docs. This documentation portal should provide you with everything you need to
get started with RMRK. Please refer to the individual sub-sections of the docs for more information
on specific versions, products, and tools RMRK offers, or read below to get familiar with RMRK in
general.

## What is RMRK?

RMRK (pronounced "remark") is a set of standards on the [Kusama](https://kusama.network) blockchain
which compose five "NFT lego" primitives. Putting these legos together allows a user to create NFT
systems of arbitrary complexity. Additionally, by leveraging this logic and Kusama's multi-chain
architecture, these NFTs are eternally liquid and forward-compatible with as yet unannounced
projects, and seamlessly portable to any connected
[parachain](https://wiki.polkadot.network/docs/learn-parachains).

The legos are described below.

### Nested NFTs

NFTs that can own other NFTs, and NFTs that can _equip_ other NFTs to change their output media. As
an example, imagine an in-game character who owns a backpack which in turn owns some health potions.
The character can also own and equip another NFT, a helmet.

This logic is available on [RMRK 2](rmrk2) and above.

### On-chain emotes

On-chain reactions, like you would expect when opening an emoji keyboard, sent to any NFT. Any UI
implementing this specification is able to show the full range of recieved emotes, allowing for
social mechanics and relative price discovery across NFTs.

This logic has been available since [RMRK 1](rmrk1).

### Multi-resource NFTs

NFTs are able to have different outputs which can also depend on context. As an example, an ebook
can have a PDF resource, a cover resource, and an audio file resource. If you load it into Audible,
it can automatically play. If you load it into Kindle, it will open in reading mode. If you load it
into an NFT environment which is limited in functionality, like one on Ethereum, you get the default
view - a cover image.

This has other uses, too: an NFT that is purely an image can use multiple resources as a redundancy
for assets. One resource can be the image on HTTP, then the same image on IPFS, then the same image
on Arweave. By having this redundancy on the NFT level, the NFT is guaranteed to remain viewable
much longer than traditional NFTs.

Another example comes into play when you consider an NFT with multiple images representing the same
concept. For example, an attendance badge or a company logo can evolve over time by getting a new
resource after the fact. The owner of the NFT is able, at any time, to switch priority of display on
the resources, so they can make the current logo default.

An example of a multi-resource NFT is
[the Meme God Crown](https://kanaria.rmrk.app/catalogue/9296249-e0b9bdcc456a36497a-KANCHAMP-memegod-00000001),
or these
[Khala glasses](https://kanaria.rmrk.app/catalogue/9469077-9cba890074545f2e7c-KANPRTN-khala_sunglasses_Sparkling-00000001).
Inspecting either will reveal that they have two versions - a richly illustrated one, and one that's
modeled to be equippable on the [Kanaria](https://kanaria.rmrk.app) birds. This is how standalone
NFTs are made equippable by any project into the future, without knowing what's coming up and
planning for it.

This logic has been available since [RMRK 2](rmrk2).

### Conditional rendering

Conditional rendering is the ability to apply certain conditions to an NFT's output.

As an example, if we put the "On-chain emotes" and "Multi-resource NFTs" legos together, we can
imagine an image of a Mona Lisa with two resource: normal Mona Lisa, and blushing Mona Lisa. We can
then define a rule that says "if this NFT gets more than 50 😘 emoji, show the blushing Mona Lisa
resource as a priority". Another example is, "If this NFT gets 100 ❄ emoji, change the background
element from beach to snow".

Conditional rendering is becoming available with [RMRK 2.1](rmrk21) and uses
[JsonLogic](https://jsonlogic.com/).

### NFTs as DAOs

NFTs on RMRK can be tokenized into fungible tokens. These tokens can then be used to govern the
NFT's functions. For example, a democratic decision to make an NFT avatar equip one sword over
another, or a collaborative decision making process on a collective musical composition NFT where
votes are taken on where to place each note, layer, and instrument. These tokens can then be used to
distribute royalties from sales proportionally.

NFTs as DAO will become available with [RMRK 3](rmrk3) and the transition to pallets and smart
contracts.

## How do I use RMRK?

You can mint on the [Singular UI](https://singular.rmrk.app).

As a developer who wants to build their own wallet or UI for RMRK, you probably want to refer to the
[Specs](https://github.com/rmrk-team/rmrk-spec), or if you'd like to use existing components we've
built, the [Tools](https://github.com/rmrk-team/rmrk-tools).

## RMRK-based projects

### Official

- [Singular](https://singular.rmrk.app): the official NFT marketplace for RMRK 1.0 NFTs
- [Kanaria](https://kanaria.rmrk.app): NFT birds that can wear other standalone NFTs, equip and
  unequip items, and have multiple resources - the first production demo of RMRK 2.0

### Third-party

- [Kodadot](https://kodadot.xyz)
- [KSMGallery](http://ksmgallery.crystalsuite.com/mainUI/) by Everdreamsoft

Built something? Let us know or send a PR via the Edit button on this page!

## The RMRK Token

The RMRK token is the protocol's official token. For more information about the $RMRK token, please
see [this page](https://singular.rmrk.app/tokens).
