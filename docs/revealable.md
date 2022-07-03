---
title: "Revealable NFTs"
---

In last-gen NFT systems, selling a collection of seemingly identical NFTs and then "hatching" or
_revealing_ them later into unique NFTs requires centralized metadata where either the tokenURI
points to a centralized server that can be swapped out after launch, or the contract itself has a
mutable metadata field.

This is not very web3.

RMRK's [Multi-Resource NFTs](/lego2-multi-resource) are uniquely positioned to resolve this in a
fully on-chain way, with no issuer rug-pulls being an option.

An NFT can have zero resources, in which case the metadata - including the URI to the media file -
is placed in the root level of the NFT, just like in standards like ERC721.

In this case, such a RMRK NFT is fully compatible with ERC721 and is considered to be _revealable_.

If the **issuer** of the collection adds a new resource to an NFT from this collection, this new
resource will, if [accepted](/lego2-multi-resource#proposing-accepting-replacing), replace the
root-level metadata in all interfaces, renders, wallets, etc. 

> ⚠️ A resource **always** takes priority over root-level metadata

You may be wondering if this makes it
possible to still rug the art from the issuer side - just keep replacing resources, and eventually
replace with something unfitting?

No, in Multi-Resource NFT systems, each mutation like a resource addition or a resource replacement
is a two-party operation where the issuer _proposes_ the new resource, and the NFT owner _accepts_
the new resource.

Now, rather than hit the Opensea "refresh metadata" button, the user only has to click "Accept new
resource" after inspecting it - and it all happens on chain.

If the owner wishes to keep the old resource or even keep the NFT unrevealed, they can just choose
not to accept the new resource (though it should be noted that the revealed resource is on chain in
the pending queue - just not applied - so it is easy to find out what it was revealed as).

### Advantages

1. Decentralized metadata makes sure future rugpulls by issuer are impossible
2. "Hatching" does not require burning or another airdrop

### Downsides

1. Since only the collection issuer can issue new resources to NFTs, the software of the gatekeepers would either have to be a hot wallet, or connected to a server issuing these calls which in turn hosts the issuer wallet. We are working on a system that would allow an issuer to set additional resource proposers, solving this problem.
