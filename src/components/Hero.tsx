import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Hero = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-10 w-36 h-36 md:w-72 md:h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      <div className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-20">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 py-4 sm:py-6 px-4 sm:px-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-secondary">Loan.App</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-muted-foreground hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#features" className="text-muted-foreground hover:text-secondary transition-colors text-sm lg:text-base">{t('nav.features')}</a>
              <a href="#loans" className="text-muted-foreground hover:text-secondary transition-colors text-sm lg:text-base">{t('nav.loanTypes')}</a>
              <a href="#staff" className="text-muted-foreground hover:text-secondary transition-colors text-sm lg:text-base">{t('nav.forStaff')}</a>
              <LanguageSelector />
              <Button variant="hero" size="sm">{t('nav.bookDemo')}</Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-lg border-t border-border/20 p-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-secondary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.features')}</a>
              <a href="#loans" className="block text-muted-foreground hover:text-secondary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.loanTypes')}</a>
              <a href="#staff" className="block text-muted-foreground hover:text-secondary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.forStaff')}</a>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Button variant="hero" size="sm" className="w-full">{t('nav.bookDemo')}</Button>
            </div>
          )}
        </nav>

        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="line-clamp-1">{t('hero.badge')}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 animate-fade-up-delay-1">
            <span className="text-primary-foreground">{t('hero.title1')} </span>
            <span className="text-gradient">{t('hero.title2')}</span>
            <br />
            <span className="text-primary-foreground">{t('hero.title3')}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up-delay-2 px-2">
            {t('hero.description')}
          </p>

          <div className="flex items-center justify-center animate-fade-up-delay-3">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              {t('nav.bookDemo')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-muted/10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">{t('hero.stat1Value')}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('hero.stat1Label')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">{t('hero.stat2Value')}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('hero.stat2Label')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">{t('hero.stat3Value')}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('hero.stat3Label')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
