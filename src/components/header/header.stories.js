import React from 'react';

import { Header } from '../index';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Header',
  component: Header,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Header {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};
