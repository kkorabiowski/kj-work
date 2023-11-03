import { Quote } from 'lucide-react';

type Props = {
  quote: string;
};

export const QuoteSection = ({ quote }: Props) => (
  <div className="border relative w-full border-border rounded-lg md:w-2/3 mx-auto px-5 py-10 md:p-10">
    <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 bg-background">
      <Quote size={48} className="text-muted-foreground" />
    </div>
    <h3 className="text-center text-primary">{quote}</h3>
  </div>
);
