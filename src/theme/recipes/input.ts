import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  base: {
    fontFamily: "body",
    color: "fg",
    bg: "bg",
    borderWidth: "1px",
    borderColor: "border.emphasized",
    transitionProperty: "border-color, box-shadow",
    transitionDuration: "fast",
    _placeholder: { color: "fg.subtle" },
    _focusVisible: {
      borderColor: "brand.800",
      boxShadow: "0 0 0 3px rgba(0, 59, 226, 0.12)",
      outline: "none",
    },
  },
  variants: {
    shape: {
      pill: { borderRadius: "pill", px: "24px" },
      field: { borderRadius: "control", px: "16px" },
    },
    scale: {
      md: { h: "48px", textStyle: "body-m" },
      lg: { h: "56px", textStyle: "body-m" },
    },
  },
  defaultVariants: {
    shape: "field",
    scale: "md",
  },
});
