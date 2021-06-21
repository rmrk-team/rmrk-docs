---
title: Walkthrough
---

## In a nutshell, RMRK tools:

- GET complete state of all remarks right now
- RETRIEVE remarks from extrinsic block call
- VALIDATE remarks
- CREATE new remark strings ready to be sent as transactions

This walkthrough of our Tools is based on the 1.0 spec. We will be releasing v2.0 docs whenever RMRK2.0 hits the shelves! For the best developer experience, we recommend developing with the most current **Mac operating system**.

### Warning: Not a stroll in the park

Getting RMRK Tools to run properly in local development is currently not a plug-and-play experience. You will need to be familiar with creating your first Substrate node using the Rust programming language; take 2 hours to get yourself jumpstarted [here](https://substrate.dev/tutorials).

### [Install Cargo and Rust](https://doc.rust-lang.org/stable/cargo/getting-started/installation.html)

### Install Rust Nightly

`rustup toolchain install nightly`

### nvm/node

Make sure to update to recent version of nvm/node 14.0+; if you're on Windows, nvm-windows has an installer (but again, I would like to reiterate that this tutorial is for Mac development only).

### polkadot.js.org

Make sure that in polkadot.js.org that you switch to the Development network using the custom endpoint: `wss://node.rmrk.app` or whatever local endpoint you decided on (press the Switch button at the top to finalize the selection!)

### pallet-utility

> "Keep in mind that if it's a node template you'll need to install the utility pallet into it; RMRK requires it. Or compile polkadot--that one has pallet-utility built in." --Bruno

You need to install `pallet-utility` in Cargo.toml under the runtime directory.

### Latest Singular dump

If you want to test your UI with the latest data dump from Singular: [💩💩💩](https://gateway.pinata.cloud/ipns/latestdump.rmrk.app)

### Starting up your local node

Run the following code in terminal from the root of your substrate-node-template directory: `./target/release/node-template --dev --tmp`

### Install tools on frontend

> Note: NodeJS 14+ is required. Please install with NVM.

`yarn install rmrk-tools`
