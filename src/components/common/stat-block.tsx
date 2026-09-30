import { Stack, Text, type StackProps } from "@chakra-ui/react";

import type { Stat } from "@/types/content";

type StatBlockProps = StackProps & {
  stat: Stat;
};

export function StatBlock({ stat, ...rest }: StatBlockProps) {
  return (
    <Stack gap="4px" {...rest}>
      <Text textStyle="heading.s" fontSize={{ base: "28px", md: "32px" }} color="fg.brand">
        {stat.value}
      </Text>
      <Text textStyle="body.m" color="fg.muted">
        {stat.label}
      </Text>
    </Stack>
  );
}
