---
title: Getting Started
---

Welcome to the RMRK docs. This documentation portal should provide you with everything you need to get started with RMRK. Please refer to the individual sub-sections of the docs for more information on specific products and tools RMRK offers, or read below to get familiar with RMRK in general.

## What is RMRK?

RMRK (pronounced "remark") is a set of rules and standards for interpreting special data. By interpreting this data in a special way, tools can understand information in different ways than an outside observer might.

Imagine walking around town and seeing a graffiti of an upside down devil on a garage. You might think "huh" or "vandals" and move on. But the gang "Inverse Devils" used this graffiti as an area tag to let other gangs know they shouldn't walk around here. The gangs have a special way of interpreting this graffiti that you're not familiar with.

Or, put another way, kids in school are having an exam. As they fill out their answers, they happily tap their feet. Later, when the teacher is grading their work, he realizes they all somehow aced the test. What he doesn't know is that the kids in the class learned a special language of foot-tapping, and that the smartest one in the class has been telegraphing them answers via taps of her foot. They have a special way of interpreting the taps that others are not aware of.

Kusama is a blockchain without smart contracts. We cannot write logic onto it, so we cannot do things like Polls, NFTs, token sales, or decentralized on-chain applications. But we can put graffiti onto the chain's blocks, and we can write tools that know how to interpret these graffiti.

The **rules** for how to interpret this are called specifications or standards, and RMRK is one such set of rules. RMRK deals with applying rules to _remarks_, which is what we call blockchain graffiti on [Substrate-based blockchains](https://dotleap.com/an-explanation-of-substrate-for-humans/) like Kusama or Polkadot.

> RMRK is a set of rules dictating how to interpret blockchain graffiti in a way that lets us simulate logic on a chain without smart contracts.

As an example, imagine emitting a graffiti (remark) like this:

```
ALICE::Init::Apple::5
```

ALICE's account is allowed to issue a SEND transactions like so:

```
ALICE::Send::Apple::3::Bob
```

The RMRK standard makes sure that Alice has more than 3 apples, that she is who is sending the transaction, and that the recipient is valid (i.e. not gibberish).

If Alice tried to do:

```
ALICE::Send::Apple::10::Alice
```

... she would essentially be able to print apples. We don't want that, so the system **must** check that the amount being sent is less than or equal to the number in inventory. Same if Bob tried to issue an Alice transaction - the tools would stop this and ignore such a remark, because Bob cannot interact with Alice's inventory.

## How do I use RMRK?

An official UI is coming in a few days.

As a developer who wants to build their own wallet or UI for RMRK, you probably want to refer to the [Specs](https://github.com/rmrk-team/rmrk-spec), or if you'd like to use existing components we've built, the [Tools](https://github.com/rmrk-team/rmrk-tools).

If you want to launch a platform like an NFT fundraiser or a Poll, please [get in touch with the team](mailto:hello@rmrk.app) - we'll be launching open source starter kits soon but need testers sooner than that.

## RMRK-based projects

### Official

- RMRK NFT App (coming soon): Official front-end for minting, showing, and trading NFTs.
- [Kanaria](https://kanaria.rmrk.app): Collectible NFT eggs that hatch special birds depending on randomness and people's reactions to the NFTs.

### Third-party

- [Kodadot](https://kodadot.xyz): Front-end for minting, showing, and trading NFTs.

Built something? Let us know or send a PR via the Edit button on this page!
