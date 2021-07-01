import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Post } from '.'

export default {
  title: 'Parts/Post',
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  component: Post,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => {
  return (
    <>
      <Post {...args} />
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Heading',
  description: 'Some text about the thing that goes over a few',
  label: 'Click here',
}
Primary.parameters = {
  docs: {
    source: {
      code: '<h1 class="button">',
    },
    description: {
      story: 'Some story **markdown**',
    },
  },
}
