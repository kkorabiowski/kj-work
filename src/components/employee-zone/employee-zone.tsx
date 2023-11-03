import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { Icon } from '@/components/commons/icon/icon';
import { QuoteSection } from '@/components/commons/quote-section';

import { Profits } from './components/profits/profits';
import { Recruitment } from './components/recruitment/recruitment';

const quote = `"Dobry pracownik to osoba, która potrafi efektywnie współpracować z
innymi, rozwiązywać problemy i być zaangażowana w rozwijanie swoich
umiejętności." - John C. Maxwell`;

export const EmployeeZone = () => {
  const t = useTranslations('employeeZone');

  return (
    <>
      <Container>
        <h1 className="text-center pt-10 pb-20">{t('title')}</h1>
        <QuoteSection quote={quote} />
        <div className="space-y-5 py-20">
          <section className="flex gap-2.5 items-center pt-20 pb-10">
            <div className="flex-1 space-y-2.5">
              <h2>Jesteś we właściwym miejscu</h2>
              <p>
                Cieszymy się, że tu jesteś. Szukasz pracy - pierwszej lub
                kolejnej lub może chcesz zmienić pracę na inną. Możesz mieć
                pewność, że jesteś we właściwym miejscu. Przekonasz się, że
                proces szukania lub zmiany pracy może być ciekawą przygodą,
                która zmieni Twoje życie na lepsze!
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Icon name="undraw-check" className="w-16" />
            </div>
          </section>
          <section className="flex flex-row-reverse gap-2.5 items-center pt-10 pb-10">
            <div className="flex-1 space-y-2.5">
              <h2>Lubimy Cię!</h2>
              <p>
                Pracujemy z Tobą i dla Ciebie. Chcemy Cię dobrze poznać i
                polubić, bo tylko wtedy możemy działać skutecznie. Pragniemy,
                aby na każdym etapie towarzyszyło Ci zadowolenie.
              </p>
              <strong>
                Pomożemy Ci we wszystkim i o wszystko możesz nas zapytać.
              </strong>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Icon name="smiley-face" className="w-16" />
            </div>
          </section>
        </div>
      </Container>
      <Profits />
      <Recruitment />
    </>
  );
};
