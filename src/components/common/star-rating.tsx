import { HStack, Icon, type StackProps } from "@chakra-ui/react";
import { Star } from "lucide-react";

type StarRatingProps = StackProps & {
  value: number;
  total?: number;
  size?: string;
  filledColor?: string;
  emptyColor?: string;
};

export function StarRating({
  value,
  total = 5,
  size = "18px",
  filledColor = "ink.950",
  emptyColor = "ink.200",
  ...rest
}: StarRatingProps) {
  return (
    <HStack gap="6px" aria-label={`${value} out of ${total} stars`} {...rest}>
      {Array.from({ length: total }, (_, index) => (
        <Icon
          key={index}
          asChild
          boxSize={size}
          color={index < Math.round(value) ? filledColor : emptyColor}
        >
          <Star fill="currentColor" strokeWidth={0} />
        </Icon>
      ))}
    </HStack>
  );
}
