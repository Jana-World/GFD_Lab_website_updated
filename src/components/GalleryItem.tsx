/**
 * GalleryItem.tsx
 * ------------------------------------------------
 * Reusable gallery card component
 * Supports:
 *  - Image
 *  - Video (with sound)
 *  - Text description (event / instrument / conference)
 *  - Different shapes & professional styling
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  date?: string;
  place?: string;
  type: "image" | "video";
}

const GalleryItem = ({
  src,
  alt,
  title,
  description,
  date,
  place,
  type,
}: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= THUMBNAIL CARD ================= */}
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all"
        onClick={() => setIsOpen(true)}
      >
        {/* ---------- MEDIA ---------- */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {type === "image" ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                src={src}
                muted={false} // 🔊 sound enabled
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <Play className="absolute inset-0 m-auto w-14 h-14 text-white bg-black/40 rounded-full p-3" />
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* ---------- TEXT CONTENT ---------- */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {description}
          </p>

          {/* Metadata */}
          {(date || place) && (
            <p className="mt-3 text-xs text-blue-600 dark:text-blue-400">
              {date && <span>📅 {date}</span>}{" "}
              {place && <span> | 📍 {place}</span>}
            </p>
          )}
        </div>
      </motion.div>

      {/* ================= LIGHTBOX VIEW ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Content */}
            <motion.div
              className="max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {type === "image" ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full max-h-[75vh] object-contain rounded-xl"
                />
              ) : (
                <video
                  src={src}
                  controls // 🔊 sound control
                  autoPlay
                  className="w-full max-h-[75vh] rounded-xl"
                />
              )}

              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm opacity-80">{description}</p>
                {(date || place) && (
                  <p className="mt-2 text-xs opacity-70">
                    {date} {place && ` | ${place}`}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryItem;
