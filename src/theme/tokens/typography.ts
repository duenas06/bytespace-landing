import { defineTokens } from "@chakra-ui/react";

export const fonts = defineTokens.fonts({
  heading: { value: "var(--font-poppins), system-ui, sans-serif" },
  body: { value: "var(--font-satoshi), system-ui, sans-serif" },
  logo: { value: "var(--font-clash-display), var(--font-poppins), sans-serif" },
});

export const fontSizes = defineTokens.fontSizes({
  "heading-l": { value: "72px" },
  "heading-m": { value: "44px" },
  "heading-s": { value: "36px" },
  "heading-xs": { value: "20px" },
  "body-l": { value: "18px" },
  "body-m": { value: "16px" },
  "body-s": { value: "14px" },
  "body-xs": { value: "12px" },
});

export const lineHeights = defineTokens.lineHeights({
  heading: { value: "1.2" },
  body: { value: "1.6" },
  label: { value: "1.2" },
});

export const fontWeights = defineTokens.fontWeights({
  regular: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
});
