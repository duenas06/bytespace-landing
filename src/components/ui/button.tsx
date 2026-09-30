"use client";

import { chakra } from "@chakra-ui/react";

import { buttonRecipe } from "@/theme/recipes";

export const Button = chakra("button", buttonRecipe);
export type ButtonProps = React.ComponentProps<typeof Button>;
