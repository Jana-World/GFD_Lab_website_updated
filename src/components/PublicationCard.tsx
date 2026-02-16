import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PublicationCardProps {
  type: "journal" | "editorial" | "conference";
  title: string;
  link?: string;
  authors?: string;
  journal?: string;
  conference?: string;
  editors?: string;
  publisher?: string;
  year?: string;
  date?: string;
  keywords?: string[];
  overview?: string;
  image?: string;              // Journal thumbnail
  outputImages?: string[];     // ✅ MULTIPLE output images
}

const PublicationCard = (props: PublicationCardProps) => {
  const [current, setCurrent] = useState(0);

  // ===== Auto slide effect =====
  useEffect(() => {
    if (!props.outputImages || props.outputImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === props.outputImages!.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [props.outputImages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
    >
      {/* ================= TOP SECTION ================= */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Journal image */}
        {props.image && (
          <div className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border border-border">
            <img
              src={props.image}
              alt={props.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 space-y-2">
          {/* Title */}
          <h3 className="text-xl font-serif font-bold text-foreground hover:text-accent transition-colors">
            {props.link ? (
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
              </a>
            ) : (
              props.title
            )}
          </h3>

          {props.authors && (
            <p className="text-sm text-muted-foreground">
              <strong>Authors:</strong> {props.authors}
            </p>
          )}
          {props.journal && (
            <p className="text-sm text-muted-foreground">
              <strong>Journal:</strong> {props.journal}
            </p>
          )}
          {props.conference && (
            <p className="text-sm text-muted-foreground">
              <strong>Conference:</strong> {props.conference}
            </p>
          )}
          {props.editors && (
            <p className="text-sm text-muted-foreground">
              <strong>Editors:</strong> {props.editors}
            </p>
          )}
          {props.publisher && (
            <p className="text-sm text-muted-foreground">
              <strong>Publisher:</strong> {props.publisher}
            </p>
          )}
          {props.year && (
            <p className="text-sm text-muted-foreground">
              <strong>Year:</strong> {props.year}
            </p>
          )}
          {props.date && (
            <p className="text-sm text-muted-foreground">
              <strong>Date:</strong> {props.date}
            </p>
          )}

          {/* Keywords */}
          {props.keywords && props.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {props.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      {props.overview && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Overview:</strong> {props.overview}
          </p>

          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm font-semibold text-accent hover:underline"
            >
              → View Full Paper
            </a>
          )}
        </div>
      )}

      {/* ================= OUTPUT FIGURE (FULL WIDTH) ================= */}
      {props.outputImages && props.outputImages.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-muted-foreground mb-2">
            Output Figure
          </p>

          <div className="relative w-full h-[260px] sm:h-[320px] rounded-xl overflow-hidden border border-border bg-muted">
            <img
              src={props.outputImages[current]}
              alt="Output figure"
              className="object-contain w-full h-full transition-all duration-500"
            />
          </div>

          {/* Dots */}
          {props.outputImages.length > 1 && (
            <div className="flex justify-center gap-2 mt-2">
              {props.outputImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === current ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PublicationCard;
