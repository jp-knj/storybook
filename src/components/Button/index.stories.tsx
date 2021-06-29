import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Parts/Button',
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
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

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}
Secondary.parameters = {
  docs: {
    description: {
      story: 'Some story **secondary**',
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}
Large.parameters = {
  docs: {
    description: {
      story: 'Some story **large**',
    },
  },
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
Small.parameters = {
  docs: {
    description: {
      story: 'Some story **small**',
    },
  },
}
