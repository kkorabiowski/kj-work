export type IconNameType = (typeof iconNames)[number];

export type IconProps = {
  name: IconNameType;
  className?: string;
};

export const iconNames = [
  'career-progress',
  'coffee-break',
  'job-offers',
  'facebook',
] as const;
