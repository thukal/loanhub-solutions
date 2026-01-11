import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center md:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-secondary">Loan.App</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.product')}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.features')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.loanTypes')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.staffTools')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.mobileApp')}</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.company')}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.blog')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.legal')}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">{t('footer.security')}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-xs sm:text-sm">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
