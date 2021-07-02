import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Background } from '.'

export default {
  title: 'Parts/Background',
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  component: Background,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Background>

const Template: ComponentStory<typeof Background> = (args) => <Background {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'User Interface',
  params: 87,
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
