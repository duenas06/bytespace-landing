import { Box, Heading, Icon, Stack, chakra } from "@chakra-ui/react";
import { ChevronDown, Search } from "lucide-react";
import { useState, type FormEvent } from "react";

import { GridBackdrop } from "@/components/common";
import { SiteHeader } from "@/components/layout";
import { Button, Container, TextInput } from "@/components/ui";

type SearchHeroProps = {
  title: string;
  scopeLabel: string;
  placeholder?: string;
  onSearch?: (term: string) => void;
};

export function SearchHero({
  title,
  scopeLabel,
  placeholder = "Search",
  onSearch,
}: SearchHeroProps) {
  const [term, setTerm] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(term);
  }

  return (
    <Box position="relative" bg="brand.800" overflow="hidden">
      <GridBackdrop />

      <Box position="relative" zIndex={1}>
        <SiteHeader />

        <Container pt={{ base: "32px", xl: "48px" }} pb={{ base: "48px", xl: "72px" }}>
          <Stack align="center" gap={{ base: "24px", xl: "38px" }}>
            <Heading as="h1" textStyle="heading.s" color="fg.inverted" textAlign="center">
              {title}
            </Heading>

            <chakra.form
              onSubmit={handleSubmit}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              alignItems={{ base: "stretch", sm: "center" }}
              gap="16px"
              w="full"
              maxW="624px"
            >
              <Box position="relative" flex="1">
                <Icon
                  asChild
                  boxSize="20px"
                  color="fg.subtle"
                  position="absolute"
                  left="24px"
                  top="50%"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                >
                  <Search />
                </Icon>
                <TextInput
                  name="q"
                  shape="pill"
                  scale="lg"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  w="full"
                  pl="56px"
                />
              </Box>

              <Button type="button" visual="accent" scale="md" flexShrink={0}>
                {scopeLabel}
                <Icon asChild boxSize="18px">
                  <ChevronDown />
                </Icon>
              </Button>
            </chakra.form>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
