import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Heading } from "./index"

export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  level: 1,
  children: "Heading",
}
