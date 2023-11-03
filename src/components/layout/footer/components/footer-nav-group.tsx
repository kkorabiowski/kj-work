import { NavItem } from '@/components/layout/navigation/components/nav-item';

type Props = {
  headline: string;
  items: {
    label: string;
    href: string;
  }[];
};

export const FooterNavGroup = ({ headline, items }: Props) => (
  <div className="flex-1 space-y-3">
    <h6 className="text-muted">{headline}</h6>
    {items.map(({ href, label }) => (
      <NavItem key={label} label={label} href={href} isFooter />
    ))}
  </div>
);
