import { Icon } from '@/components/commons/icon/icon';

export const GeneralInfo = () => {
  return (
    <div className="py-20 space-y-20">
      <section className="flex gap-5">
        <div className="flex-1 space-y-5">
          <h2>Dla pracodawców</h2>
          <p>
            Nasza agencja pracy kieruje swoją ofertę również do Pracodawców,
            którzy poszukują wykwalifikowanych pracowników. Czy potrzebujesz
            lojalnych pracowników do długotrwałych zleceń? A może zauważyłeś
            nagły wzrost zamówień i potrzebujesz dodatkowych pracowników
            natychmiast? Mamy dla Ciebie doświadczonych specjalistów!
          </p>
        </div>
        <div className="flex-1">
          <Icon name="undraw-solution" className="mx-auto w-1/2" />
        </div>
      </section>
      <section className="flex flex-row-reverse gap-5">
        <div className="flex-1 space-y-5">
          <h2>Dlaczego warto skorzystać z pomocy pośrednika?</h2>
          <div className="space-y-2.5">
            <p>
              <strong>
                Naszym priorytetem jest, aby Twój biznes mógł rozwijać się
                właściwie
              </strong>
            </p>
            <p>
              Jeśli poszukujesz informatyka, kierownika, mechatronika lub
              pracownika produkcji, to my znajdziemy go dla Ciebie!
            </p>
            <p>
              Chcemy, abyś mógł współpracować z wykwalifikowanymi specjalistami,
              z których każdy jest zdolny przynieść cenne i wartościowe
              osiągnięcia Twojemu zespołowi, co w konsekwencji podniesie Twój
              biznes na nowy, wyższy poziom. Jeśli pragniesz mieć spokojną głowę
              i pewność co do jakości swojego zespołu pracowniczego, prosimy o
              wypełnienie formularza poniżej, a my skontaktujemy się z Tobą
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Icon name="undraw-hunt" className="mx-auto w-1/2" />
        </div>
      </section>
    </div>
  );
};
