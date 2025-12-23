import { 
  Users, 
  Calendar, 
  CalendarDays, 
  Landmark, 
  Gem, 
  CalendarRange,
  MapPin,
  Route
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Customer Management",
    description: "Complete customer profiles with KYC documents, contact history, and loan records. Easily search, filter, and manage your entire customer base.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Daily Loan Management",
    description: "Handle daily collection loans with precision. Built-in route tracking ensures your staff visits every customer efficiently.",
    color: "from-emerald-500 to-teal-500",
    badge: "Route Tracking",
  },
  {
    icon: CalendarDays,
    title: "Weekly Loan Management",
    description: "Manage weekly repayment schedules with automated reminders and route optimization for field agents.",
    color: "from-orange-500 to-amber-500",
    badge: "Route Tracking",
  },
  {
    icon: Landmark,
    title: "EMI Based Loans",
    description: "Calculate EMI schedules, track payments, and manage long-term loans with comprehensive amortization tables.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Gem,
    title: "Gold Loan Management",
    description: "Specialized module for gold loans with item valuation, secure storage tracking, and release management.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: CalendarRange,
    title: "Monthly Loan Management",
    description: "Handle monthly installment loans with flexible terms, interest calculations, and payment scheduling.",
    color: "from-rose-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section id="loans" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Loan Types
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Manage All Your <span className="text-gradient">Loan Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From daily collections to gold loans, handle all your lending products with specialized tools designed for each loan type.
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
