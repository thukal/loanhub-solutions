import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-xl font-bold text-secondary">Loan.App</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Complete loan management solution for modern financial institutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Loan.App. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
