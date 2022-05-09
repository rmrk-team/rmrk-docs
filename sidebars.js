module.exports = {
  docs: [
    "getting-started",
    {
      type: "category",
      label: "RMRK Concepts",
      items: [
        "concepts",
        "lego1-nested",
        "lego2-multi-resource",
        "lego2.5-equippable",
        "lego3-emote",
        "lego4-conditional-rendering",
        "lego5-dao",
        "nontransferable",
        "scarcity",
      ],
    },
    {
      type: "category",
      label: "Kusama Implementation (Remarks)",
      items: ["rmrk1", "rmrk2", "syncing"],
    },
    {
      type: "category",
      label: "EVM implementation",
      items: ["evm"],
    },
    {
      type: "category",
      label: "FRAME implementation",
      items: ["pallets"],
    },
    "faq",
  ],
};
