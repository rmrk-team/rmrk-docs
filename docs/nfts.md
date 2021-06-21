---
title: NFTs
---

### React function component example

The following is a component that implements various tool examples using a previous json dump named `ConsolidatedRemarks` (with the working code equivalent commented out). In a nutshell, the component logs the winners of my contest [bishoujo.store](http://bishoujo.store) with a counter of how many times that individual emoted on the nft.

```
// const RMRK_PREFIXES = ['0x726d726b', '0x524d524b'];
const collectionId = '0488b1a94fd8d61738-BISHOUJO';
export const NftCollection: React.FC = () => {
  React.useEffect(() => {
    // const provider = new WsProvider('wss://node.rmrk.app');
    const fetchAndConsolidate = async () => {
      try {
        // const api = await ApiPromise.create({ provider });
        // await api.isReady;
        // const to = await getLatestFinalizedBlock(api);
        // const remarkBlocks = fetchRemarks(api, 0, to, RMRK_PREFIXES);
        if (
          typeof ConsolidatedRemarks === 'object' &&
          Object.keys(ConsolidatedRemarks).length > 0
        ) {
          //   const remarks: Remark[] = getRemarksFromBlocks(remarkBlocks, prefixes);
          //   const consolidator = new Consolidator();
          //   const { nfts, collections } = await consolidator.consolidate(remarks);
          //   console.log('Consolidated nfts:', nfts);
          //   console.log('Consolidated collections:', collections);
          const { nfts } = (await ConsolidatedRemarks) as ConsolidatorReturnType;
          const sailors: { [key: string]: { [id: string]: number } } = {};
          const bishoujo: NFTConsolidated[] = nfts.filter((x) => {
            return x.collection === collectionId;
          });
          bishoujo.forEach((girl) => {
            const { instance: scout, reactions } = girl;
            // filter out irrelevant nfts and create the sailor dictionary
            if (
              scout.includes('_') &&
              !scout.includes('GOUACHE') &&
              !scout.includes('WINNER') &&
              !sailors.hasOwnProperty(scout)
            ) {
              sailors[scout] = {};
            }
            // we just care about who emoted (senderId) and not the emotes themselves
            const allEmotes = Object.values(reactions);
            allEmotes.forEach((emote) => {
              // loop through each emote's senderIds
              emote.forEach((senderId) => {
                // initialise senderId per sailor scout
                if (!sailors[scout].hasOwnProperty(senderId)) {
                  sailors[scout][senderId] = 1;
                } else {
                  // if they already exist, increment senderId's total emotes count
                  sailors[scout][senderId]++;
                }
              });
            });
          });
          console.log('winners of the contest: ', sailors);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAndConsolidate();
  }, []);
  return <div className="collection" />;
};
```

### Methods and interfaces used

- [getLatestFinalizedBlock](https://github.com/rmrk-team/rmrk-tools#getlatestfinalizedblock)
- [getRemarksFromBlocks](https://github.com/rmrk-team/rmrk-tools#getremarksfromblocks)
- [Consolidator.consolidate](https://github.com/rmrk-team/rmrk-tools#consolidator)
- [ConsolidatorReturnType](https://github.com/rmrk-team/rmrk-tools/blob/f9324e4dffd677eb0d35c8c7cbc4a6211287e776/src/tools/consolidator/consolidator.ts#L36)
- [NFTConsolidated](https://github.com/rmrk-team/rmrk-tools/blob/f9324e4dffd677eb0d35c8c7cbc4a6211287e776/src/tools/consolidator/consolidator.ts#L44)
