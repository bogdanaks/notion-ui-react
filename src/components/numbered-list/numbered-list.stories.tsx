import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { NumberedList } from "./index"
import { Text } from "../text"

export default {
  title: "Components/NumberedList",
  component: NumberedList,
} as ComponentMeta<typeof NumberedList>

const Template: ComponentStory<typeof NumberedList> = (args) => <NumberedList {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [
    <Text key={1}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dolorum earum incidunt voluptates,
      voluptatem optio error possimus tenetur. Accusantium, voluptas minima!
    </Text>,
    <Text key={2}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit dolorum earum incidunt voluptates,
      voluptatem optio error possimus tenetur. Accusantium, voluptas minima!
    </Text>,
  ],
}
