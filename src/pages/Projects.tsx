import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Inspire Faculty Grant",
      fundingAgency: "DST, India",
      /*duration: "2023 – 2026",*/
      /*value: "Rs. 35,00,000/-",*/
      role: "Principal Investigator (PI)",
      description: "This project supports cutting-edge research under the Inspire Faculty scheme by DST, India.",
    },
    {
      title: "Faculty Research Scheme",
      fundingAgency: "IIT(ISM) Dhanbad",
      /*duration: "2024 – 2027",
      value: "Rs. 10,00,000/-",*/
      role: "Principal Investigator (PI)",
      description: "Research project funded by IIT(ISM) Dhanbad for advancing geophysical fluid dynamics studies.",
    },
    {
      title: "Lab Development Grant",
      fundingAgency: "IIT(ISM) Dhanbad",
      /*duration: "2022 – 2025",
      value: "Rs. 20,00,000/-",*/
      role: "Principal Investigator (PI)",
      description: "Grant to support laboratory development for high-resolution experimental setups in fluid dynamics.",
    },
    {
      title: "Start-Up Research Grant",
      fundingAgency: "SERB, India",
      /*duration: "2023 – 2026",
      value: "Rs. 26,00,200/-",*/
      role: "Principal Investigator (PI)",
      description: "Start-up grant by SERB to initiate innovative research in geophysical and planetary fluid dynamics.",
    },
    {
      title: "National Geospatial Programme Grant",
      fundingAgency: "Government of India",
      /*duration: "2023 – 2026",
      value: "Rs. 26,62,461/-",*/
      role: "Principal Investigator (PI)",
      description: "Research on geospatial modeling and subsurface processes supported by the National Geospatial Programme.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="Projects"
          subtitle="Sponsored and collaborative research projects undertaken by the Geophysical Fluid Dynamics Laboratory."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Ongoing & Sponsored Projects
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {ongoingProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
