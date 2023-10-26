import { Icon } from '../commons/icon/icon';
import { Container } from '../container';

export const Footer = () => {
  return (
    <div className="bg-primary">
      <Container className="pt-10 pb-5">
        <footer className="h-full">
          <div className="flex gap-2.5 pb-5">
            <div className="w-1/2">
              <p className="text-muted">LOGO</p>
              <p className="text-muted-foreground w-3/4 text-base">
                Nasza agencja pracy to brama do niemieckiego rynku pracy.
                Oferujemy różnorodne stanowiska w Niemczech, zapewniając
                wsparcie w procesie rekrutacji i integracji za granicą. Pomagamy
                zdobyć cenne doświadczenie zawodowe w dynamicznym środowisku
                niemieckim.
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-muted">Przydatne linki</p>
              <p className="text-muted-foreground">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-5 border-t border-muted-foreground/20">
            <p className="text-muted-foreground text-sm">
              2023 © KJ Work Group, wszystkie prawa zastrzeżone
            </p>
            <div className="text-muted-foreground">
              <div className="rounded-full bg-muted-foreground/20 h-10 w-10 flex items-center justify-center cursor-pointer">
                <Icon name="facebook" className="fill-primary" />
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};
