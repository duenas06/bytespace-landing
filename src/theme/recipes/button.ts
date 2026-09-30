import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontFamily: "body",
    fontWeight: "medium",
    lineHeight: "label",
    borderRadius: "pill",
    transitionProperty: "background-color, color, border-color, transform, box-shadow",
    transitionDuration: "fast",
    _active: { transform: "translateY(1px)" },
  },
  variants: {
    visual: {
      accent: {
        bg: "accent.500",
        color: "ink.950",
        _hover: { bg: "accent.400" },
      },
      brand: {
        bg: "brand.800",
        color: "white",
        _hover: { bg: "brand.900" },
      },
      outlineInverted: {
        bg: "transparent",
        color: "white",
        borderWidth: "1px",
        borderColor: "whiteAlpha.500",
        _hover: { bg: "whiteAlpha.200" },
      },
      ghostInk: {
        bg: "transparent",
        color: "fg.muted",
        _hover: { bg: "ink.50", color: "fg" },
      },
      surface: {
        bg: "bg",
        color: "fg",
        borderWidth: "1px",
        borderColor: "border",
        _hover: { borderColor: "border.emphasized", bg: "ink.50" },
      },
    },
    scale: {
      sm: { h: "40px", px: "20px", textStyle: "label.s" },
      md: { h: "48px", px: "28px", textStyle: "label.m" },
      lg: { h: "56px", px: "36px", textStyle: "label.l" },
    },
  },
  defaultVariants: {
    visual: "accent",
    scale: "md",
  },
});
