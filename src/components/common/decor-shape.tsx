import { Box, type BoxProps } from "@chakra-ui/react";
import Image from "next/image";

const decorShapes = {
  squiggleLime: { src: "/images/decor/squiggle-lime.png", width: 210, height: 290 },
  squiggleWhite: { src: "/images/decor/squiggle-white.png", width: 135, height: 130 },
  squiggleWhiteAlt: { src: "/images/decor/squiggle-white2.png", width: 190, height: 175 },
  torusWhite: { src: "/images/decor/torus-white.png", width: 250, height: 196 },
  torusLime: { src: "/images/decor/torus-lime.png", width: 250, height: 196 },
  cylinderLime: { src: "/images/decor/cylinder-lime.png", width: 172, height: 275 },
  cylinderWhite: { src: "/images/decor/cylinder-white.png", width: 170, height: 320 },
  triangleWhite: { src: "/images/decor/triangle-white.png", width: 145, height: 145 },
  triangleLime: { src: "/images/decor/triangle-lime.png", width: 140, height: 160 },
  coneWhite: { src: "/images/decor/cone-white.png", width: 120, height: 185 },
} as const;

export type DecorShapeName = keyof typeof decorShapes;

type DecorShapeProps = BoxProps & {
  shape: DecorShapeName;
  width: string;
};

export function DecorShape({ shape, width, ...rest }: DecorShapeProps) {
  const shapeAsset = decorShapes[shape];

  return (
    <Box
      position="absolute"
      w={width}
      aspectRatio={`${shapeAsset.width} / ${shapeAsset.height}`}
      pointerEvents="none"
      userSelect="none"
      aria-hidden="true"
      {...rest}
    >
      <Image src={shapeAsset.src} alt="" fill sizes={width} style={{ objectFit: "contain" }} />
    </Box>
  );
}
