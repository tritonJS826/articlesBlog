// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    '@easyops-cn/docusaurus-search-local',
    // '@cmfcmf/docusaurus-search-local',
    // '@aldridged/docusaurus-plugin-lunr'
  ],
  title: "Triton's things",
  tagline: 'Architecture and programming',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'triton', // Usually your GitHub org/user name.
  projectName: 'triton\'s things', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      ru: {
        label: 'Русский',
      },
    },
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: "Triton's things",
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Architecture/Introduction',
            position: 'left',
            label: 'Front-end architecture',
          },
          {
            type: 'doc',
            docId: '100 Questions/Content',
            position: 'left',
            label: '100 Questions',
          },
          {
            type: 'doc',
            docId: 'Other/intro',
            position: 'left',
            label: 'Other',
          },
          // {
          //   type: 'doc',
          //   docId: '/category/front-end-architecture',
          //   position: 'left',
          //   label: 'Front-end architecture',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Programming',
            items: [
              // {
              //   label: 'Architecture',
              //   to: '/docs/testDocument/testDoc1.md',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'github (add link)',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'linkedin (add link)',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'CV (add link)',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog(add link)',
                to: '/blog',
              },
              {
                label: 'GitHub(add link)',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Triton Things.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
