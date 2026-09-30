import { Box, type BoxProps } from "@chakra-ui/react";

type GridBackdropProps = BoxProps & {
  cell?: string;
};

export function GridBackdrop({ cell = "120px", ...rest }: GridBackdropProps) {
  return (
    <Box
      position="absolute"
      inset="0"
      pointerEvents="none"
      backgroundImage="linear-gradient(to right, {colors.grid.line} 1px, transparent 1px), linear-gradient(to bottom, {colors.grid.line} 1px, transparent 1px)"
      backgroundSize={`${cell} ${cell}`}
      backgroundPosition="center top"
      {...rest}
    />
  );
}
