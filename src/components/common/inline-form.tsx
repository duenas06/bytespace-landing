"use client";

import { Box, Icon, chakra, type HTMLChakraProps } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button, TextInput } from "@/components/ui";

type InlineFormProps = Omit<HTMLChakraProps<"form">, "onSubmit"> & {
  name: string;
  placeholder: string;
  ctaLabel: string;
  type?: "text" | "email";
  withIcon?: boolean;
  inputMaxW?: HTMLChakraProps<"form">["maxW"];
  onSubmitValue?: (value: string) => void;
};

export function InlineForm({
  name,
  placeholder,
  ctaLabel,
  type = "text",
  withIcon = false,
  inputMaxW = "460px",
  onSubmitValue,
  ...rest
}: InlineFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitValue?.(value);
  }

  return (
    <chakra.form
      onSubmit={handleSubmit}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      alignItems={{ base: "stretch", sm: "center" }}
      gap="16px"
      w="full"
      {...rest}
    >
      <Box position="relative" flex="1" maxW={{ base: "full", sm: inputMaxW }}>
        {withIcon ? (
          <Icon
            as={Search}
            boxSize="20px"
            color="fg.subtle"
            position="absolute"
            left="24px"
            top="50%"
            transform="translateY(-50%)"
            pointerEvents="none"
          />
        ) : null}
        <TextInput
          name={name}
          type={type}
          shape="pill"
          scale="lg"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          w="full"
          pl={withIcon ? "56px" : undefined}
        />
      </Box>
      <Button type="submit" scale="md" visual="accent">
        {ctaLabel}
      </Button>
    </chakra.form>
  );
}
