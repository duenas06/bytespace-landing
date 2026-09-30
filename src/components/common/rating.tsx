import { HStack, Icon, Text, type StackProps } from "@chakra-ui/react";
import { Star } from "lucide-react";

type RatingProps = StackProps & {
  value: number;
  count?: number;
  starColor?: string;
};

export function Rating({ value, count, starColor = "ink.300", ...rest }: RatingProps) {
  return (
    <HStack gap="4px" align="center" {...rest}>
      <Text textStyle="label.m" color="fg">
        {value.toFixed(1)}
      </Text>
      {count === undefined ? null : (
        <Text textStyle="body.xs" color="fg.subtle">
          ({count})
        </Text>
      )}
      <Icon asChild boxSize="16px" color={starColor}>
        <Star fill="currentColor" strokeWidth={0} />
      </Icon>
    </HStack>
  );
}
