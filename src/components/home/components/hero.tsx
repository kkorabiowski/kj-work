import { Icon } from '@/components/commons/icon/icon';

export const Hero = () => (
  <div className="h-screen">
    <div className="h-full flex justify-center -translate-y-28 flex-col-reverse md:flex-row md:items-center md:justify-between md:-translate-y-10 gap-10">
      <div className="md:flex-1 space-y-2.5 md:space-y-5">
        <h1>KJ WORK GROUP</h1>
        <h2 className="text-3xl md:text-8xl leading-tight">
          Do <span className="text-accent">sukcesu</span> może być dalej lub{' '}
          <span className="text-accent">bliżej</span>
        </h2>
        <h3>... a z nami jest tylko bliżej</h3>
        <p className="md:text-xl font-medium text-muted-foreground">
          Agencja pracy dla osób poszukujących pracy w Niemczech, oferująca
          zatrudnienie w oparciu o{' '}
          <span className="uppercase text-accent font-extrabold">
            niemiecką umowę
          </span>
        </p>
      </div>
      <div className="md:flex-1">
        <Icon name="career-progress" className="mx-auto w-3/4 md:w-full" />
      </div>
    </div>
  </div>
);
