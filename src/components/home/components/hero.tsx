import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/icon/icon';

export const Hero = () => {
  const t = useTranslations('home.hero');
  return (
    <div className="h-screen">
      <div className="h-full flex justify-center -translate-y-28 flex-col-reverse md:flex-row md:items-center md:justify-between md:-translate-y-10 gap-10">
        <div className="md:flex-1 space-y-2.5 md:space-y-5">
          <h2
            data-test="hero-title"
            className="text-3xl md:text-6xl lg:text-8xl leading-tight"
          >
            {t.rich('headline', {
              span: chunks => <span className="text-accent">{chunks}</span>,
            })}
          </h2>
          <h3>{t('closer')}</h3>
          <p className="md:text-xl font-medium text-muted-foreground">
            {t.rich('description', {
              span: chunks => (
                <span className="text-accent uppercase font-extrabold">
                  {chunks}
                </span>
              ),
            })}
          </p>
        </div>
        <div className="md:flex-1">
          <Icon
            data-test="hero-image"
            name="career-progress"
            className="mx-auto w-5/6 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
