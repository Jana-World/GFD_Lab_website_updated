import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TeamCard from "@/components/TeamCard";
 /* ================= team photo ================= */
 import defaultImg from "@/assets/team/default.jpg";
import swarandeepImg from "@/assets/team/swarandeep.jpg";

import abhayImg from "@/assets/team/abhay.jpg";
import tirtharajImg from "@/assets/team/tirtharaj.jpg";
import debopamImg from "@/assets/team/debopam.jpeg";
import susilImg from "@/assets/team/susil.png";
import arpanImg from "@/assets/team/arpan.jpeg";
import amritImg from "@/assets/team/amrit.png";

import parthaImg from "@/assets/team/partha.jpg";
import amanImg from "@/assets/team/aman.jpg";
import abuImg from "@/assets/team/abu.png";
import sanjanaImg from "@/assets/team/sanjana.png";
import surajImg from "@/assets/team/suraj.jpg";
import rachnaImg from "@/assets/team/rachana.jpg";



 /* ================= FACULTY ================= */
const Team = () => {

  /* ================= FACULTY ================= */
  const faculty = [
    {
      name: "Dr. Swarandeep Sahoo",
      position: "Principal Investigator",
      topic: "Geophysical Fluid Dynamics, Planetary & Porous Media Flows",
      bio: "Leads the Geophysical Fluid Dynamics Laboratory with research spanning planetary dynamos, rotating convection, porous media flows, and physics-informed modeling of geophysical systems.",
      email: "swarandeep@iitism.ac.in",
      website: "https://www.iitism.ac.in/faculty-details?faculty=swarandeep",
      image: swarandeepImg,
    },
  ];

  /* ================= PhD SCHOLARS ================= */
  const phdScholars = [
    {
      name: "Abhay Shukla",
      position: "PhD Scholar",
      topic:
        "Fluid Flow in Porous Media",
      Website: "",
      image: abhayImg,
      email: "",
      bio:"Worked on porous media flow and reservoir characterization.",    
    },
    {
      name: "Tirtharaj Barman",
      position: "PhD Scholar",
      topic:
        "Core dynamics and Magnetohydrodynamics",
      Website: "https://sites.google.com/view/tirtharajbarman/bio",
      image: tirtharajImg,
      email: "23dr0195@iitism.ac.in",
      bio:"",



    },
    {
      name: "Susil Nayak",
      position: "PhD Scholar",
      topic: "Experimental Fluid Dynamics and Laboratory Models for Thermal Core–Mantle Interaction",
      bio: "",
      image: susilImg,
      email: "23dr0332@iitism.ac.in",
    },
    {
      name: "Debopam Ghosh",
      position: "PhD Scholar",
      topic: "Terrestrial Planetary Dynamos",
      bio: "Working on the mechanisms of magnetic field generation, dynamics operated in the terrestrial planetary dynamos, and the associated energy transfer processes.",
      image: debopamImg,
      email: "24dr0062@iitism.ac.in",
    },
    {
      name: "Arpan Das",
      position: "PhD Scholar",
      topic: "Morphology and fluid flow behaviour in unconventional reservoir rocks",
      bio: "Morphological characterization and fluid flow simulation in unconventional reservoir rock",
      image: arpanImg,
      email: "24dr0044@iitism.ac.in",
    },
    {
      name: "Amrik Mondal",
      position: "PhD Scholar",
      topic: "Thermo-chemical dynamo model",
      bio: "Thermo-chemical convection is fluid motion driven by combined temperature and compositional density differences within a system. It plays a fundamental role in Earth's mantle and outer core dynamics, influencing heat transport, stratification, and the geodynamo process.",
      image: amritImg,
      email: "24dr0273@iitism.ac.in",
    },
  ];

  /* ================= MSc / MTech ================= */
  const msStudents = [
    {
      name: "Partha Pratim Jana",
      position: "MSc Tech (Applied Geophysics)",
      topic: "Geodynamo and Planetary Magnetic Fields",
      bio: "Focuses on numerical and data-driven analysis of planetary magnetic field morphology and dynamo processes.",
      image: parthaImg,
      email: "23mc0055@iitism.ac.in, partha7jana@gmail.com",
    },
    {
      name: "Aman Sharma",
      position: "MSc Tech (Applied Geophysics)",
      topic: "Flow and Transport in Porous Media",
      bio: "Studies porous media flow mechanisms with applications to subsurface energy and environmental systems.",
      image: amanImg,
      email: "",
    },
    {
      name: "Sk Abu Samad",
      position: "MSc Tech (Applied Geophysics)",
      topic: "Thermal Convection in Geophysical Systems",
      bio: "Works on convection-driven flow instabilities relevant to planetary and geophysical applications.",
      image: abuImg,
      email: "",
    },
    {
      name: "Sanjana Narwal",
      position: "MSc Tech (Applied Geophysics)",
      topic: "Rotating and Thermal Convection",
      bio: "Interested in theoretical and numerical studies of rotating convection in geophysical flows.",
      image: sanjanaImg,
      email: "",
    },
    {
      name: "Rachna Kumari",
      position: "MTech",
      topic: "Flow Through Porous Media",
      bio: "Research focuses on modeling transport processes in porous media relevant to energy and environmental applications.",
      image: rachnaImg,
      email: "",
    },
    {
      name: "Suraj Kumar",
      position: "MTech",
      topic: "Experimental Fluid Dynamics",
      bio: "Works on experimental techniques to study flow instabilities and convection phenomena.",
      image: surajImg,
      email: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="Research Team"
          subtitle="Members of the Geophysical Fluid Dynamics Laboratory"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* Faculty */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                Faculty
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {faculty.map((member, i) => (
                  <TeamCard key={i} {...member} />
                ))}
              </div>
            </div>

            {/* PhD Scholars */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                PhD Scholars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phdScholars.map((member, i) => (
                  <TeamCard key={i} {...member} />
                ))}
              </div>
            </div>

            {/* MSc / MTech */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                MSc / MTech Students
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {msStudents.map((member, i) => (
                  <TeamCard key={i} {...member} />
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

export default Team;
