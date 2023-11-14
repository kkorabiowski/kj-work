import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { RecruitmentStep } from '@/components/employee-zone/components/recruitment/components/recruitment-step';

export const EmploymentProcess = () => {
  const t = useTranslations('employerZone.process');

  const steps = [
    {
      step_number: 1,
      headline: t('step1.headline'),
      description: t('step1.description'),
    },
    {
      step_number: 2,
      headline: t('step2.headline'),
      description: t('step2.description'),
    },
    {
      step_number: 3,
      headline: t('step3.headline'),
      description: t('step3.description'),
    },
    {
      step_number: 4,
      headline: t('step4.headline'),
      description: t('step4.description'),
    },
  ];

  return (
    <section>
      <div className="bg-accent py-16">
        <Container>
          <h1 className="text-accent-foreground text-center">
            {t('headline')}
          </h1>
        </Container>
      </div>
      <Container className="py-20 space-y-14">
        {steps.map(step => (
          <RecruitmentStep key={step.step_number} {...step} />
        ))}
      </Container>
    </section>
  );
};
