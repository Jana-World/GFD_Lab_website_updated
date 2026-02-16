import { motion } from "framer-motion";
import { Calendar, Building2, Image as ImageIcon } from "lucide-react";

interface PublicationProjectCardProps {
  title: string;
  description: string;
  fundingAgency: string;
  duration: string;
  value: string;
  role: string;
  figures?: string[];
}

const PublicationProjectCard = ({
  title,
  description,
  fundingAgency,
  duration,
  value,
  role,
  figures = [],
}: PublicationProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow space-y-5"
    >
      {/* ================= Title ================= */}
      <h3 className="text-xl font-serif font-bold text-foreground">
        {title}
      </h3>

      {/* ================= Overview ================= */}
      <p className="text-muted-foreground leading-relaxed text-sm">
        <strong>Overview:</strong> {description}
      </p>

      {/* ================= Meta ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-accent" />
          <span><strong>Funding Agency:</strong> {fundingAgency}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          <span><strong>Duration:</strong> {duration}</span>
        </div>

        <div>
          <strong>Value:</strong> {value}
        </div>

        <div>
          <strong>Role:</strong> {role}
        </div>
      </div>

      {/* ================= Output Figures ================= */}
      {figures.length > 0 && (
        <div className="pt-4 border-t space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <ImageIcon className="w-4 h-4 text-accent" />
            Selected Figure Outputs
          </div>

          <div className="flex flex-wrap gap-4">
            {figures.map((fig, idx) => (
              <motion.figure
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="inline-flex flex-col items-center"
              >
                {/* ===== Academic figure container (WHITE background) ===== */}
                <div className="inline-block rounded-lg border bg-white p-2">
                  <img
                    src={fig}
                    alt={`Figure ${idx + 1}`}
                    className="max-w-[220px] w-auto h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Caption */}
                <figcaption className="mt-1 text-xs text-muted-foreground text-center">
                  Fig. {idx + 1}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PublicationProjectCard;
