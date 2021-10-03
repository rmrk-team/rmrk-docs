---
title: RMRK 1.0
---

RMRK 1.0 is based on the `system.remark` utility function of many [Substrate](https://substrate.dev)
chains, [Kusama](https://kusama.network) included.

Remarks are like notes, like graffiti on the blocks. The information is not stored in the chain's
trie, but along blocks as input. Remarks are no-effect extrinsics (external inputs), which means
they do not alter the chain's storage, but are stored on the hard drive of the nodes alongside block
records.

By interpreting this data in a special way, tools can understand information in different ways than
an outside observer might.

Imagine walking around town and seeing a graffiti of an upside down devil on a garage. You might
think "huh" or "vandals" and move on. But the gang "Inverse Devils" used this graffiti as an area
tag to let other gangs know they shouldn't walk around here. The gangs have a special way of
interpreting this graffiti that you're not familiar with.

Or, put another way, kids in school are having an exam. As they fill out their answers, they happily
tap their feet. Later, when the teacher is grading their work, he realizes they all somehow aced the
test. What he doesn't know is that the kids in the class learned a special language of foot-tapping,
and that the smartest one in the class has been telegraphing them answers via taps of her foot. They
have a special way of interpreting the taps that others are not aware of.

Kusama is a blockchain without smart contracts. We cannot write logic onto it, so we cannot do
things NFTs. But we can put graffiti onto the chain's blocks, and we can write tools that know how
to interpret these graffiti.

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
store references to multimedia. We augmented this with on-chain emotes, but did not go further.

Let's see how to programmatically mint a RMRK 1.0 NFT.
