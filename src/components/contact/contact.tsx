import { Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from './contact-form/contact-form';
import { Container } from '../container';

export const Contact = () => {
  return (
    <Container className="pt-10 pb-20">
      <h1>Kontakt</h1>
      <main className="flex h-full gap-5 ">
        <div className="w-1/2">
          <ContactForm />
        </div>
        <div className="w-1/2 flex gap-5 justify-evenly">
          <section className="space-y-2.5">
            <div>
              <h3>KJ WORK GROUP</h3>
            </div>
            <div className="flex items-center gap-5">
              <MapPin />
              <div>
                <p>ul. Kowalskiego 20</p>
                <p>Poznań, 61-627</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Phone />
              <div>
                <p>+48 572 291 847</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Mail />
              <div>
                <p>biuro@adwork.com.pl</p>
              </div>
            </div>
          </section>
          <section className="space-y-2.5">
            <div>
              <h3>ZESPÓŁ</h3>
            </div>
            <div className="flex items-center gap-5">
              <MapPin />
              <div>
                <p>ul. Kowalskiego 20</p>
                <p>Poznań, 61-627</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Phone />
              <div>
                <p>+48 572 291 847</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Mail />
              <div>
                <p>biuro@adwork.com.pl</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Container>
  );
};
