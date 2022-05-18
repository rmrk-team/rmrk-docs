/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "RMRK docs",
  tagline: "Documentation for RMRK",
  url: "https://docs.rmrk.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  favicon: "img/favicon.ico",
  organizationName: "rmrk-team", // Usually your GitHub org/user name.
  projectName: "rmrk-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "RMRK",
      logo: {
        alt: "RMRK logo",
        src: "img/tg_main.png",
        href: "https://rmrk.app",
      },
      items: [
        {
          to: "/getting-started",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/rmrk-team/rmrk-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Info",
          items: [
            {
              label: "RMRK.app web",
              href: "https://rmrk.app",
            },
            {
              label: "Kanaria",
              href: "https://kanaria.rmrk.app",
            },
            {
              label: "Singular Marketplace",
              href: "https://singular.rmrk.app",
            },
            {
              label: "RMRK Tokens",
              href: "https://singular.rmrk.app/tokens",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/rmrkapp",
            },
            {
              label: "Telegram (implementers chat)",
              href: "https://t.me/rmrkimpl",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/rmrkapp",
            },
            {
              label: "Newsletter",
              href: "https://news.nft.review",
            },
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "Specs GitHub",
              href: "https://github.com/rmrk-team/rmrk-spec",
            },
            {
              label: "Docs GitHub",
              href: "https://github.com/rmrk-team/rmrk-docs",
            },
            {
              label: "Tools GitHub",
              href: "https://github.com/rmrk-team/rmrk-tools",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RMRK Team.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/rmrk-team/rmrk-docs/edit/master/docs/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
