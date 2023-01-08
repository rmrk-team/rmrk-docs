---
title: "FAQ: Frequently Asked Questions"
---

The non-technical FAQ is now hosted in the [self-help knowledgebase](https://coda.io/@rmrk/faq).

## How does IPFS hosting work?

IPFS, or Interplanetary File System, uses "content hashing". This means a piece of content is put
through a hashing algorithm, a one-way mathematical function which always produces the same output
for the same input. Changing even a single letter in the original content produces a completely
different hash.

These hashes are then turned into content addresses like so:
`ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR` which a browser or
[IPFS gateway](https://docs.ipfs.io/concepts/ipfs-gateway/) can access.

Many machines around the world run the IPFS protocol and advertise which content hashes they host,
so that if a certain piece of content needs to be found, a path can be established to it.

These machines, when they access this piece of content, download it and rehost it, keeping it in
their memory, allowing you to consume it and advertising to others that they have a copy,
propagating it across the web. But unless the content is _pinned_ it will disappear after a certain
period of time of not being accessed, or once the machine reboots via a process known as garbage
collection.

Pinned content is never garbage collected.

Several services exist that download and pin IPFS content for you, for a fee.
[Pinata](https://pinata.cloud) and [Crust](https://crust.network) are very popular ones.
Alternatively, you can
[run your own node](https://medium.com/ethereum-developers/how-to-host-your-ipfs-files-online-forever-f0c56b9b5398)
and pin the content there, but your node would have to be always online and accessible via the
internet for this to work, which is not something most people can run at home.

When hosting NFT content on IPFS, you are expected to pay for pinning of your own content with one
such service, or otherwise make sure the content is persistent and will not disappear.

When minting via [Singular.app](https://singular.app), RMRK covers the Crust pinning fee.
