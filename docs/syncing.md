---
title: Synchronization
---

Because RMRK NFT's are currently logged alongside blocks, but do not change state of the chain, they
are not easy to fetch.

If we have remarks like (paraphrased):

- Alice has 0 apples.
- Alice buys 5 apples.
- Alice sends Bob 3 apples.
- Alice sends Charlie 3 apples.

One of the two remarks at the end is invalid because Alice does not have 6 apples.

If these remarks are not looked at in order and formed into one, single **consolidated** state, we
cannot be sure the operations are legitimate. Because the remarks can happen on different blocks
(months apart even), fetching them and then consolidating them takes a lot of time you don't have an
already synced node, and a pre-consolidated dump which you could simply append to.

Thus, there are several ways to get up to date with RMRK state.

## Syncing from scratch

While it's very useful to have a locally running Kusama node at all times for various development
experiments, this process is not recommended unless you have a lot of time.

The full process is:

- run a fetcher on a Kusama node, to get all remarks
- run a consolidator on the fetched output, to get the consolidated set of remarks, and thus the
  "NFT database" in simple JSON file format
- run any operations on this final set, like analytics, burn checks, owner checks, and more.

Let's go through it step by step.

To sync from scratch you will need to be running a local Kusama node. Connecting to a remote one
will simply be too slow and usually throttled by the provider. Download a compiled Polkadot release
from [the releases page](https://github.com/paritytech/polkadot/releases) (or compile from scratch
if you're feeling adventurous - instructions are in the README), and run it with:

```bash
chmod +x polkadot && mv polkadot kusama
./kusama --pruning archive --db rocksdb
```

If you're running this somewhere in a server of yours and want to connect to it from outside, also
add `--rpc-cors all` to allow other origins to connect to this server.

The sync process takes a few days.

Once the node is synced (the terminal output will let you know), you must fetch the remarks using
[rmrk-tools](https://github.com/rmrk-team/rmrk-tools/).

Install RMRK tools. You need a modern version of NodeJS and Yarn. We recommend using
[NVM](https://github.com/nvm-sh/nvm) and setting it to 14.16 or newer.

```bash
yarn install rmrk-tools
```

### Fetch

Then, run the fetch command on the node:

```bash
yarn cli:fetch --prefixes=0x726d726b,0x524d524b --ws=ws://localhost:9933
```

The output is a JSON file of remarks - any message found alongside chain blocks starting with the
prefixes `0x726d726b,0x524d524b`, hex-encoded for `rmrk,RMRK`.

If you have a previously fetched dump, you can use the `append` flag to just append to it and
shorten the processing time. This is good for cronjobs.

```bash
yarn cli:fetch --prefixes=0x726d726b,0x524d524b --append=QmdDywgAeybKG6erv5tJmzzfADZs19aJQV1PoMDmff6jR5.json --ws=wss://node.rmrk.app --from=8000000 --to=9000000
```

Other commands to run:

- `--ws URL`: websocket URL to connecto to, defaults to `127.0.0.1:9944`
- `--from FROM`: block from which to start, defaults to 0 (note that for RMRK, canonically the block
  4892957 is genesis)
- `--to TO`: block until which to search, defaults to latest
- `--prefixes PREFIXES`: limit return data to only remarks with these prefixes. Can be comma
  separated list. Prefixes can be hex or utf8. Case sensitive. Example: 0x726d726b,0x524d524b
- `--append PATH`: special mode which takes the last block in an existing dump file + 1 as FROM
  (overrides FROM). Appends new blocks with remarks into that file. Convenient for running via
  cronjob for continuous remark list building. Performance right now is 1000 blocks per 10 seconds,
  so processing 5000 blocks with a `* * * * *` cronjob should be doable. Example:
  `yarn cli:fetch --prefixes=0x726d726b,0x524d524b --append=somefile.json`
- `--collection`: filter by specific collection or part of collection ID (i.e. RMRK substring)
- `--fin`: defaults to "yes" if omitted. When "yes", fetches up to last finalized block if `to` is
  omitted. Otherwise, last block. `no` is useful for testing.
- `--output`: name of the file into which to save the output. Overridden if `append` is used.

### Consolidate

Once you have a fetched set, you need to consolidate it.

```bash
yarn cli:consolidate --json=dump.json  --ws=ws://localhost:9933
```

## Download dumps

You can also download both a non-consolidated and a consolidated dump from IPFS. The dumps should be
at most 15 minutes old.

- link tbd

The same commands from above can then be applied on any of the dumps.

## API

The RMRK team also offers simple graphql and HTTPs APIs you can query for quick reading of balances
of any account. Please [let us know](hack@rmrk.app) if you'd like to use these APIs.
