---
title: CLI Helpers
---

If you end up working with large data sets such as the latest dump from Singular, we recommend using the CLI tools to generate this json data for you, in case you experience a large CPU data spike when testing out your frontend. You can read the original CLI documentation below or in the [rmrk-tools github repo](https://github.com/rmrk-team/rmrk-tools).

### How to install CLI helpers

You can use this package as a CLI tool: `yarn add rmrk-tools@latest --dev`

Now you can use any of the helper commands in your bash or npm scripts by prepending `rmrk-tools-` to the helper name:

```
"scripts": {
    "fetch": "rmrk-tools-fetch",
    "consolidate": "rmrk-tools-consolidate",
    "seed": "rmrk-tools-seed",
}
```

Or in bash:

```
#! /usr/bin/env node
import shell from "shelljs";

shell.exec(
  'rmrk-tools-fetch --ws wss://node.rmrk.app --prefixes=0x726d726b,0x524d524b --append=dumps/latest.json',
);
```

### Additional notes

- If you get a build error when you try using the cli helper tools, you need to make sure you install all of your dependencies (for me, it required that I install the dependencies `@polkadot/api` and `arg`).

> "arg is for local dev cli tools." --Ilia

- For those working with latest dump data: if you run the cli:`fetch` method, and you are still trying to connect to the 127.0.0.1:9944 default endpoint, you need to run fetch with the optional parameter `--ws wss://node.rmrk.app` or whatever you decided on your local node endpoint.

## Fetch

Grabs all system.remark extrinsics in a block range and logs an array of them all, keyed by block.

> "This is a generalized fetcher that can fetch any remarks, not just RMRK nfts." --Bruno

```
// example
yarn fetch --ws wss://node.rmrk.app --prefixes=0x726d726b,0x524d524b --append=dumps/latest.json
```

The return data will look like this:

```
[
  {
    block: 8,
    call: [
      {
        call: "system.remark",
        value: "0x13371337",
      },
      {
        call: "balances.transfer",
        value:
          "5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjfr,10000000000000000",
      },
    ],
  },
  {
    block: 20,
    call: [
      {
        call: "system.remark",
        value: "0x13371338",
      },
    ],
  },
];
```

Optional parameters for `fetch`:

- --ws URL: websocket URL to connect to, defaults to 127.0.0.1:9944
- --from FROM: block from which to start, defaults to 0 (note that for RMRK, canonically the block 4892957 is genesis)
- --to TO: block until which to search, defaults to latest
- --prefixes PREFIXES: limit return data to only remarks with these prefixes. Can be comma separated list. Prefixes can be hex or utf8, but from working experience using hex is less bug-prone. Case sensitive. `Example: 0x726d726b,0x524d524b or rmrk,RMRK`
- --append PATH: special mode which takes the last block in an existing dump file + 1 as FROM (overrides FROM). Appends new blocks with remarks into that file. Convenient for running via cronjob for continuous remark list building. Performance right now is 1000 blocks per 10 seconds, so processing 5000 blocks with a \* \* \* \* \* cronjob should be doable. `Example: yarn fetch --prefixes=0x726d726b,0x524d524b --append=somefile.json`
- --collection: filter by specific collection or part of collection ID (i.e. RMRK substring).
- --fin: defaults to "yes" if omitted. When "yes", fetches up to last finalized block if to is omitted. Otherwise, last block. no is useful for testing.
- --output: name of the file into which to save the output. Overridden if append is used.

## Consolidate

Takes as input a JSON file and processes all remarks within it to reach a final state of the NFT ecosystem based on that JSON.

`yarn consolidate --json=dumps/remarks-4892957-5437981-0x726d726b.json`

```
// TODO
- Write adapter interface
- Support multiple adapters apart from JSON (SQL?)
- Write exporters for SQL (ready-to-execute, or even direct to DB)
- Write class for a single RMRK entry so it's easy to iterate through across these different adapters and consolidators
```

Required parameters for `consolidate`:

- --json JSON: the file to append the consolidated remark transactions into.

## Seed

`// TODO`

Visit the original rmrk-tools for more info on [Seed](https://github.com/rmrk-team/rmrk-tools#seed).

## Generate Metadata

`// TODO`

Visit the original rmrk-tools for more info on [Generating Metadata](https://github.com/rmrk-team/rmrk-tools#generate-metadata).
