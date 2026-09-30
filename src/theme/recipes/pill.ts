import { defineRecipe } from "@chakra-ui/react";

export const pillRecipe = defineRecipe({
  className: "bytespace-pill",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    borderRadius: "pill",
    whiteSpace: "nowrap",
    userSelect: "none",
  },
  variants: {
    tone: {
      neutral: { bg: "ink.100", color: "fg" },
      subtle: { bg: "ink.50", color: "fg.muted" },
      accent: { bg: "accent.500", color: "ink.950" },
      brand: { bg: "brand.800", color: "white" },
      overlay: { bg: "rgba(255, 255, 255, 0.82)", color: "fg", backdropFilter: "blur(6px)" },
    },
    scale: {
      xs: { h: "24px", px: "10px", textStyle: "label.xs" },
      sm: { h: "32px", px: "14px", textStyle: "label.s" },
      md: { h: "40px", px: "20px", textStyle: "label.m" },
    },
    interactive: {
      true: {
        cursor: "pointer",
        transitionProperty: "background-color, color",
        transitionDuration: "fast",
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
    scale: "sm",
  },
});
