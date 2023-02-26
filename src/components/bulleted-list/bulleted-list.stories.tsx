import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { BulletedList } from "./index"
import { Text } from "../../components/text"

export default {
  title: "Components/BulletedList",
  component: BulletedList,
} as ComponentMeta<typeof BulletedList>

const Template: ComponentStory<typeof BulletedList> = (args) => <BulletedList {...args} />

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
