import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },

  

  {
    label: "People",
    href: "#",
    children: [
      { label: "Team", href: "/team" },
      { label: "Alumni", href: "/alumni" },
      { label: "Collaborations", href: "/collaborations" },
    ],
  },
  {
    label: "Work",
    href: "#",
    children: [
      { label: "Research", href: "/research" },
      { label: "Projects", href: "/projects" },
      { label: "Publications", href: "/publications" },
      { label: "Facilities", href: "/facilities" },
    ],
  },
  {
    label: "Media",
    href: "#",
    children: [
      { label: "News", href: "/news" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50
      bg-white/85 backdrop-blur-md border-b border-border shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ===== LOGOS + TITLE ===== */}
          <Link to="/" className="flex items-center gap-4">

            {/* BOTH LOGOS IN ONE LINE */}
            <div className="flex items-center gap-3">
              <img
                src="/favicon.ico"
                alt="GFDL Logo"
                className="h-12 w-15 object-contain"
              />
              {/* <img
                src="/iit-ism-logo_1.png"
                alt="IIT ISM Dhanbad Logo"
                className="h-10 object-contain"
              /> */}
            </div>

            {/* TEXT BLOCK */}
            <div className="leading-tight">
              <h1 className="font-serif text-lg sm:text-2xl font-bold text-primary">
                Geophysical Fluid Dynamics Laboratory
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Indian Institute of Technology (ISM), Dhanbad
              </p>
            </div>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <span className="flex items-center px-4 py-2 text-sm font-medium
                    text-foreground hover:text-primary cursor-pointer">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-52
                        bg-white rounded-lg shadow-lg border border-border"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isActive(child.href)
                              ? "bg-secondary text-primary"
                              : "hover:bg-secondary hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  <span className="block px-4 py-2 font-medium">
                    {item.label}
                  </span>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground
                            hover:text-primary hover:bg-secondary rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
