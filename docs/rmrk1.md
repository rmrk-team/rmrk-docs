---
title: RMRK 1.0 (deprecated)
---

Because Kusama - where RMRK originated - has no smart contracts or programmability, RMRK 1.0 is
based on the `system.remark` utility function of many [Substrate](https://substrate.dev) chains,
[Kusama](https://kusama.network) included.

Remarks are like notes, like graffiti on the blocks. The information is not stored in the chain's
trie, but along blocks as input. Remarks are no-effect extrinsics (external inputs), which means
they do not alter the chain's storage, but are stored on the hard drive of the nodes alongside block
records.

By interpreting this data in a special way, tools can understand information in different ways than
an outside observer might.

As an analogy, a blockchain is a ship with each block being a shipping container. Inside it are
transactions. Remarks do not put content into the containers, but graffiti the side of the
container. The message still gets sent across but does not affect the content of the container. On
arrival, a special language interpreter (the RMRK specification) is who interprets these graffiti to
form a coherent picture of the state of NFTs.

The **rules** for how to interpret this are called specifications or standards, and RMRK is one such
set of rules. So, RMRK deals with applying rules to _remarks_, which is what we call blockchain
graffiti on
[Substrate-based blockchains](https://dotleap.com/an-explanation-of-substrate-for-humans/) like
Kusama or Polkadot.

> RMRK is a set of rules dictating how to interpret blockchain graffiti in a way that lets us
> simulate logic on a chain without smart contracts.

As an example, imagine emitting a graffiti (remark) like this:

```
ALICE::Init::Apple::5
```

ALICE's account is allowed to issue a SEND transaction like so:

```
ALICE::Send::Apple::3::Bob
```

The RMRK standard makes sure that Alice has more than 3 apples, that she is who is sending the
transaction, and that the recipient is valid (i.e. not gibberish).

If Alice tried to do:

```
ALICE::Send::Apple::10::Alice
```

... she would essentially be able to print apples. We don't want that, so the system **must** check
that the amount being sent is less than or equal to the number in inventory. Same if Bob tried to
issue an Alice transaction - the tools would stop this and ignore such a remark, because Bob cannot
interact with Alice's inventory.

These rules are defined in the [RMRK Specification](https://github.com/rmrk-team/rmrk-spec), but
humanized, clarified, codified, and exemplified in this documentation.

In many ways, RMRK 1.0 is like any NFT standard you might be used to on Ethereum - a simple way to
store references to multimedia. We augmented this with on-chain [emotes](/lego3-emote.md).

RMRK 1.0 has been deprecated since [RMRK 2](/rmrk2.md) has been out. Old RMRK1 NFTs can be seen on
the [legacy version of Singular](https://singular.rmrk.app).
