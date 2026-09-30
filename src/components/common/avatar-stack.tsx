import { Box, HStack, type StackProps } from "@chakra-ui/react";
import Image from "next/image";

type AvatarStackProps = StackProps & {
  avatars: string[];
  extra?: string;
  size?: number;
  extraTone?: "accent" | "dark";
};

export function AvatarStack({
  avatars,
  extra,
  size = 32,
  extraTone = "accent",
  ...rest
}: AvatarStackProps) {
  return (
    <HStack gap="0" {...rest}>
      {avatars.map((avatar, index) => (
        <Box
          key={avatar}
          position="relative"
          boxSize={`${size}px`}
          borderRadius="full"
          overflow="hidden"
          borderWidth="2px"
          borderColor="white"
          ml={index === 0 ? "0" : `-${Math.round(size / 3)}px`}
          zIndex={index}
        >
          <Image src={avatar} alt="" fill sizes={`${size}px`} style={{ objectFit: "cover" }} />
        </Box>
      ))}
      {extra ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize={`${size}px`}
          borderRadius="full"
          borderWidth="2px"
          borderColor="white"
          ml={`-${Math.round(size / 3)}px`}
          zIndex={avatars.length}
          bg={extraTone === "accent" ? "accent.500" : "ink.950"}
          color={extraTone === "accent" ? "ink.950" : "white"}
          textStyle="label.xs"
        >
          {extra}
        </Box>
      ) : null}
    </HStack>
  );
}
