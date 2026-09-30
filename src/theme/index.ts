import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { layerStyles } from "./layer-styles";
import { semanticTokens } from "./semantic-tokens";
import { textStyles } from "./text-styles";
import { colors } from "./tokens/colors";
import { radii, shadows, sizes, spacing } from "./tokens/layout";
import { fontSizes, fontWeights, fonts, lineHeights } from "./tokens/typography";

const config = defineConfig({
  cssVarsPrefix: "bs",
  globalCss: {
    "html, body": {
      fontFamily: "body",
      color: "fg",
      bg: "bg",
    },
    "::selection": {
      bg: "accent.500",
      color: "ink.950",
    },
  },
  theme: {
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    tokens: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      radii,
      shadows,
      sizes,
      spacing,
    },
    semanticTokens,
    textStyles,
    layerStyles,
  },
});

export const system = createSystem(defaultConfig, config);
