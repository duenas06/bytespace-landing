"use client";

import { chakra } from "@chakra-ui/react";

import { pillRecipe } from "@/theme/recipes";

export const Pill = chakra("span", pillRecipe);
export type PillProps = React.ComponentProps<typeof Pill>;
