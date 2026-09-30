"use client";

import { chakra } from "@chakra-ui/react";

import { inputRecipe } from "@/theme/recipes";

export const TextInput = chakra("input", inputRecipe);
export type TextInputProps = React.ComponentProps<typeof TextInput>;
