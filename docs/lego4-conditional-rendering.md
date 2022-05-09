---
title: "NFT 2.0 Lego 4: Conditional Rendering"
---

Conditional rendering uses [jsonlogic](https://jsonlogic.com/) to define client-only render alterations to the NFT based on certain on and off chain conditions.

For example, an NFT depicting an image of a moon might change to a halfmoon with a rocket landing on it if it gets 50 🌓 and 30 🚀 emojis on it. 

An NFT of an apple might rot after a certain block, turning into an image of a rotten apple, or if consumed in time by means of 🍴 emoji, it becomes just an apple core.

An NFT image of a bicycle can show signs of deterioration and dilapidation if it was sold more than, say, 50 times.

A wolf image could show a pack if people have minted more than 50 wolves into this collection, or even sent wolves [into](lego1-nested.md) the original wolf.

These interactions can have in-game effects, but can also be community-driven art. A collaborative experience where if enough people interact with an NFT in some way, its essence changes.

A logic block of an NFT might look something like this:

```
    "logic": [
        {
            ">": ["emotes.🚀", 50],
            "priority": [2,3,1] // change resource prio based on condition == true
        },
        {
            ">": ["emotes.❄", 100],
            "resources.0.bg": "newhash" // overrides the background image in the base, if such a part exists
        },
        {
            "==": ["this.rain", "true"],
            "resources.0.bg": "hash-of-rainy-background"
        }
    ],
```

In the above example, you can see three scenarios playing out:

- if the NFT gets more than 50 rocket [emotes](lego3-emote.md), it would show a different resource as top priority. So, a moon shows a moon landing if 50 rockets are on it.
- if the NFT gets more than 50 snow emoji, the default background of the first resource will be overridden and show a snowy mountain instead.
- if the NFT has its mutable attribute set to "rain" then the background becomes a rainy image

## Implementations

There are no live implementations of this specification yet.

- Kusama (research phase)
- EVM (research phase)
- Pallets (research phase)