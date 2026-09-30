import { HStack, Icon, IconButton, Separator, Stack, Text } from "@chakra-ui/react";

import { FacebookIcon, GoogleIcon } from "./social-icons";

export function SocialSignIn() {
  return (
    <Stack gap="32px" align="center" pt="16px">
      <HStack w="full" gap="16px">
        <Separator flex="1" borderColor="border" />
        <Text textStyle="body.s" color="fg.muted">
          or
        </Text>
        <Separator flex="1" borderColor="border" />
      </HStack>

      <HStack gap="16px">
        <IconButton
          aria-label="Continue with Facebook"
          variant="outline"
          borderColor="border"
          borderRadius="panel"
          boxSize="71px"
          _hover={{ borderColor: "border.emphasized", bg: "ink.50" }}
        >
          <Icon asChild boxSize="30px">
            <FacebookIcon />
          </Icon>
        </IconButton>
        <IconButton
          aria-label="Continue with Google"
          variant="outline"
          borderColor="border"
          borderRadius="panel"
          boxSize="71px"
          _hover={{ borderColor: "border.emphasized", bg: "ink.50" }}
        >
          <Icon asChild boxSize="30px">
            <GoogleIcon />
          </Icon>
        </IconButton>
      </HStack>
    </Stack>
  );
}
