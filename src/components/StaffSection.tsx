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

const staffFeatures = [
  {
    icon: UserPlus,
    title: "Create & Manage Loans",
    description: "Staff can easily create new loans, update existing ones, and manage the complete loan lifecycle.",
  },
  {
    icon: Receipt,
    title: "Expense Tracking",
    description: "Track daily expenses, travel costs, and reimbursements with receipt uploads and approval workflows.",
  },
  {
    icon: MapPin,
    title: "Route Optimization",
    description: "Intelligent route planning for daily and weekly collections to maximize efficiency.",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    description: "Real-time metrics on collections, targets, and performance for staff and managers.",
  },
  {
    icon: Clock,
    title: "Attendance & Time",
    description: "Track staff attendance, field visits, and time spent with comprehensive reports.",
  },
  {
    icon: Wallet,
    title: "Commission Management",
    description: "Automated commission calculations based on collections and new customer acquisition.",
  },
];

const StaffSection = () => {
  return (
    <section id="staff" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              For Your Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Empower Your <span className="text-gradient">Staff</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Give your team the tools they need to manage customers, track expenses, and achieve targets efficiently. Everything they need, right at their fingertips.
            </p>

            <div className="space-y-4 mb-8">
              {["Mobile app for field agents", "Real-time sync & offline support", "Role-based access control"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Explore Staff Features
            </Button>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {staffFeatures.map((feature, index) => (
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
