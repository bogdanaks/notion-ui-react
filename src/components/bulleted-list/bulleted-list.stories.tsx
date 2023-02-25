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
  children: [<Text key={1}>Item 1</Text>, <Text key={2}>Item 2</Text>],
}
