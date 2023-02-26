import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Quote } from "./index"

export default {
  title: "Components/Quote",
  component: Quote,
} as ComponentMeta<typeof Quote>

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />

export const Default = Template.bind({})
Default.args = {
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dolorum earum incidunt voluptates, voluptatem optio error possimus tenetur. Accusantium, voluptas minima!",
}
