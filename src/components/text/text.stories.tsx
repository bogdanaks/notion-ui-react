import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Text } from "./index"

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dolorum earum incidunt voluptates, voluptatem optio error possimus tenetur. Accusantium, voluptas minima!",
}
