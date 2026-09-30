import { defineTokens } from "@chakra-ui/react";

export const radii = defineTokens.radii({
  pill: { value: "999px" },
  card: { value: "16px" },
  panel: { value: "24px" },
  media: { value: "12px" },
  control: { value: "8px" },
});

export const spacing = defineTokens.spacing({
  gutter: { value: "40px" },
  margin: { value: "120px" },
});

export const sizes = defineTokens.sizes({
  frame: { value: "1440px" },
  content: { value: "1200px" },
  header: { value: "120px" },
});

export const shadows = defineTokens.shadows({
  card: { value: "0 1px 2px rgba(36, 37, 40, 0.04)" },
  floating: { value: "0 12px 32px rgba(36, 37, 40, 0.12)" },
  panel: { value: "0 24px 64px rgba(7, 30, 95, 0.16)" },
});
