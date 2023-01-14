/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
  ['Architecture']: [
    // 'intro',
      '100 Questions/Content',
      // 'Architecture/Без состояния',
      // 'Architecture/Introduction',
      // 'Architecture/Единственное хранилище',
      // 'Architecture/Интерактивные хранилища',
      // 'Architecture/Реактивные хранилища',
      // 'Architecture/Реактивные хранилища с EDA',
      // '100 Questions/Introduction'
    // {
    //   type: 'category',
    //   label: 'Architecture',
    //   items: ['Architecture/Взаимодействие/Без состояния',
    //     'Architecture/Взаимодействие/Вступление',
    //     'Architecture/Взаимодействие/Единственное хранилище',
    //     'Architecture/Взаимодействие/Интерактивные хранилища',
    //     'Architecture/Взаимодействие/Реактивные хранилища',
    //     'Architecture/Взаимодействие/Реактивные хранилища с EDA',
    //   ],
    // },
  ],
  ['100QuestionsSidebar']: [
    '100 Questions/Content',
    '100 Questions/Introduction',
    {
      type: 'category',
      label: '100 Questions',
      items: ['100 Questions/Content', '100 Questions/Introduction','100 Questions/Introduction',],
    },
  ],
};

module.exports = sidebars;
