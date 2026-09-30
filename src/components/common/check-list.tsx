import { HStack, Icon, Stack, Text, type StackProps } from "@chakra-ui/react";
import { CircleCheck } from "lucide-react";

type CheckListProps = StackProps & {
  items: string[];
};

export function CheckList({ items, ...rest }: CheckListProps) {
  return (
    <Stack gap="16px" {...rest}>
      {items.map((item) => (
        <HStack key={item} gap="12px">
          <Icon asChild boxSize="22px" color="brand.800">
            <CircleCheck fill="currentColor" stroke="white" strokeWidth={2} />
          </Icon>
          <Text textStyle="body.l">{item}</Text>
        </HStack>
      ))}
    </Stack>
  );
}
