export type Colors = "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red"

type ColorsMap<T> = { [day in Colors]: T }

export const textColors: ColorsMap<string> = {
  default: "#37352f",
  gray: "rgba(120, 119, 116, 1);",
  brown: "rgba(159, 107, 83, 1);",
  orange: "rgba(217, 115, 13, 1);",
  yellow: "rgba(203, 145, 47, 1);",
  green: "rgba(68, 131, 97, 1);",
  blue: "rgba(51, 126, 169, 1);",
  purple: "rgba(144, 101, 176, 1);",
  pink: "rgba(193, 76, 138, 1);",
  red: "rgba(212, 76, 71, 1);",
}

export const backgroundColors: ColorsMap<string> = {
  default: "transparent",
  gray: "rgba(241, 241, 239, 1);",
  brown: "rgba(244, 238, 238, 1);",
  orange: "rgba(251, 236, 221, 1);",
  yellow: "rgba(251, 243, 219, 1);",
  green: "rgba(237, 243, 236, 1);",
  blue: "rgba(231, 243, 248, 1);",
  purple: "rgba(244, 240, 247, 0.8);",
  pink: "rgba(249, 238, 243, 0.8);",
  red: "rgba(253, 235, 236, 1);",
}
