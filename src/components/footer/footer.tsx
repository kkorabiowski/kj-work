import { footerLinks } from '@/lib/constants';

import { FooterNavGroup } from './components/footer-nav-group';
import { Icon } from '../commons/icon/icon';
import { Container } from '../container';

export const Footer = () => {
  return (
    <div className="bg-primary">
      <Container className="pt-14 pb-5">
        <footer className="h-full">
          <div className="flex gap-2.5 pb-5">
            <div className="w-1/2 space-y-3">
              <h6 className="text-muted">Logo</h6>
              <p className="text-muted-foreground w-3/4 text-base">
                Nasza agencja pracy to brama do niemieckiego rynku pracy.
                Oferujemy różnorodne stanowiska w Niemczech, zapewniając
                wsparcie w procesie rekrutacji i integracji za granicą. Pomagamy
                zdobyć cenne doświadczenie zawodowe w dynamicznym środowisku
                niemieckim.
              </p>
            </div>
            <div className="w-1/2 flex gap-10">
              <FooterNavGroup headline="Linki" items={footerLinks.links} />
              <FooterNavGroup headline="Zasoby" items={footerLinks.resources} />
            </div>
          </div>
          <div className="flex justify-between items-center py-5 border-t border-muted-foreground/20">
            <p className="text-muted-foreground text-sm">
              2023 © KJ Work Group, wszystkie prawa zastrzeżone
            </p>
            <div className="text-muted-foreground">
              <div className="rounded-full bg-muted-foreground/20 h-10 w-10 flex items-center justify-center cursor-pointer">
                <Icon
                  name="facebook"
                  className="hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};
