import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

// import { BulletedList } from "./index"
// import { Text } from "../../components/text"
import { Heading, Text, Divider, BulletedList } from "../components"

const Page = () => {
  return (
    <div>
      <Heading level={0}>Quick note</Heading>
      <Text>Quickly create a rich document.</Text>
      <br />
      <Heading>Jot down some text</Heading>
      <Divider />
      <Text>
        They found Mary, as usual, deep in the study of thorough-bass and human nature; and had some extracts to admire,
        and some new observations of threadbare morality to listen to. Catherine and Lydia had information for them of a
        different sort.
      </Text>
      <br />
      <Heading>Make a bulleted list</Heading>
      <Divider />
      <BulletedList>
        <Text>Wake up</Text>
        <Text>Eat breakfast</Text>
        <Text>Brush teeth</Text>
      </BulletedList>
    </div>
  )
}

export default {
  title: "Demo/Page",
  component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = () => <Page />

export const Default = Template.bind({})
// Default.args = {
//   children: [<Text key={1}>Item 1</Text>, <Text key={2}>Item 2</Text>],
// }
