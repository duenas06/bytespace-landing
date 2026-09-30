import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  "heading.l": {
    value: {
      fontFamily: "heading",
      fontWeight: "semibold",
      fontSize: { base: "40px", md: "56px", xl: "heading-l" },
      lineHeight: "heading",
      letterSpacing: "0",
    },
  },
  "heading.m": {
    value: {
      fontFamily: "heading",
      fontWeight: "semibold",
      fontSize: { base: "30px", md: "38px", xl: "heading-m" },
      lineHeight: "heading",
      letterSpacing: "0",
    },
  },
  "heading.s": {
    value: {
      fontFamily: "heading",
      fontWeight: "semibold",
      fontSize: { base: "26px", md: "32px", xl: "heading-s" },
      lineHeight: "heading",
      letterSpacing: "0",
    },
  },
  "heading.xs": {
    value: {
      fontFamily: "heading",
      fontWeight: "semibold",
      fontSize: "heading-xs",
      lineHeight: "heading",
      letterSpacing: "0",
    },
  },
  "body.l": {
    value: { fontFamily: "body", fontWeight: "regular", fontSize: "body-l", lineHeight: "body" },
  },
  "body.m": {
    value: { fontFamily: "body", fontWeight: "regular", fontSize: "body-m", lineHeight: "body" },
  },
  "body.s": {
    value: { fontFamily: "body", fontWeight: "regular", fontSize: "body-s", lineHeight: "body" },
  },
  "body.xs": {
    value: { fontFamily: "body", fontWeight: "regular", fontSize: "body-xs", lineHeight: "body" },
  },
  "label.xl": {
    value: {
      fontFamily: "body",
      fontWeight: "medium",
      fontSize: "heading-xs",
      lineHeight: "label",
    },
  },
  "label.l": {
    value: { fontFamily: "body", fontWeight: "medium", fontSize: "body-l", lineHeight: "label" },
  },
  "label.m": {
    value: { fontFamily: "body", fontWeight: "medium", fontSize: "body-m", lineHeight: "label" },
  },
  "label.s": {
    value: { fontFamily: "body", fontWeight: "medium", fontSize: "body-s", lineHeight: "label" },
  },
  "label.xs": {
    value: { fontFamily: "body", fontWeight: "medium", fontSize: "body-xs", lineHeight: "label" },
  },
});
