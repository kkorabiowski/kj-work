import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';

import { RecruitmentStep } from './components/recruitment-step';
import { useRecruitment } from './recruitment.controller';

export const Recruitment = () => {
  const t = useTranslations('employeeZone.recruitment');
  const { steps } = useRecruitment();
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
