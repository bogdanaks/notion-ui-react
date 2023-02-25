import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Link } from "./index"

export default {
  title: "Components/Link",
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Lorem, ipsum",
  href: "gthub.com/bogdanaks",
}
