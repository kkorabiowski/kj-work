import { Icon } from '@/components/commons/icon/icon';

export const WhoAreWe = () => {
  return (
    <section className="flex items-center gap-5 py-20">
      <div className="flex-1 space-y-5">
        <h2>Kim jesteśmy?</h2>
        <h5>
          Jesteśmy młodą, ambitną firmą. Spośród innych agencji pośrednictwa
          pracy tymczasowej wyróżnia nas świeże spojrzenie. Jesteśmy nastawieni
          w 100% na skuteczność. Korzystają z niej firmy z różnych branż,
          działających lokalnie i globalnie.
        </h5>
      </div>
      <div className="flex-1 flex justify-center">
        <Icon className="w-4/6" name="world-analytics" />
      </div>
    </section>
  );
};
