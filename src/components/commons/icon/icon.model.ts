export type IconNameType = (typeof iconNames)[number];

export type IconProps = {
  name: IconNameType;
  className?: string;
};

export const iconNames = [
  'career-progress',
  'breadcrumbs-arrow',
  'users-per-minute',
  'world-analytics',
  'facebook',
  'poland',
  'germany',
  'uk',
  'undraw-check',
  'smiley-face',
  'contact-us',
  'envelope',
  'undraw-solution',
  'undraw-hunt',
] as const;
