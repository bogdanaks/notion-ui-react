import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Divider } from "./index"
import { Text } from "../text"

export default {
  title: "Components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = () => <Divider />
const TemplateOnPage: ComponentStory<typeof Divider> = () => (
  <>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit tempore beatae aliquam fugiat, sit,
      obcaecati dolorem, ad rerum eos doloremque. Totam saepe ad unde nobis qui nostrum sunt! Cupiditate. Quo nostrum
      ipsa maiores rem sequi ipsam, quod ullam labore modi praesentium fugit perferendis exercitationem ex commodi eum
      molestias eligendi, culpa veniam voluptate. Quae, aspernatur sed! Qui nobis earum quisquam!
    </Text>
    <Divider />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit tempore beatae aliquam fugiat, sit,
      obcaecati dolorem, ad rerum eos doloremque. Totam saepe ad unde nobis qui nostrum sunt! Cupiditate. Quo nostrum
      ipsa maiores rem sequi ipsam, quod ullam labore modi praesentium fugit perferendis exercitationem ex commodi eum
      molestias eligendi, culpa veniam voluptate. Quae, aspernatur sed! Qui nobis earum quisquam!
    </Text>
  </>
)

export const Default = Template.bind({})
Default.args = {}

export const OnPage = TemplateOnPage.bind({})
OnPage.args = {}
