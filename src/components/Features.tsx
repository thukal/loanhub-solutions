import { 
  Users, 
  Calendar, 
  CalendarDays, 
  Landmark, 
  Gem, 
  CalendarRange,
  Route
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t('features.customerManagement.title'),
      description: t('features.customerManagement.description'),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: t('features.dailyLoan.title'),
      description: t('features.dailyLoan.description'),
      color: "from-emerald-500 to-teal-500",
      badge: t('features.routeTracking'),
    },
    {
      icon: CalendarDays,
      title: t('features.weeklyLoan.title'),
      description: t('features.weeklyLoan.description'),
      color: "from-orange-500 to-amber-500",
      badge: t('features.routeTracking'),
    },
    {
      icon: Landmark,
      title: t('features.emiLoan.title'),
      description: t('features.emiLoan.description'),
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Gem,
      title: t('features.goldLoan.title'),
      description: t('features.goldLoan.description'),
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: CalendarRange,
      title: t('features.monthlyLoan.title'),
      description: t('features.monthlyLoan.description'),
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section id="loans" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            {t('features.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('features.title1')} <span className="text-gradient">{t('features.title2')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.badge && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-secondary/10 text-secondary text-[10px] sm:text-xs font-medium">
                  <Route className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  {feature.badge}
                </div>
              )}
              
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} p-2 sm:p-3 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-card" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
