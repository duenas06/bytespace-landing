import { Heading, Stack, Text, type StackProps } from "@chakra-ui/react";

type SectionHeadingProps = Omit<StackProps, "title"> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "start" | "center";
  tone?: "default" | "inverted";
  maxDescriptionWidth?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "default",
  maxDescriptionWidth = "912px",
  ...rest
}: SectionHeadingProps) {
  const inverted = tone === "inverted";

  return (
    <Stack
      gap={{ base: "16px", md: "24px" }}
      align={align === "center" ? "center" : "flex-start"}
      textAlign={align === "center" ? "center" : "start"}
      {...rest}
    >
      <Heading as="h2" textStyle="heading.m" color={inverted ? "fg.inverted" : "fg"}>
        {title}
      </Heading>
      {description ? (
        <Text
          textStyle="body.l"
          color={inverted ? "whiteAlpha.900" : "fg.muted"}
          maxW={maxDescriptionWidth}
        >
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}
