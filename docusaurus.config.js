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
          title: "Web",
          items: [
            {
              label: "RMRK.app web",
              href: "https://rmrk.app",
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
              href: "https://github.com/rmrk-team/rmrk-specs",
            },
            {
              label: "Docs GitHub",
              href: "https://github.com/rmrk-team/rmrk-docs",
            },
            {
              label: "Tools GitHub",
              href: "https://github.com/rmrk-team/rmrk-tools",
            },
            {
              label: "RMRK.app Web GitHub",
              href: "https://github.com/rmrk-team/rmrk-web",
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
          editUrl:
            "https://github.com/rmrk-team/rmrk-docs/edit/master/website/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
