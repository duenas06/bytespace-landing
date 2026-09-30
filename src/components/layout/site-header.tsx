"use client";

import { Box, HStack, IconButton, Link, Stack } from "@chakra-ui/react";
import { Menu, ShoppingBag, X } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/common";
import { Container } from "@/components/ui";
import { accountNav, primaryNav } from "@/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="header" position="relative" zIndex="docked" color="white">
      <Container>
        <HStack h={{ base: "80px", xl: "header" }} justify="space-between" gap="24px">
          <Link asChild aria-label="ByteSpace home">
            <NextLink href="/">
              <Logo tone="light" />
            </NextLink>
          </Link>

          <HStack as="nav" gap="32px" display={{ base: "none", lg: "flex" }}>
            {primaryNav.map((item) => (
              <HeaderLink key={item.href} href={item.href} isActive={pathname === item.href}>
                {item.label}
              </HeaderLink>
            ))}
          </HStack>

          <HStack gap="24px" display={{ base: "none", lg: "flex" }}>
            {accountNav.map((item) => (
              <HeaderLink key={item.href} href={item.href} isActive={pathname === item.href}>
                {item.label}
              </HeaderLink>
            ))}
            <IconButton
              aria-label="Open cart"
              variant="plain"
              color="white"
              _hover={{ color: "accent.400" }}
            >
              <ShoppingBag />
            </IconButton>
          </HStack>

          <IconButton
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            variant="plain"
            color="white"
            display={{ base: "inline-flex", lg: "none" }}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X /> : <Menu />}
          </IconButton>
        </HStack>
      </Container>

      {isOpen ? (
        <Box display={{ base: "block", lg: "none" }} pb="24px">
          <Container>
            <Stack
              gap="16px"
              bg="brand.900"
              borderRadius="card"
              p="24px"
              borderWidth="1px"
              borderColor="whiteAlpha.300"
            >
              {[...primaryNav, ...accountNav].map((item) => (
                <HeaderLink key={item.href} href={item.href} isActive={pathname === item.href}>
                  {item.label}
                </HeaderLink>
              ))}
            </Stack>
          </Container>
        </Box>
      ) : null}
    </Box>
  );
}

type HeaderLinkProps = {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
};

function HeaderLink({ href, isActive, children }: HeaderLinkProps) {
  return (
    <Link
      asChild
      textStyle="label.m"
      color={isActive ? "white" : "whiteAlpha.800"}
      fontWeight={isActive ? "semibold" : "medium"}
      _hover={{ color: "white", textDecoration: "none" }}
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
}
