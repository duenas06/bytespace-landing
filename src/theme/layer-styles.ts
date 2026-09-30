import { defineLayerStyles } from "@chakra-ui/react";

export const layerStyles = defineLayerStyles({
  "surface.card": {
    value: {
      bg: "bg",
      borderWidth: "1px",
      borderColor: "border",
      borderRadius: "card",
      boxShadow: "card",
    },
  },
  "surface.panel": {
    value: {
      bg: "bg",
      borderRadius: "panel",
      boxShadow: "panel",
    },
  },
  "surface.floating": {
    value: {
      bg: "bg",
      borderRadius: "media",
      boxShadow: "floating",
    },
  },
  "surface.brand": {
    value: {
      bg: "bg.inverted",
      color: "fg.inverted",
    },
  },
});
