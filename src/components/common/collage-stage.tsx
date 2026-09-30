import { Box, type BoxProps } from "@chakra-ui/react";

const scaleByBreakpoint = {
  base: 0.56,
  sm: 0.72,
  md: 0.82,
  lg: 0.76,
  xl: 0.86,
  "2xl": 1,
} as const;

type CollageStageProps = BoxProps & {
  stageWidth: number;
  stageHeight: number;
};

export function CollageStage({ stageWidth, stageHeight, children, ...rest }: CollageStageProps) {
  const heights = Object.fromEntries(
    Object.entries(scaleByBreakpoint).map(([breakpoint, scale]) => [
      breakpoint,
      `${Math.round(stageHeight * scale)}px`,
    ]),
  );

  const transforms = Object.fromEntries(
    Object.entries(scaleByBreakpoint).map(([breakpoint, scale]) => [breakpoint, `scale(${scale})`]),
  );

  return (
    <Box position="relative" w="full" h={heights} display="flex" justifyContent="center" {...rest}>
      <Box
        position="relative"
        w={`${stageWidth}px`}
        h={`${stageHeight}px`}
        flexShrink={0}
        transform={transforms}
        transformOrigin="top center"
      >
        {children}
      </Box>
    </Box>
  );
}
