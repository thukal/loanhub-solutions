import { 
  UserPlus, 
  Receipt, 
  MapPin, 
  BarChart3, 
  Clock, 
  Wallet,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const StaffSection = () => {
  const { t } = useTranslation();

  const staffFeatures = [
    {
      icon: UserPlus,
      title: t('staff.createLoans.title'),
      description: t('staff.createLoans.description'),
    },
    {
      icon: Receipt,
      title: t('staff.expenseTracking.title'),
      description: t('staff.expenseTracking.description'),
    },
    {
      icon: MapPin,
      title: t('staff.routeOptimization.title'),
      description: t('staff.routeOptimization.description'),
    },
    {
      icon: BarChart3,
      title: t('staff.performanceDashboard.title'),
      description: t('staff.performanceDashboard.description'),
    },
    {
      icon: Clock,
      title: t('staff.attendanceTime.title'),
      description: t('staff.attendanceTime.description'),
    },
    {
      icon: Wallet,
      title: t('staff.commissionManagement.title'),
      description: t('staff.commissionManagement.description'),
    },
  ];

  const featureList = [
    t('staff.feature1'),
    t('staff.feature2'),
    t('staff.feature3'),
    t('staff.feature4'),
    t('staff.feature5'),
  ];

  return (
    <section id="staff" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              {t('staff.badge')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {t('staff.title1')} <span className="text-gradient">{t('staff.title2')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
              {t('staff.description')}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {featureList.map((item) => (
                <div key={item} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="default" className="w-full sm:w-auto">
              {t('staff.exploreBtn')}
            </Button>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {staffFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-card border border-border/50 hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-primary flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
