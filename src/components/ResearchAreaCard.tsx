import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ResearchAreaCardProps {
  title: string;
  description: string;
  publications?: number;
  citations?: number;
  journal?: string;
  methods?: string[];
  funding?: string;
  images?: string[];
}

const ResearchAreaCard = ({
  title,
  description,
  publications,
  citations,
  journal,
  methods,
  funding,
  images = [],
}: ResearchAreaCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border flex flex-col justify-between"
    >
      <h3 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h3>

      {images.length > 0 && (
        <div className="w-full h-40 mb-3 overflow-hidden rounded-md border border-border">
          <img
            src={images[currentImage]}
            alt={`${title} ${currentImage + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      )}

      <p className="text-muted-foreground mb-4 leading-relaxed">
        <strong>Overview:</strong> {description}
      </p>

      {journal && (
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Journal:</strong> {journal}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-2">
        {publications !== undefined && (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            <strong>Papers:</strong> {publications}
          </span>
        )}
        {citations !== undefined && (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            <strong>Citations:</strong> {citations}
          </span>
        )}
        {funding && (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            <strong>Funding:</strong> {funding}
          </span>
        )}
      </div>

      {methods && methods.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground font-medium mb-1"><strong>Methods:</strong></p>
          <ul className="list-disc list-inside text-xs text-muted-foreground">
            {methods.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default ResearchAreaCard;
