---
title: "Multi-resource NFTs"
---

A _resource_ is a type of output for an NFT: usually a media file. A resource can be an image, a
movie, a PDF file, or even a BASE (a special entity - see [here](/lego25-equippable)). A
multi-resource NFT is one that can output a different resource based on specific contextual
information, e.g. load a PDF if loaded into a PDF reader, vs. loading an image in a virtual gallery.

A resource is NOT an NFT or a standalone entity you can reference. It is _part_ of an NFT - one of
several outputs it can have.

Every RMRK NFT has zero or more resources. When it has zero resources, the metadata is "root level".
Any new resource added to this NFT will override the root metadata, making this NFT _revealable_.

## Examples

It is best to explain with some examples.

### Example 1: Revealable NFTs

An NFT can have zero resources, in which case the metadata - including the URI to the media file -
is placed in the root level of the NFT, just like in standards like ERC721.

In this case, such a RMRK NFT is fully compatible with ERC721.

If the **issuer** of the collection adds a new resource to an NFT from this collection, this new
resource will, if [accepted](#proposing-accepting-replacing), replace the root-level metadata in all
interfaces, renders, wallets, etc.

> ⚠️ A resource **always** takes priority over root-level metadata

This makes decentralized reveal mechanics possible where, e.g. NFTs can be minted as eggs with just
the root level metadata pointing to egg media. To reveal or "hatch" them, a new resource is added to
each. Once accepted, the new resource replaces the egg metadata.

### Example 2: eBook

An eBook NFT can be minted with three resources - a PDF file, an audio file, and a book cover image.

A simple interface like a marketplace can show the book cover, but loading the NFT into a Kindle
device will automatically show the PDF, while loading it into the Audible app can play it.

The book has different outputs, each of which is loaded in a specific context.

### Example 3: Game skin

A common complaint from gamers is that NFTs for in-game skins cannot work because skins are not
mappable to models in another game. This is a valid point, but only in the "old world" of NFTs, much
like traveling to the moon is not possible with a horse carriage. True, it is not, but we have
better technology.

With a multi resource NFT, a single NFT can hold the skin intended for Counterstrike, and another
resource which is the skin for Fortnite. A single NFT holding both models of the same skin, portable
between the games.

### Example 4: Media redundancy

Many NFT projects use centralized URIs for storing their metadata. The downtime of such a server
also means downtime for the media files.

With multi-resource NFTs, one can use each resource to point to the same media on different
protocols.

Rather than have a single resource pointing to a single HTTPS URI, an NFT can have multiple, each
pointing to its own protocol target like Arweave, Sia, Filecoin, and others.

With every new redundancy added to an NFT, the chances of this NFT disappearing grow exponentially
lower and thus is longevity is ensured.

### Example 5: Priority

The owner of a multi-resource NFT can set the priority in which these resources are loaded in user
interfaces that support the RMRK standard.

This can mean anything from a comic book NFT which has pages in a specific order to be rendered in a
UI, to prioritizing how an NFT should look if it has alternative outputs. Examples include:

- NFTs that look different in a catalogue vs when equipped onto another NFT
  ([example](https://kanaria.rmrk.app/catalogue/9296249-e0b9bdcc456a36497a-KANCHAMP-memegod-00000001)) -
  the owner can choose to show the equippable version, or the stylized one.
- NFTs that are multi-media: song, video, and composable image at the same time
  ([example](https://singular.app/collectibles/12434713-c8d5ea648c93514667-MTPIAMRRS-MRRSOL-00000002))
  and the owner chooses his preference. Since Singular supports audio, video, PDF, image, and other
  types of media in the explore page and in single view, the owner can choose how to present this
  NFT.
- NFTs that just have a different look, and the owner can choose which one to prioritize in UIs
  ([example](https://singular.app/collectibles/8949162-e0b9bdcc456a36497a-KANBIRD-KANS-00000001))

### Example 6: Evolution

If a resource is added to an NFT with an extra argument provided targeting an existing resource by
resource ID, that targeted resource will be **replaced**.

This makes for good _evolution_ mechanics where an NFT can grow or change over time. E.g. a tree
that grows from seed, to sapling, to young tree, to mature tree. Additionally, assuming the tree NFT
needed to be watered with 💦 emoji every week or else it would die, it is possible that yet another
resource could represent a tree's death stage.

Each stage of its growth is a new resource, replacing the previous one.

### Example 7: Equippables and Forward Compatibility

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
- [EVM](https://github.com/rmrk-team/evm/tree/eip/contracts/MultiResource_EIP)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)
