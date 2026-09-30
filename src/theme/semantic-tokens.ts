import { defineSemanticTokens } from "@chakra-ui/react";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: "{colors.white}" },
      subtle: { value: "{colors.ink.50}" },
      inverted: { value: "{colors.brand.800}" },
      accent: { value: "{colors.accent.500}" },
    },
    fg: {
      DEFAULT: { value: "{colors.ink.950}" },
      muted: { value: "{colors.ink.500}" },
      subtle: { value: "{colors.ink.400}" },
      inverted: { value: "{colors.white}" },
      brand: { value: "{colors.brand.800}" },
    },
    border: {
      DEFAULT: { value: "{colors.ink.100}" },
      muted: { value: "{colors.ink.50}" },
      emphasized: { value: "{colors.ink.200}" },
    },
    grid: {
      line: { value: "rgba(255, 255, 255, 0.08)" },
    },
  },
  gradients: {
    "surface-soft": {
      value:
        "radial-gradient(60% 80% at 8% 6%, rgba(203, 252, 1, 0.34) 0%, rgba(203, 252, 1, 0) 62%), radial-gradient(70% 90% at 96% 78%, rgba(0, 59, 226, 0.14) 0%, rgba(0, 59, 226, 0) 60%), linear-gradient(180deg, #FFFFFF 0%, #F6F7FF 100%)",
    },
    "surface-glow": {
      value:
        "radial-gradient(48% 62% at 46% 34%, rgba(203, 252, 1, 0.42) 0%, rgba(203, 252, 1, 0) 68%), radial-gradient(60% 70% at 4% 88%, rgba(0, 59, 226, 0.12) 0%, rgba(0, 59, 226, 0) 62%), linear-gradient(180deg, #FDFEFA 0%, #FFFFFF 100%)",
    },
  },
});
