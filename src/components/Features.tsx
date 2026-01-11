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
    <section id="loans" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            {t('features.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t('features.title1')} <span className="text-gradient">{t('features.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-secondary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.badge && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                  <Route className="w-3 h-3" />
                  {feature.badge}
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-card" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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
