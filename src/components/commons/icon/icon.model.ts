export type IconNameType = (typeof iconNames)[number];

export type IconProps = {
  name: IconNameType;
  className?: string;
};

export const iconNames = ['facebook'] as const;
