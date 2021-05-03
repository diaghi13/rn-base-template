import { createBox, createText, createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = createTheme({
  colors: {
    text: palette.black,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
  },
  textVariants: {
    header: {
      //fontFamily: "ShopifySans-Bold",
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "text",
    },
    subheader: {
      //fontFamily: "ShopifySans-SemiBold",
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "text",
    },
    body: {
      //fontFamily: "ShopifySans",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    text: palette.white,
  },
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
