---
title: "On-chain emotes"
---

RMRK supports the ability to "react" to any NFT.

Under the hood, unicodes are applied to NFT IDs in a separate record.

Reactions are switches, meaning sending 👍 when you already sent a 👍 will remove it.

Currently, all reactions apply equally and are rendered by all implementations, but in the future there are plans to add acceptance conditions to collections that would limit emotes from people without a certain NFT, cap the emote amount to accommodate a FCFS list, limit the types of emotes an NFT can receive, and more.

During a transfer, all reactions travel with an NFT. The reactions are not NFTs themselves, just flair added to an existing data record - the NFT.

Emotes are a key part of [conditional rendering](lego4-conditional-rendering).

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/emote.md)
- EVM (research phase)
- Pallets (research phase)
- Rollups (research phase)