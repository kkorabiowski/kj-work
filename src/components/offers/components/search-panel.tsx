import { CitySelect } from '@/components/commons/city-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const SearchPanel = () => {
  return (
    <div className="mt-5">
      <div className="mx-auto bg-blue-100 shadow-md w-full max-w-4xl px-5 md:px-10 py-5 pb-10 space-y-2">
        <h4 className="text-primary">Szukaj po nazwie stanowiska</h4>
        <div className="flex flex-col md:flex-row gap-2.5 md:items-center">
          <div className="flex-1">
            <Input placeholder="Wpisz nazwę stanowiska" />
          </div>
          <div className="md:w-56">
            <CitySelect />
          </div>
          <Button
            variant="accent"
            size="lg"
            className="mx-auto w-40 md:w-auto rounded-none"
          >
            Szukaj
          </Button>
        </div>
      </div>
    </div>
  );
};