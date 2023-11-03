import { Container } from '@/components/commons/container';
import { Icon } from '@/components/commons/icon/icon';

import { ContactLayoutForm } from './components/contact-layout-form';

export const ContactSection = () => (
  <div className="py-20 bg-slate-200">
    <Container>
      <section className="grid grid-cols-2 gap-10">
        <div className="space-y-2.5">
          <h1 className="text-center">Masz pytanie?</h1>
          <h2 className="text-center">
            Wypełnij formularz, a nasz zespół odezwie się do Ciebie
          </h2>
          <div className="flex justify-center items-center pt-10">
            <Icon name="envelope" className="w-44" />
          </div>
        </div>
        <ContactLayoutForm />
      </section>
    </Container>
  </div>
);
