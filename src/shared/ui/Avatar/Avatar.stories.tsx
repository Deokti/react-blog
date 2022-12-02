import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar, AvatarVariant } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    // eslint-disable-next-line max-len
    src: 'https://sun6-22.userapi.com/s/v1/if1/Pr3hfZHumqP2o7GDvHiUBtZmqjlh0plvSrlFfow41X8zoHPMn5Csr6agnOc70WmVdi3jbw.jpg?size=500x618&quality=96&crop=0,0,500,618&ava=1',
  },
} as ComponentMeta<typeof Avatar>;

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  size: 50,
};

export const AvatarRounded = Template.bind({});
AvatarRounded.args = {
  variant: AvatarVariant.ROUNDED,
};

export const AvatarSquare = Template.bind({});
AvatarSquare.args = {
  variant: AvatarVariant.SQUARE,
};

export const AvatarWithChildren = Template.bind({});
AvatarWithChildren.args = {
  children: 'N',
};

// export const AvatarDefault = Template.bind({});
// AvatarDefault.args = {};
