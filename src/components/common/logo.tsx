import { Box, HStack, Text, type BoxProps, type StackProps } from "@chakra-ui/react";

type LogoTone = "light" | "dark";

const toneStyles: Record<LogoTone, { mark: string; word: string }> = {
  light: { mark: "accent.400", word: "white" },
  dark: { mark: "accent.500", word: "ink.950" },
};

type LogoMarkProps = Omit<BoxProps, "color"> & { tone?: LogoTone };

export function LogoMark({ tone = "light", h = "32px", ...rest }: LogoMarkProps) {
  return (
    <Box asChild color={toneStyles[tone].mark} h={h} w="auto" {...rest}>
      <svg viewBox="0 0 28.875 31.5" fill="currentColor" aria-hidden="true">
        <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" />
        <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" />
        <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" />
      </svg>
    </Box>
  );
}

type LogoProps = StackProps & {
  tone?: LogoTone;
  markOnly?: boolean;
  markSize?: BoxProps["h"];
};

export function Logo({ tone = "light", markOnly = false, markSize = "32px", ...rest }: LogoProps) {
  return (
    <HStack gap="10px" align="center" {...rest}>
      <LogoMark tone={tone} h={markSize} />
      {markOnly ? null : (
        <Text
          fontFamily="logo"
          fontWeight="bold"
          fontSize="26px"
          lineHeight="1"
          color={toneStyles[tone].word}
        >
          ByteSpace
        </Text>
      )}
    </HStack>
  );
}
