import { Box, HStack, Icon, Stack, Text, type StackProps } from "@chakra-ui/react";
import { Star } from "lucide-react";

import { AvatarStack } from "./avatar-stack";

type FloatingCardProps = StackProps;

export function FloatingCard({ children, ...rest }: FloatingCardProps) {
  return (
    <Stack layerStyle="surface.floating" p="16px" gap="4px" {...rest}>
      {children}
    </Stack>
  );
}

export function HighlightCard({
  title,
  meta,
  ...rest
}: FloatingCardProps & { title: string; meta: string }) {
  return (
    <FloatingCard {...rest}>
      <Text textStyle="label.l">{title}</Text>
      <Text textStyle="body.xs" color="fg.muted">
        {meta}
      </Text>
    </FloatingCard>
  );
}

export function ProgressCard({
  title,
  value,
  ...rest
}: FloatingCardProps & { title: string; value: number }) {
  return (
    <FloatingCard gap="8px" {...rest}>
      <Text textStyle="body.s" color="fg.muted">
        {title}
      </Text>
      <Text textStyle="heading.s" fontSize="40px">
        {`${value}%`}
      </Text>
      <Box h="8px" borderRadius="pill" bg="ink.100" overflow="hidden">
        <Box h="full" w={`${value}%`} bg="accent.500" borderRadius="pill" />
      </Box>
    </FloatingCard>
  );
}

type StudentsCardProps = FloatingCardProps & {
  title: string;
  rating: number;
  count: number;
  avatars: string[];
  extra: string;
  tone?: "light" | "accent";
};

export function StudentsCard({
  title,
  rating,
  count,
  avatars,
  extra,
  tone = "light",
  ...rest
}: StudentsCardProps) {
  const isAccent = tone === "accent";

  return (
    <FloatingCard gap="8px" bg={isAccent ? "accent.500" : "bg"} {...rest}>
      <Text textStyle="label.l">{title}</Text>
      <HStack gap="4px">
        <Text textStyle="label.s">{rating.toFixed(1)}</Text>
        <Text textStyle="body.xs" color={isAccent ? "ink.700" : "fg.subtle"}>
          {`(${count})`}
        </Text>
        <Icon asChild boxSize="12px" color="brand.600">
          <Star fill="currentColor" strokeWidth={0} />
        </Icon>
      </HStack>
      <AvatarStack
        avatars={avatars}
        extra={extra}
        size={36}
        extraTone={isAccent ? "dark" : "accent"}
      />
    </FloatingCard>
  );
}

type RevenueCardProps = StackProps & {
  title: string;
  period: string;
  value: string;
  delta?: string;
  progress?: number;
};

export function RevenueCard({ title, period, value, delta, progress, ...rest }: RevenueCardProps) {
  return (
    <Stack
      bg="brand.800"
      color="white"
      borderRadius="media"
      px="16px"
      py="14px"
      gap="2px"
      boxShadow="floating"
      {...rest}
    >
      <Text textStyle="label.m">{title}</Text>
      <Text textStyle="body.xs" color="whiteAlpha.800">
        {period}
      </Text>
      <Text
        fontFamily="heading"
        fontWeight="semibold"
        fontSize="22px"
        lineHeight="1.2"
        pt="6px"
        whiteSpace="nowrap"
      >
        {value}
      </Text>
      {progress === undefined ? null : (
        <Box mt="10px" h="6px" borderRadius="pill" bg="whiteAlpha.400" overflow="hidden">
          <Box h="full" w={`${progress}%`} bg="accent.500" borderRadius="pill" />
        </Box>
      )}
      {delta ? (
        <Text
          alignSelf="flex-start"
          mt="8px"
          px="8px"
          py="2px"
          borderRadius="pill"
          bg="accent.500"
          color="ink.950"
          textStyle="label.xs"
        >
          {delta}
        </Text>
      ) : null}
    </Stack>
  );
}
