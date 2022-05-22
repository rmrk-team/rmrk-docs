---
title: EVM
---

In this guide, we will take a look at how to programmatically mint multiple nontransferable NFTs directly into different accounts. You can modify the values in this tutorial to match your requirements, like minting directly into other NFTs, or minting transferable NFTs, etc.

### Test Environment

You are free to test this locally on an example chain, but Singular currently lacks the ability to connect to locally running chains. Once you have tested that the script works well, feel free to use the following testing environment:

- UI: https://singular-rmrk2-dev.vercel.app/
- Node: ws://staging.node.rmrk.app

The UI will have a Faucet button for your convenience which you can hit to get 1 KSM sent to your test account. 

IMAGE

Keep in mind that others use this platform too and 10 KSM should be more than enough for even the biggest collections (10k+).

## Preparing materials

In this example, we will be minting honorary NFTs for people who participated in a Web3 Foundation survey.

The words "Helper", "Participant", and "Author" in the list indicate the type of NFT a person is getting. We will define those in our code, and you can use any media you like.

To mint, you need two CSVs:

- a list of recipients (https://gist.github.com/Swader/e7ba877475a9034f9609925a17bc679e)
- a directory of NFTs and their properties ()

### Media hosting

Please note that the directory of NFTs in this case has file names for media. These will be automatically turned into IPFS hashes, and the resulting metadata along with all files you need to upload will be copied into a "pinthis" directory. 

IMAGE

You are expected to upload the contents of this whole folder to a pinning service like Crust or Pinata, otherwise they will not be available. For more information on how IPFS hosting works, please see [faq](/faq).

## Getting Started

RMRK has a simple Typescript toolkit for getting started with these mints. The hardest part of minting is installing the prerequisites to run the toolkit, so if it seems complex to begin with, do not despair - it gets easier.

First, we clone the toolkit.

```

```