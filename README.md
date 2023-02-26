# Notion UI React [![npm][badge:license]]() [![Build Status][badge:github-actions]][link:github-actions]

[Storybook][link:storybook]

Notion UI React is a Notion style UI library. It contains a set of general purpose user interface components.

## Quick Start

Install library in your project:

```bash
npm install notion-ui-react
```

Or, if you use yarn:

```bash
yarn add notion-ui-react
```

Use it in a react project:

```jsx
  import { Heading, Divider, Text } from "notion-ui-react"

  <Heading level={3}>Heading 3 level</Heading>
  <Text italicize bold underline>Some text</Text>
  <Divider />
  <Text italicize style={{ fontSize: 12, padding: 0 }}>
    Text with custom styles
  </Text>
```

## How can I support the developers?

- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:

## License

[MIT](LICENSE) license.

## From Developers

Made with :heart: by [Bogdan Aksenov][link:bogdan-aksenov-tg].
I always happy to receive your feedback!

[badge:license]: https://img.shields.io/npm/l/notion-ui-react.svg
[badge:github-actions]: https://github.com/bogdanaks/notion-ui-react/workflows/Storybook/badge.svg
[link:github-actions]: https://github.com/bogdanaks/notion-ui-react/actions
[link:storybook]: https://bogdanaks.github.io/notion-ui-react/
[link:bogdan-aksenov-tg]: https://t.me/bogdanaks
