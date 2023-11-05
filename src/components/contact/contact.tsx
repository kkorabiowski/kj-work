import { Container } from '@/components/commons/container';

import { ContactForm } from './components/contact-form/contact-form';
import { ContactInfo } from './components/contact-info/contact-info';
import { Team } from './components/team';
import { MyMap } from '../commons/google-map';

export const Contact = () => {
  return (
    <Container className="pt-10 pb-20">
      <h1 className="text-center pb-20">Kontakt</h1>
      <div className="flex flex-col md:flex-row h-full gap-10">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="space-y-2.5">
            <h3>Zapraszamy do kontaktu</h3>
            <p>
              Szukasz informacji, potrzebujesz pomocy, lub chcesz nawiązać
              współpracę? Jesteśmy tu, aby Ci pomóc! Wypełnij formularz
              kontaktowy lub skorzystaj z innych dostępnych opcji kontaktu.
            </p>
          </div>
          <ContactInfo />
          <Team />
        </div>
      </div>
      <MyMap />
    </Container>
  );
};
