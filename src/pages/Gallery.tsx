/**
 * Gallery.tsx
 * =====================================================
 * Academic section-based gallery page
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/GalleryCard";
import { gallerySections } from "@/data/galleryData";

const themeStyles = {
  instrument: "bg-blue-50 dark:bg-blue-950 rounded-3xl",
  event: "bg-orange-50 dark:bg-orange-950 rounded-[2.5rem]",
  conference: "bg-emerald-50 dark:bg-emerald-950 rounded-3xl",
};

const Gallery = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-24">
        {gallerySections.map((section) => (
          <section
            key={section.id}
            className={`mb-24 p-10 ${themeStyles[section.theme]}`}
          >
            {/* Section Heading */}
            <h2 className="text-3xl font-semibold mb-2">
              {section.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-10">
              {section.subtitle}
            </p>

            {/* Media Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, idx) => (
                <GalleryCard key={idx} {...item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
