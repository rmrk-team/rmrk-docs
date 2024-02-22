---
title: "On-chain emotes"
---

RMRK supports the ability to "react" to any NFT.

![](../static/img/post_imgs/emote.png)

Under the hood, unicodes are applied to NFT IDs in a separate record.

Reactions are switches, meaning sending 👍 when you already sent a 👍 will remove it.

Currently, all reactions apply equally and are rendered by all implementations, but in the future there are plans to add acceptance conditions to collections that would limit emotes from people without a certain NFT, cap the emote amount to accommodate a FCFS list, limit the types of emotes an NFT can receive, and more.

During a transfer, all reactions travel with an NFT. The reactions are not NFTs themselves, just flair added to an existing data record - the NFT.

You can try it using our [Emotes.app](https://emotes.app/).

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype.

- [EVM](https://evm.rmrk.app/emotable)
  - Implemented in production on [Emotes.app](https://emotes.app)
