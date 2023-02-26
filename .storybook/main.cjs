module.exports = {
  "stories": [
    "../src/stories/demo-page.stories.tsx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules"
  ],
  "framework": "@storybook/react"
}