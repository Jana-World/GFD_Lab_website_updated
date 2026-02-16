import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { newsData } from "@/data/newsData";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="News & Highlights"
          subtitle="Courses, awards, achievements, and major milestones of the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 space-y-10">
            {newsData.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
