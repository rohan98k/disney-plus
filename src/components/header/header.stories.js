import React from 'react';

import { Header } from '../index';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Header',
  component: Header,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
