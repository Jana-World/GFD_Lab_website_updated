import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Research", to: "/research" },
  { label: "Publications", to: "/publications" },
  { label: "Facilities", to: "/facilities" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Lab Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Geophysical Fluid Dynamics Laboratory
            </h3>
            <div className="space-y-3 font-sans text-sm text-primary-foreground/70">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" />
                <span>
                  Ground Floor, Annex Building, Dept. of Applied Geophysics
                  <br />
                  IIT (ISM) Dhanbad, Jharkhand 826004
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:geophysicalfd.lab@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  geophysicalfd.lab@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>+91 326 223 5000</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-primary-foreground/70 hover:text-gold transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Connect With Us
            </h4>
            <p className="font-sans text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Interested in our research? We welcome collaborations with academia
              and industry partners worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-gold text-accent-foreground font-medium rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-sm text-primary-foreground/50">
              © 2026 GFD Laboratory, IIT (ISM) Dhanbad. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="font-sans text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="font-sans text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Attribution */}
          <p className="text-xs text-primary-foreground/40 mt-4 text-center">
            Images and content used on this website are for academic and
            educational purposes. Credits belong to respective sources.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
