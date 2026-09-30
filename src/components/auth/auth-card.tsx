import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { AuthForm, type AuthField } from "./auth-form";
import { SocialSignIn } from "./social-sign-in";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  fields: AuthField[];
  submitLabel: string;
  footerPrompt: string;
  footerLinkLabel: string;
  footerHref: string;
  withSocial?: boolean;
};

export function AuthCard({
  eyebrow,
  title,
  fields,
  submitLabel,
  footerPrompt,
  footerLinkLabel,
  footerHref,
  withSocial = false,
}: AuthCardProps) {
  return (
    <Stack
      layerStyle="surface.panel"
      p={{ base: "28px", md: "48px", xl: "64px" }}
      gap="32px"
      w="full"
      maxW="580px"
      minH={{ lg: "785px" }}
    >
      <Stack gap="8px">
        <Text textStyle="label.m" color="fg.brand">
          {eyebrow}
        </Text>
        <Heading as="h1" textStyle="heading.m">
          {title}
        </Heading>
      </Stack>

      <AuthForm fields={fields} submitLabel={submitLabel} />

      {withSocial ? <SocialSignIn /> : null}

      <Text textStyle="body.m" color="fg.muted" textAlign="center" mt="auto">
        {`${footerPrompt} `}
        <Link asChild color="fg.brand" textStyle="body.m">
          <NextLink href={footerHref}>{footerLinkLabel}</NextLink>
        </Link>
      </Text>
    </Stack>
  );
}
