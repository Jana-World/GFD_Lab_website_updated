import { motion } from "framer-motion";
import {
  FileText,
  Megaphone,
  BookOpen,
  Handshake,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: FileText,
    title: "Recent Publications",
    /*items: ["Journal of Geophysical Research, 2024", "Physics of Fluids, 2023"],*/
    description: "Visit our recent publication.",
    link: "/publications",
    linkText: "View All",
  },
  {
    icon: Megaphone,
    title: "Latest News",
    description: "See our recent news",
    link: "/news",
    linkText: "Read More",
  },

  {
    icon: Handshake,
    title: "Collaborations",
    description: "For collaboration contact us.",
    link: "/collaborations",
    linkText: "Partners",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Meet our team members.",
    link: "/team",
    linkText: "Meet Team",
  },
  {
    icon: Settings,
    title: "Facilities",
    description:
      "High-performance computing, flow visualization, geophysical instruments.",
    link: "/facilities",
    linkText: "See Facilities",
  },
];

const HighlightsGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quick <span className="text-primary">Highlights</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Stay updated with our latest research, news, and activities
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card
                         hover:border-primary/30 hover-lift transition-all"
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5
                              bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>

              {/* CONTENT */}
              {item.items ? (
                <ul className="space-y-2 mb-4">
                  {item.items.map((text, i) => (
                    <li
                      key={i}
                      className="text-sm font-sans text-muted-foreground"
                    >
                      • {text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm font-sans mb-4 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              )}

              {/* LINK */}
              <Link
                to={item.link}
                className="inline-flex items-center text-sm font-medium
                           text-primary hover:text-accent transition-colors"
              >
                {item.linkText}
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;
