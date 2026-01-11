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
    <section id="staff" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              {t('staff.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('staff.title1')} <span className="text-gradient">{t('staff.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('staff.description')}
            </p>

            <div className="space-y-4 mb-8">
              {featureList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              {t('staff.exploreBtn')}
            </Button>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {staffFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-secondary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
