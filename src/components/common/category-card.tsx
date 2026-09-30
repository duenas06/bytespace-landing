import { Center, Stack, Text, type StackProps } from "@chakra-ui/react";
import NextLink from "next/link";

import type { Category } from "@/types/content";

import { CategoryIcon } from "./category-icon";

type CategoryCardProps = StackProps & {
  category: Category;
  href?: string;
};

export function CategoryCard({ category, href, ...rest }: CategoryCardProps) {
  return (
    <Stack
      asChild={Boolean(href)}
      layerStyle="surface.card"
      align="center"
      justify="center"
      gap="16px"
      py="36px"
      px="12px"
      transitionProperty="box-shadow, transform, border-color"
      transitionDuration="moderate"
      _hover={{ boxShadow: "floating", transform: "translateY(-2px)", borderColor: "accent.300" }}
      {...rest}
    >
      {href ? (
        <NextLink href={href}>
          <CategoryCardContent category={category} />
        </NextLink>
      ) : (
        <CategoryCardContent category={category} />
      )}
    </Stack>
  );
}

function CategoryCardContent({ category }: { category: Category }) {
  return (
    <>
      <Center boxSize="56px" borderRadius="full" bg="accent.500" color="ink.950">
        <CategoryIcon name={category.icon} boxSize="24px" />
      </Center>
      <Text textStyle="label.m" textAlign="center">
        {category.label}
      </Text>
    </>
  );
}
