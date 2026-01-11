import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-xl font-bold text-secondary">Loan.App</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.features')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.loanTypes')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.staffTools')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.mobileApp')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.blog')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">{t('footer.security')}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
