import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Alert } from '.'

export default {
  title: 'Parts/Alert',
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Note = Template.bind({})
Note.args = {
  status: 'note',
}
Note.parameters = {
  docs: {
    source: {
      code: '<h1 class="button">',
    },
    description: {
      story: 'Some story **Note**',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  status: 'warning',
}
Warning.parameters = {
  docs: {
    description: {
      story: 'Some story **Warning**',
    },
  },
}

export const Error = Template.bind({})
Error.args = {
  status: 'error',
}
Error.parameters = {
  docs: {
    description: {
      story: 'Some story **Error**',
    },
  },
}
