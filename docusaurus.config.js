// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Numary Hub Resources\n',
  tagline: 'The open foundation you need to build and scale money-movements within your app',
  url: 'https://developers.numary.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'numary', // Usually your GitHub org/user name.
  projectName: 'docs-cloud', // Usually your repo name.

  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/numary/docs/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            // specUrl: 'https://api.numary.cloud/swagger.json',
            spec: 'swagger.json',
            routePath: '/api/cloud/',
          },
          {
            // specUrl: 'https://api.numary.cloud/swagger.json',
            spec: 'swagger.json',
            routePath: '/api/ledger/',
          }
      ],
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Numary Logo',
          src: 'img/logo_numary.svg',
        },
        items: [
          {
            label: "Documentation",
            to: "/docs/introduction",
            position: "left",
          },
          {to: '/api/ledger/', label: 'Ledger API', position: 'left'},
          {to: '/api/cloud/', label: 'Cloud API', position: 'left'},
          {
            href: 'https://github.com/numary',
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
                to: '/docs/introduction/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xyHvcbzk4w',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/numaryhq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/numary',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Numary, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
