// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Notifi integration guide',
  tagline: 'Get notifications for your project',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://notifi-network.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'notifi-network', // Usually your GitHub org/user name.
  projectName: 'notifi-network.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/notifi-network/notifi-network.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/notifi-logo-mark-dark.svg',
      navbar: {
        title: 'Notifi Docs',
        logo: {
          alt: 'Notifi Logo',
          src: 'img/notifi-logo-mark-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://notifi.network/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/notifi-network',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/',
              },
              {
                label: 'Blog',
                href: 'https://notifi.network/blog',
              },
            ],
          },
          {
            title: 'Community & Support',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/nAqR3mk3rv',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/notifi-network/',
              },          
              {
                label: 'Office Hours',
                href: 'https://calendar.app.google/ksapc7UJKgc6RNgr5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/NotifiNetwork',
              },
              {
                label: 'LinkedIn', 
                href: 'https://www.linkedin.com/company/notifinetwork'
              },
              {
                label: 'Press Kit', 
                href: 'https://notifi.network/presskit'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notifi, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
