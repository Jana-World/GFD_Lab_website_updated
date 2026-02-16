
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import AlumniCard from "@/components/AlumniCard";

/* ================= alumni photos ================= */
/* ================= alumni photos ================= */
import defaultImg from "@/assets/alumni/default.jpg";

import abhayImg from "@/assets/alumni/abhay-shukla.jpg";
import dheerajImg from "@/assets/alumni/dheeraj.jpg";
import priyabrataImg from "@/assets/alumni/priyabrata-mukherjee.jpg";
import jyotiImg from "@/assets/alumni/jyoti-dubey.jpg";
import harshitaImg from "@/assets/alumni/harshita-seth.jpg";
import shubhamImg from "@/assets/alumni/shubham-singh.jpg";
import ayushImg from "@/assets/alumni/ayush-kumar.jpg";
import anuragImg from "@/assets/alumni/anurag-bhattacharya.jpg";
import susilImg from "@/assets/alumni/susil-nayak.jpg";
import hirenImg from "@/assets/alumni/hiren-rout.jpg";
import himanshuImg from "@/assets/alumni/himanshu-jain.jpg";
import syedImg from "@/assets/alumni/syed-aifan-ali.jpg";
import abhiramImg from "@/assets/alumni/abhiram-sethy.jpg";
import sudeepImg from "@/assets/alumni/sudeep-gupta.jpg";
import omprakashImg from "@/assets/alumni/omprakash-gupta.jpg";
import umangImg from "@/assets/alumni/umang-nagpal.jpg";
import tapomayImg from "@/assets/alumni/tapomay-shee.jpg";
import susmitaImg from "@/assets/alumni/susmita-garai.jpg";
import arvindImg from "@/assets/alumni/arvind-yadav.jpg";

/* ================= TYPES ================= */
interface AlumniMember {
  name: string;
  position: string;
  topic: string;
  currentPosition: string;
  bio: string;
  email?: string;
  website?: string;
  image?: string;
}


const Alumni = () => {

    /* ================= PhD Alumni ================= */
  const phdAlumni: AlumniMember[] = [
    {
      name: "Dheeraj Kumar Sharma",
      position: "PhD",
      topic: "Waves in Planetary interior, Dynamo simulation",
      currentPosition: "Researcher",
      bio: "Focused on planetary interior waves and numerical dynamo modeling.",
      image: dheerajImg,
    },
    {
      name: "Priyabrata Mukherjee",
      position: "PhD",
      topic: "Geomagnetism, Deep Earth interior",
      currentPosition: "Geoscientist, Geological Survey of India",
      bio: "Worked on geomagnetic field analysis and Earth's interior studies.",
      image: defaultImg,
    },
    {
      name: "Jyoti Dubey",
      position: "PhD",
      topic: "Fluid Flow in Porous Media",
      currentPosition: "Geophysicist, Oil and Natural Gas Corporation India",
      bio: "Specialized in fluid flow and reservoir modeling.",
      image: defaultImg,
    },
    {
      name: "Harshita Seth",
      position: "PhD",
      topic: "Magnetoconvection",
      currentPosition: "Scientist, Geological Survey of India",
      bio: "Worked on magnetohydrodynamics in geophysics.",
      image: defaultImg,
    },
  ];

  /* ================= MTech Alumni ================= */
  const mtechAlumni: AlumniMember[] = [
    {
      name: "Shubham Singh",
      position: "MTech",
      topic: "Decomposition and Analysis of Geomagnetic Data using CEOF and POD",
      currentPosition: "Research Assistant",
      bio: "Focused on geomagnetic data decomposition and analysis.",
      image: defaultImg,
    },
    {
      name: "Ayush Kumar",
      position: "MTech",
      topic: "Instrumental Setup of Core Mantle Thermal Setup",
      currentPosition: "Researcher",
      bio: "Worked on core-mantle boundary experimental setups.",
      image:  defaultImg,
    },
    {
      name: "Abhiram Sethy",
      position: "MTech",
      topic: "Geomagnetic Field Data Analysis",
      currentPosition: "Data Scientist",
      bio: "Specialized in geomagnetic field modeling and data analysis.",
      image: defaultImg,
    },
  ];
  
  /* ================= Int Mtech  Alumni ================= */
  const intMtechAlumni: AlumniMember[] = [
    {
      name: "Anurag Bhattacharya",
      position: "Int. MTech",
      topic: "Advanced Seismology Techniques",
      currentPosition: "Researcher",
      bio: "Focused on seismology modeling and techniques.",
      image: defaultImg,
    },
    {
      name: "Susil Nayak",
      position: "Int. MTech",
      topic: "Mantle Convection Modeling",
      currentPosition: "Research Assistant",
      bio: "Worked on numerical mantle convection simulations.",
      image:  defaultImg,
    },
  ];
 /* ================= MSc Tech Alumni ================= */
  const mscTechAlumni: AlumniMember[] = [
    {
      name: "Hiren Rout",
      position: "MSc.Tech",
      topic: "Planetary Magnetic Field Studies",
      currentPosition: "Researcher",
      bio: "Focused on planetary magnetic field analysis.",
      image:  defaultImg,
    },
    {
      name: "Himanshu Jain",
      position: "MSc.Tech",
      topic: "Magnetohydrodynamics in Geophysics",
      currentPosition: "Researcher",
      bio: "Worked on MHD simulations and geophysical flows.",
      image: defaultImg,
    },
    {
      name: "Syed Aifan Ali",
      position: "MSc.Tech",
      topic: "Numerical Modeling of Dynamo Action",
      currentPosition: "Researcher",
      bio: "Specialized in dynamo simulations for planetary cores.",
      image: defaultImg,
    },
  ];

  const renderAlumniSection = (title: string, alumniList: AlumniMember[]) => (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {alumniList.map((alumni, idx) => (
          <AlumniCard key={idx} {...alumni} />
        ))}
      </div>
    </div>
  );
/*................................................................................*/


  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="Alumni"
          subtitle="Former members of the Geophysical Fluid Dynamics Laboratory"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* PhD Alumni */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                PhD Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phdAlumni.map((member, i) => (
                  <AlumniCard key={i} {...member} />
                ))}
              </div>
            </div>

            {/* MTech Alumni */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                MTech Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mtechAlumni.map((member, i) => (
                  <AlumniCard key={i} {...member} />
                ))}
              </div>
            </div>

            {/* Integrated MTech Alumni */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                Integrated MTech Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {intMtechAlumni.map((member, i) => (
                  <AlumniCard key={i} {...member} />
                ))}
              </div>
            </div>

            {/* MSc Tech Alumni */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-border pb-2">
                MSc Tech Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mscTechAlumni.map((member, i) => (
                  <AlumniCard key={i} {...member} />
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

export default Alumni;
