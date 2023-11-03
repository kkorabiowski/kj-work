import { Icon } from '@/components/commons/icon/icon';

export const Specialization = () => {
  return (
    <section className="flex flex-row-reverse items-center gap-5 py-20">
      <div className="flex-1 space-y-5">
        <h2>W czym się specjalizujemy?</h2>
        <div>
          <h4>Praca tymczasowa</h4>
          <p>
            Wyszukujemy pracowników do pracy tymczasowej. Znajdujemy dokładnie
            takich ludzi, jakich potrzebujesz. Zawsze na czas.
          </p>
        </div>
        <div>
          <h4>Praca dopasowana do Twoich potrzeb</h4>
          <p>
            Doskonale znamy rynek. Wiemy, jak dobrać dla Ciebie pracodawcę, u
            którego będzie Ci najlepiej!
          </p>
        </div>
        <div>
          <h4>Stanowiska menedżerskie</h4>
          <p>
            Prowadzimy rekrutacje na stanowiska kierownicze (dyrektorzy,
            management), które wymagają specjalistycznych kompetencji i
            umiejętności. Znajdujemy osoby niezwykle skuteczne w tym, co robią.
            Osoby, godne zaufania, którym można przekazać odpowiedzialność za
            firmę.
          </p>
        </div>
        <div>
          <h4>Optymalne ścieżki kariery</h4>
          <p>
            Pomożemy Ci wejść na ścieżkę kariery, która szybciej doprowadzi Cię
            do upragnionego celu. Będzie to też przyjemniejsza podróż, a na
            pewno bardziej do Ciebie dopasowana. Zdziwisz się, jak bardzo
            wpłynie to na Twoje życie!
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Icon className="w-4/6" name="users-per-minute" />
      </div>
    </section>
  );
};
