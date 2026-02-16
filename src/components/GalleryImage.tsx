import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video"; // Specify type
}

const GalleryItem = ({ src, alt, caption, type }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
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
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
              />
              <Play className="absolute inset-0 m-auto w-12 h-12 text-white opacity-80 pointer-events-none" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            {caption} ({type === "image" ? "Image" : "Video"})
          </figcaption>
        </div>
      </motion.figure>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {type === "image" ? (
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={src}
                  controls
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}
              <p className="text-center text-primary-foreground mt-4">
                {caption} ({type === "image" ? "Image" : "Video"})
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryItem;
