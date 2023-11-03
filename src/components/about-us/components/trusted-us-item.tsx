import { LucideProps } from 'lucide-react';

type Props = {
  icon: React.FC<LucideProps>;
  companyName: string;
};

export const TrustedUsItem = ({ icon: Icon, companyName }: Props) => (
  <div className="flex items-center flex-col justify-center gap-y-2.5">
    <Icon className="text-accent-foreground/80" size={64} />
    <p className="text-accent-foreground/80">{companyName}</p>
  </div>
);
