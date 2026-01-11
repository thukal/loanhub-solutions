import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary-foreground">Ready to Streamline Your </span>
            <span className="text-gradient">Lending Operations?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Take control of your loan management with Loan.App. Customized to fit your business needs, from customer onboarding to daily collections.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-muted/10">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:hello@loanpro.com" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@loanpro.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
