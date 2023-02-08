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
    'intro',
    {
      type: 'category',
      label: 'Data interactions architecture',
      items: [
        'Architecture/data-interaction/introduction',
        'Architecture/data-interaction/stateless/stateless',
        'Architecture/data-interaction/single-store/single-store',
        'Architecture/data-interaction/interactive-multistore/interactive-multistore',
        'Architecture/data-interaction/reactive-multistore/reactive-multistore',
        'Architecture/data-interaction/reactive-multistore-with-eda/reactive-multistore-with-eda',
      ],
    },
  ],
  ['100QuestionsSidebar']: [
    '100 Questions/Intro',
    '100 Questions/Content',
    {
      type: 'category',
      label: '100 Questions',
      items: [
        '100 Questions/Content',
        '100 Questions/Content',
        '100 Questions/Content',
      ],
    },
  ],
  ['Other']: [
    'Other/intro',
    'Other/WhichComputerToChooseForLearningProgramming',
    'Other/ProjectConventions',
    'Other/TipsForANewbieInIT',
    'Other/WhatToPrepareForAnInterview',
    'Other/KitchenCooperation',
    'Other/MyLinuxTools',
    'Other/OSComparison',
    'Other/lifeCheating/Life-cheating',
    'Other/BashUtils',
    'Other/how-to-become-frontend-engineer-lessons-plan',
    {
      type: 'category',
      label: 'configs',
      items: [
        'Other/i3-config',
        'Other/i3statusbar-config',
      ],
    }
  ],
};

module.exports = sidebars;
