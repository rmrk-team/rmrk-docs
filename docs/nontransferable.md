---
title: "Soulbound 2.0 NFTs: Non-transferables"
---

Non-transferable NFTs, popularized by Vitalik Buterin as [soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html), are NFTs that are useful for reputation tracking: they get added to addresses but are non-transferable, so they cannot be sold and permanently assign some modifier to a given address.

In RMRK this is an especially interesting concept as NFTs can be non-transferable inside another transferable NFT, dubbed **Soulbound 2.0**. 

Thus, an NFT like a [Kanaria](https://kanaria.rmrk.app) can have non-transferable gems inside it that give it long lasting benefits and bonuses, but cannot be removed, alongside some tradable NFTs as well.

![Kanaria example image](/img/post_imgs/ntnft.png)

This can be further utilized when dealing with in-game avatars and skill systems. A skill can be learned and "installed" into an avatar's brain, but cannot be removed.

In addition to a simple on/off flag, the Kusama implementation (see below) supports temporary transferability and temporary non-transferability which allows a minter to specify that an NFT should be movable only after a certain number of blocks, or not before a certain number of blocks.

## Examples

As mentioned in the concept of [equippables](/lego25-equippable), a very good example of using non-transferable NFTs is when using them as reputation indicators, but not on accounts as documented in the aforementioned [soulbound post](https://vitalik.ca/general/2022/01/26/soulbound.html), but inside other transferable or non-transferable NFTs.

- [Zeitgeist](https://zeitgeist.pm), a prediction market chain, will give each chain user an avatar, and give them reputational (non transferable) tokens to equip, based on their performance in their prediction markets.

- [Citizend](https://www.citizend.xyz/) is a public no-lottery project launchpad as a DAO, and will have performance based reputation tokens (non transferables) for the user avatars which, based on their attained reputation, will have better opportunities and more prominent votes in governance later on.

- [Governance Rewards in Kusama](https://www.youtube.com/watch?v=lpT7hubqzFQ) rewards people with trophies for every on-chain referendum they vote in, which they can equip onto their “reputational” shelf. This not only visually indicates your on-chain activity in the world’s biggest DAOs (Kusama and Polkadot) but also serves really well for other apps, e.g. you read that information cross-chain from a Defi hub like Acala, and maybe your reputation is now enough collateral to get an undercollateralized loan.

- [Phala World](https://phala.world) tracks a user’s web3 activity, and turns it into non-transferable reputation tokens inside of Phala World game avatars which can only be leveled up this way. So instead of leveling up by playing the game, you level up by being a good web3 citizen, which turns into non-transferable skills and experience for your avatar.

- [Kabocha](https://rmrk.link/kabocha) Seeds are central to the governance of Kabocha, representing evolving roles, rights and reputation in the network and future Publiks. Seeds are unique, non-transferable assets that grow based on continuing contributions to the project. They will define how you build identity, your voting power and access within future Publik domains.

- [InvArch](https://rmrk.link/invarch) is a blockchain which uses RMRK NFTs for IP management, and a license is inherently a non-transferable NFT as part of another NFT, along with other idea-related information. So non-transferable NFTs act as “reputation” tokens for ideas there too.

- [Skybreach](https://skybreach.app) uses non-transferable NFTs as NFT brains for NFT avatars, and NFT skills inside of those brains which can be equipped into slots, as well as NFT personalities, NFT crafting recipes, NFT pathfinding algorithms and more. For example, a character at level 2 might have 2 skill slots in their NFT brain, but 5 skills. So now they have to choose which skills to make active by equipping 2 of 5. They can level up the character to get a new resource on this NFT brain which has 3 slots, so at level 3 they can equip 3 of 5 skills, and so on. This is how [Skybreach Chunkies](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies) work.

All of the above projects are also part of the [global item economy](/econ) made possible only with RMRK, so that they can have interchangeable accessories that are cross-collection compatible, and therefore get new utility over time, all the time.

## Implementations

The implementations below lead directly to code. For examples of how to utilize them to mint your own NFTs, please refer to the sidebar section for each implementation subtype.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard)
- EVM (in development)
- Pallets (in development)