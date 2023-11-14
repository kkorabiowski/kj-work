import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { Icon } from '@/components/commons/icon/icon';

import { FooterNavGroup } from './components/footer-nav-group';
import { useFooter } from './footer.controller';

export const Footer = () => {
  const { footerLinks } = useFooter();
  const t = useTranslations('footer');
  return (
    <div className="bg-primary">
      <Container className="pt-14 pb-5">
        <footer className="h-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-2.5 pb-5">
            <div className="md:w-1/2 space-y-3">
              <h6 className="text-muted">{t('kjworkgroup')}</h6>
              <p className="text-muted-foreground md:w-3/4 text-base">
                {t('kjworkgroupDesc')}
              </p>
            </div>
            <div className="md:w-1/2 md:flex-row flex-col flex gap-10">
              <FooterNavGroup headline={t('links')} items={footerLinks.links} />
              <FooterNavGroup
                headline={t('resources')}
                items={footerLinks.resources}
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-5 border-t border-muted-foreground/20">
            <p className="text-muted-foreground text-sm">
              {t('rightsReserved')}
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
