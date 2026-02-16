import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Props {
  item: any;
}

const sectionStyles: Record<string, string> = {
  course: "border-blue-500 bg-blue-50 dark:bg-blue-950/30",
  phd: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
  award: "border-amber-500 bg-amber-50 dark:bg-amber-950/30",
  poster: "border-purple-500 bg-purple-50 dark:bg-purple-950/30",
  achievement: "border-rose-500 bg-rose-50 dark:bg-rose-950/30",
};

const NewsCard = ({ item }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border-l-4 p-6 shadow-lg ${sectionStyles[item.section]}`}
    >
      {/* META */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {item.date}
        </span>
        {item.place && (
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {item.place}
          </span>
        )}
      </div>

      {/* TEXT */}
      <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
      {item.subtitle && (
        <p className="mt-1 text-sm font-medium text-accent">{item.subtitle}</p>
      )}
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {item.description}
      </p>

      {/* MEDIA */}
      {item.media && (
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {item.media.map((m: any, i: number) => (
            <figure key={i}>
              {m.type === "image" ? (
                <img
                  src={m.src}
                  alt={m.alt}
                  className="rounded-xl object-cover"
                />
              ) : (
                <video
                  src={m.src}
                  controls
                  className="rounded-xl"
                />
              )}
              {m.comment && (
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  {m.comment}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* LINKS */}
      {item.links && (
        <div className="mt-5 flex flex-wrap gap-3">
          {item.links.map((l: any, i: number) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
            >
              {l.label} <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default NewsCard;
