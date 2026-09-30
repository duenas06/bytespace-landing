import { HStack, Icon, Stack, Text, type StackProps } from "@chakra-ui/react";
import { CircleCheck } from "lucide-react";

type CheckListProps = StackProps & {
  items: string[];
  itemTextStyle?: string;
  iconSize?: string;
};

export function CheckList({
  items,
  itemTextStyle = "body.l",
  iconSize = "22px",
  ...rest
}: CheckListProps) {
  return (
    <Stack gap="16px" {...rest}>
      {items.map((item) => (
        <HStack key={item} gap="12px">
          <Icon asChild boxSize={iconSize} color="brand.800" flexShrink={0}>
            <CircleCheck fill="currentColor" stroke="white" strokeWidth={2} />
          </Icon>
          <Text textStyle={itemTextStyle}>{item}</Text>
        </HStack>
      ))}
    </Stack>
  );
}
