/**
 * GalleryCard.tsx
 * =====================================================
 * Reusable card for image & video
 * ✔ Supports sound in videos
 * ✔ Comment below media
 * ✔ Lightbox on click
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  src: string;
  type: "image" | "video";
  alt: string;
  comment: string;
  date?: string;
  place?: string;
}

const GalleryCard = ({ src, type, alt, comment, date, place }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------- CARD ---------- */}
      <motion.div
        whileHover={{ y: -6 }}
        className="rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-md cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          {type === "image" ? (
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          ) : (
            <video
              src={src}
              controls
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Comment */}
        <div className="p-4 text-sm text-slate-700 dark:text-slate-300">
          {comment}
          {(date || place) && (
            <div className="mt-2 text-xs text-blue-600">
              {date && `📅 ${date}`} {place && ` | 📍 ${place}`}
            </div>
          )}
        </div>
      </motion.div>

      {/* ---------- LIGHTBOX ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>

            <div onClick={(e) => e.stopPropagation()}>
              {type === "image" ? (
                <img src={src} alt={alt} className="max-h-[80vh] rounded-xl" />
              ) : (
                <video
                  src={src}
                  controls
                  autoPlay
                  className="max-h-[80vh] rounded-xl"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCard;
