module.exports = {
  docs: [
    "getting-started",
    {
      type: "category",
      label: "RMRK Concepts",
      items: [
        "lego1-nested",
        "lego2-multi-resource",
        "lego2.5-equippable",
        "lego3-emote",
        "lego4-conditional-rendering",
        "lego5-dao",
      ],
    },
    {
      type: "category",
      label: "Kusama Implementation (Remarks)",
      items: ["rmrk1", "rmrk2", "syncing"],
    },
    {
      type: "category",
      label: "RMRK3: EVM implementation (Solidity)",
      items: ["evm"],
    },
    {
      type: "category",
      label: "RMRK3: FRAME implementation (Rust)",
      items: ["pallets"],
    },
    "faq",
  ],
};
