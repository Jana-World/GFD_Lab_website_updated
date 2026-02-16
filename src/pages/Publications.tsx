import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PublicationCard from "@/components/PublicationCard";


import aditithumbnailImg from "@/assets/outputs/aditi-journal.png";
import aditit1Img from "@/assets/outputs/aditi1.png";
import aditi2Img from "@/assets/outputs/aditi2.png";


const Publications = () => {

  /* ===================== JOURNAL PUBLICATIONS ===================== */
  const journalArticles = [
    {
      title:
        "Convection in rotating fluids permeated by an axial magnetic field with non-uniform stratification",
      authors: "T. Barman, S. Sahoo",
      journal: "Physica scripta, 100",
      year: "2025",
      keywords: ["Magneto Convection", "Depth of Penetration"],
      overview:
        "Investigates how rotation, magnetic field strength, and partial stable stratification influence the onset of magnetoconvection, deriving scaling laws and quantifying convective penetration across different regimes. The results show that stable stratification promotes earlier onset and smaller-scale convection—especially in weak magnetic fields—while symmetry breaking is strongest in weak-field regimes and diminishes as magnetic effects intensify.",
      /*image: ,
      outputImages: [],*/
      link: "https://iopscience.iop.org/article/10.1088/1402-4896/ae2972",
    },
    {
      title:
        "Penetration depth of flow perturbations into a stably stratified layer driven by rotating laterally heterogeneous convection",
      authors: "T. Barman, S. Sahoo",
      journal: "Physics of Fluids, 100",
      year: "2025",
      keywords: ["Stably stratified Layer", "Heterogeneous Convection"],
      overview:
        "This study examines the penetration of flow perturbations in a rotating fluid layer with spatially varying thermal stratification, deriving analytical expressions for penetration depth in inviscid cases with and without magnetic fields. The results show that heterogeneous buoyancy—quantified by the parameter Γ—enhances penetration, with larger Γ leading to deeper flow intrusion, and these characteristics are further analyzed in a bounded layer model.",
      /*image: ,
      outputImages: [],*/
      link: "https://pubs.aip.org/aip/pof/article/37/8/086601/3357354",
    },
    {
      title:
        "Statistical analysis on background seismicity of Southern California region: application of nearest neighbour declustering and network analysis",
      authors: "A. Seal, S. Sahoo, A. Peresan, P. K. Khan, N. Jana",
      journal: "Journal of Seismology, 29",
      year: "2025",
      keywords: ["Seismology", "Declustering", "Network Analysis"],
      overview:
        "Statistical characterization of background seismicity in Southern California using nearest-neighbour declustering and network-based analysis.",
      image: aditithumbnailImg,
      outputImages: [aditit1Img,aditi2Img],
      link: "https://link.springer.com/article/10.1007/s10950-025-10288-x",
    },

    {
      title:
        "On the onset of thermal convection in a rotating spherical shell with spatially heterogeneous heat source distribution",
      authors: "D. Sharma, S. Sahoo",
      journal: "Physics of Fluids, 36, 124104",
      year: "2024",
      keywords: ["Rotating Convection", "Spherical Shell", "Thermal Instability"],
      overview:
        "Numerical investigation of the onset of thermal convection in rotating spherical shells with spatially heterogeneous heat sources.",
      image: "/assets/journals/pof.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1063/5.0241806",
    },

    {
      title:
        "Coherent flow structures and magnetic field patterns in rotating spherical shell convective dynamos: A data-driven approach",
      authors: "P. Mukherjee, S. Sahoo",
      journal: "Physics of Fluids, 36, 116604",
      year: "2024",
      keywords: ["Geodynamo", "Machine Learning", "Flow Structures"],
      overview:
        "Data-driven identification of coherent flow and magnetic field structures in rotating spherical shell dynamo simulations.",
      image: "/assets/journals/pof.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1063/5.0235675",
    },

    {
      title:
        "Assessment of micro-structure and flow entrapment in Indian Gondwana shale reservoir using digital rock analysis",
      authors: "A. Shukla, S. Sahoo, P. Sarkar",
      journal: "Marine and Petroleum Geology, 169, 107066",
      year: "2024",
      keywords: ["Digital Rock Physics", "Shale Reservoirs"],
      overview:
        "Digital rock physics-based evaluation of pore-scale microstructure and flow entrapment in Indian Gondwana shale reservoirs.",
      image: "/assets/journals/mpg.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1016/j.marpetgeo.2024.107066",
    },

    {
      title:
        "Oscillatory onset of rotating thermal convection subject to spatially varying magnetic fields and stable stratification",
      authors: "S. E. Sreenivasan, S. Sahoo",
      journal: "Physics of Fluids, 36, 086616",
      year: "2024",
      keywords: ["Magnetoconvection", "Stable Stratification"],
      overview:
        "Study of oscillatory instability in rotating thermal convection under spatially varying magnetic fields and stable stratification.",
      image: "/assets/journals/pof.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1063/5.0221496",
    },

    {
      title:
        "Weak time-scale separation at the onset of oscillatory magnetoconvection in rapidly rotating fluids",
      authors: "S. E. Sreenivasan, S. Sahoo",
      journal: "Physica Scripta, 99, 085031",
      year: "2024",
      keywords: ["Magnetoconvection", "Rapid Rotation"],
      overview:
        "Analysis of weak time-scale separation at the onset of oscillatory magnetoconvection in rapidly rotating systems.",
      image: "/assets/journals/ps.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "",
    },

    {
      title:
        "A quantitative study of the microstructure of Indian Gondwana shale: a fractal and algebraic topology approach",
      authors: "P. Sarkar, S. Sahoo, U. Nagpal, T. N. Singh",
      journal: "Petroleum Geoscience, 30, 105",
      year: "2024",
      keywords: ["Fractal Analysis", "Topology", "Shale"],
      overview:
        "Quantitative microstructural characterization of Indian Gondwana shale using fractal geometry and algebraic topology.",
      image: "/assets/journals/petgeo.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1144/petgeo2023-105",
    },

    {
      title:
        "Role of partial stable stratification on fluid flow and heat transfer in rotating thermal convection",
      authors: "T. Barman, S. Sahoo",
      journal: "Physics of Fluids, 36, 046613",
      year: "2024",
      keywords: ["Heat Transfer", "Stratification"],
      overview:
        "Investigation of fluid flow and heat transfer characteristics under partial stable stratification in rotating convection.",
      image: "/assets/journals/pof.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1063/5.0202158",
    },

    {
      title:
        "Thermal convection and dynamo action with stable stratification at the top of the Earth's outer core",
      authors: "P. Mukherjee, S. Sahoo",
      journal: "Physics of the Earth and Planetary Interiors, 345, 107111",
      year: "2023",
      keywords: ["Earth's Core", "Geodynamo"],
      overview:
        "Study of thermal convection and magnetic field generation influenced by stable stratification at the top of Earth's outer core.",
      image: "/assets/journals/pepi.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1016/j.pepi.2023.107111",
    },

    {
      title:
        "On convective instabilities in a rotating fluid with stably stratified layer and thermally heterogeneous boundary",
      authors: "S. Garai, S. Sahoo",
      journal: "Physics of Fluids, 34, 124101",
      year: "2022",
      keywords: ["Rotating Fluids", "Instabilities"],
      overview:
        "Analysis of convective instabilities arising from thermal heterogeneity and stable stratification in rotating fluids.",
      image: "/assets/journals/pof.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "https://doi.org/10.1063/5.0124368",
    },
  ];

  /* ===================== EDITORIAL ===================== */
  const editorialVolumes = [
    {
      title:
        "Strong Motion Earthquake: Structural Response Modelling and Aided Design",
      authors:
        "P. K. Khan, S. Sahoo, U. Borah, N. Jana, Y. Giri (Eds.)",
      journal: "KP Books Publishers",
      year: "2025",
      keywords: ["Earthquake Engineering", "Structural Response"],
      overview:
        "Edited volume focusing on strong motion earthquakes, structural response modelling, and earthquake-resistant design.",
      image: "/assets/editorial/earthquake.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "",
    },
  ];

  /* ===================== CONFERENCE PROCEEDINGS ===================== */
  const conferenceProceedings = [
    {
      title:
        "Core convection influenced by large lower mantle heterogeneity: Implications for the geomagnetic field",
      authors: "S. Sahoo*, B. Sreenivasan",
      journal: "AGU General Assembly",
      year: "2020",
      keywords: ["Geomagnetism", "Mantle Heterogeneity"],
      overview:
        "Invited talk on the influence of lower mantle heterogeneity on Earth's core convection and geomagnetic field.",
      image: "/assets/conferences/agu.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "",
    },

    {
      title:
        "A laboratory model for thermal core–mantle interaction",
      authors: "S. Sahoo*, B. Sreenivasan",
      journal: "EGU General Assembly, Vienna",
      year: "2019",
      keywords: ["Core-Mantle Interaction"],
      overview:
        "Laboratory-based investigation of thermal interaction between Earth's core and mantle.",
      image: "/assets/conferences/egu.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "",
    },

    {
      title:
        "Unraveling Mars' Magnetic Mysteries: Insights from Crustal Magnetization and Spherical Harmonic Coefficient Analysis",
      authors: "D. Ghosh*, S. Sahoo",
      journal: "Indian Geophysical Union – Diamond Jubilee Convention",
      year: "2023",
      keywords: ["Mars", "Planetary Magnetism"],
      overview:
        "Award-winning poster on Martian magnetic field interpretation using spherical harmonic analysis.",
      image: "/assets/conferences/igu.png",
      outputImages: [
        "/assets/outputs/seismic-net-1.png",
        "/assets/outputs/seismic-net-2.png",
      ],
      link: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="Publications"
          subtitle="Journal articles, editorial volumes, and conference proceedings"
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">

            {/* JOURNALS */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 border-b pb-2">
                Journal Publications
              </h2>
              <div className="space-y-6">
                {journalArticles.map((pub, idx) => (
                  <PublicationCard key={idx} {...pub} type="journal" />
                ))}
              </div>
            </div>

            {/* EDITORIAL */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 border-b pb-2">
                Editorial Volume
              </h2>
              <div className="space-y-6">
                {editorialVolumes.map((pub, idx) => (
                  <PublicationCard key={idx} {...pub} type="editorial" />
                ))}
              </div>
            </div>

            {/* CONFERENCES */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 border-b pb-2">
                Conference Proceedings
              </h2>
              <div className="space-y-6">
                {conferenceProceedings.map((pub, idx) => (
                  <PublicationCard key={idx} {...pub} type="conference" />
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

export default Publications;
