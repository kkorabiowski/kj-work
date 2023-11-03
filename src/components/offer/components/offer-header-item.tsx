import { LucideProps } from 'lucide-react';

type Props = {
  name: string;
  category: string;
  icon: React.FC<LucideProps>;
};

export const OfferHeaderItem = ({ category, icon: Icon, name }: Props) => {
  return (
    <div className="p-5 bg-primary rounded-md flex items-center gap-2.5 justify-center">
      <Icon size={32} className="inline-block text-primary-foreground" />
      <div>
        <p className="text-primary-foreground/60">{name}</p>
        <p className="text-primary-foreground">{category}</p>
      </div>
    </div>
  );
};
