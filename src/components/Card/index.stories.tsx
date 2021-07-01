import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '.'

export default {
  title: 'Parts/Card',
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <>
      <Card {...args} />
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
