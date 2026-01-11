import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-primary-foreground">{t('cta.title1')} </span>
            <span className="text-gradient">{t('cta.title2')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            {t('cta.description')}
          </p>

          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              {t('nav.bookDemo')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-muted/10">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:hello@loan.app" className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>hello@loan.app</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
