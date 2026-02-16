import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CollaborationCard from "@/components/CollaborationCard";

/* ================= Collaborator Assets ================= */
// Academic / International
import binodPhoto from "@/assets/collaborators/binod.jpg";
import piyushPhoto from "@/assets/collaborators/piyush.jpg";
import hagayPhoto from "@/assets/collaborators/hagay.png";
import ingoPhoto from "@/assets/collaborators/binod-sreenivasan.jpg";

// Logos
import iiscLogo from "@/assets/logos/iisc.jpg";
import rgiptLogo from "@/assets/logos/rgipt.jpg";
import nantesLogo from "@/assets/logos/nantes.jpg";
import strasbourgLogo from "@/assets/logos/strasbourg.jpg";


const Collaborations = () => {
  const academicCollaborations = [
    {
      name: "Prof. Binod Sreenivasan",
      photo: binodPhoto,
      institution: "Centre for Earth Science, IISc",
      logo: iiscLogo,
      country: "India",
      website: "https://ceas.iisc.ac.in/~bsreeni/profile.html",
      type: "Academic",
    },
    {
      name: "Dr. Piyush Sarkar",
      photo: piyushPhoto,
      institution: "Rajiv Gandhi Institute of Petroleum Technology",
      logo: rgiptLogo,
      country: "India",
      website: "https://www.rgipt.ac.in/faculty/Faculty/FacultyProfile?Sid=vGoXQFiKZjw%3D",
      type: "Academic",
    },
  ];

  const internationalCollaborations = [
    {
      name: "Dr. Hagay Amit",
      photo: hagayPhoto,
      institution: "Université de Nantes",
      logo: nantesLogo,
      country: "France",
      website: "https://loop.frontiersin.org/people/245503/overview",
      type: "International",
    },
    {
      name: "Dr. Ingo Wardinski",
      photo: ingoPhoto,
      institution: "University of Strasbourg / EOST",
      logo: strasbourgLogo,
      country: "France",
      website: "https://scholar.google.de/citations?user=02h4PbAAAAAJ&hl=de",
      type: "International",
    },
  ];

  const industryCollaborations = [
    ,
  ];

  // Helper to render a section
  const renderSection = (title: string, collaborators: typeof academicCollaborations) => (
    <div>
      <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collaborators.map((collab, index) => (
          <CollaborationCard key={index} {...collab} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="Collaborations"
          subtitle="Academic, Industry, and International Research Partnerships"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {renderSection("Academic Institutions", academicCollaborations)}
            {renderSection("Industry & Research Organizations", industryCollaborations)}
            {renderSection("International Collaborations", internationalCollaborations)}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collaborations;
