import { Icon } from '@/components/commons/icon/icon';

export const Hero = () => (
  <div className="h-screen">
    <div className="h-full flex items-center justify-between -translate-y-10 gap-10">
      <div className="w-1/2 space-y-5">
        <h1>KJ WORK GROUP</h1>
        <h2 className="text-8xl leading-tight">
          Do <span className="text-accent">sukcesu</span> może być dalej lub{' '}
          <span className="text-accent">bliżej</span>
        </h2>
        <h3>... a z nami jest tylko bliżej</h3>
        <p className="text-xl font-medium text-muted-foreground">
          Agencja pracy dla osób poszukujących pracy w Niemczech, oferująca
          zatrudnienie w oparciu o{' '}
          <span className="uppercase text-accent font-extrabold">
            niemiecką umowę
          </span>
        </p>
      </div>
      <div className="w-1/2">
        <Icon name="career-progress" className="w-full" />
      </div>
    </div>
  </div>
);
