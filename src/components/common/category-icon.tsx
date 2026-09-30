import { Icon, type IconProps } from "@chakra-ui/react";
import { Building2, Camera, Code2, Laptop, PenTool, Radio, type LucideIcon } from "lucide-react";

import type { Category } from "@/types/content";

const iconMap: Record<Category["icon"], LucideIcon> = {
  design: PenTool,
  development: Code2,
  software: Laptop,
  business: Building2,
  marketing: Radio,
  photography: Camera,
};

type CategoryIconProps = IconProps & {
  name: Category["icon"];
};

export function CategoryIcon({ name, ...rest }: CategoryIconProps) {
  const Glyph = iconMap[name];

  return (
    <Icon asChild {...rest}>
      <Glyph strokeWidth={2} />
    </Icon>
  );
}
