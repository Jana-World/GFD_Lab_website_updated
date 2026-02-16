import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ResearchAreaCard from "@/components/ResearchAreaCard";
import { CheckCircle } from "lucide-react";


import plane1Img from "@/assets/research/plane1.jpg";
import plane2Img from "@/assets/research/plane2.jpg";
import penetrative1Img from "@/assets/research/penetrative1.jpg";
import penetrative2Img from "@/assets/research/penetrative2.jpg";
const Research = () => {
  const researchAreas = [
    {
      title: "Plane Layer Convection",
      description:
        "Linear & nonlinear stability analysis of Rayleigh-Bénard convection in rotating plane fluid layers with heterogeneous heating.",
      publications: 8,
      citations: 180,
      journal: "Physics of Fluids 2024: Onset with stable stratification [IF: 4.3]",
      methods: ["Linear stability", "Dedalus solver", "Rotating tanks"],
      funding: "Departmental Funding",
      images: [plane1Img,plane2Img      ],
    },
    {
      title: "Penetrative Convection",
      description:
        "Supercritical convection penetrating stable stratified layers at Earth's core-mantle boundary. Back-reaction of magnetic field.",
      publications: 6,
      citations: 150,
      journal: "EGU 2025: CMB effects on dynamo action (Oral)",
      methods: ["PIV", "Thermal imaging", "High-speed rotation"],
      funding: "MoES • ISRO",
      images: [penetrative1Img,penetrative2Img],
    },
    {
      title: "Spherical Shell Dynamo",
      description:
        "HPC simulations of self-sustained dynamos in rotating spherical shells modeling Earth's core magnetic field generation.",
      publications: 12,
      citations: 280,
      journal: "Physics of Fluids 2024: Multi-layer dynamo models",
      methods: ["Parallel NS", "Dedalus", "A100 GPUs"],
      funding: "DST-SERB CRG",
      images: [
        "/assets/research/spherical1.jpg",
        "/assets/research/spherical2.jpg",
        "/assets/research/spherical3.jpg",
      ],
    },
    {
      title: "Rotating Convection Experiments",
      description:
        "Laboratory experiments on rapidly rotating convection in cylindrical annuli and spherical shells with realistic CMB heterogeneity.",
      publications: 10,
      citations: 220,
      journal: "High-Speed Rotating Table (0-3000 RPM, 1m diameter)",
      methods: ["LDV", "FLIR A655sc", "256-core HPC"],
      funding: "Lab Development Grant",
      images: [
        "/assets/research/rotating1.jpg",
        "/assets/research/rotating2.jpg",
      ],
    },
    {
      title: "Digital Rock Analysis",
      description:
        "Micro-CT scanning (3µm resolution) of Gondwana shale reservoirs. Fractal pore network modeling and multiphase flow simulation.",
      publications: 5,
      citations: 120,
      journal: "Marine & Petroleum Geology 2024 [IF: 3.2]",
      methods: ["Nikon XT H 225", "LBM", "Avizo"],
      funding: "ONGC",
      images: [
        "/assets/research/digitalrock1.jpg",
        "/assets/research/digitalrock2.jpg",
      ],
    },
    {
      title: "Fluid Flow in Porous Medium",
      description:
        "Pore-scale flow dynamics in Indian Gondwana shales using digital rock physics and algebraic topology approaches.",
      publications: 7,
      citations: 160,
      journal: "Petroleum Geoscience 2024: Fractal shale analysis",
      methods: ["Micro-CT", "Pore network extraction", "Lattice Boltzmann"],
      funding: "ONGC • DST",
      images: [
        "/assets/research/porous1.jpg",
        "/assets/research/porous2.jpg",
      ],
    },
    {
      title: "Convection Instability",
      description:
        "Oscillatory onset of rotating thermal convection under spatially varying magnetic fields and stable stratification.",
      publications: 9,
      citations: 200,
      journal: "EGU 2025: Thermo-chemical convection onset",
      methods: ["Linear stability", "Chebyshev spectral methods"],
      funding: "SERB StartUp",
      images: [
        "/assets/research/convection1.jpg",
        "/assets/research/convection2.jpg",
      ],
    },
    {
      title: "Core-Mantle Interaction",
      description:
        "Thermal coupling experiments modeling core-mantle boundary interactions using rotating cylindrical annuli with topographic heterogeneity.",
      publications: 8,
      citations: 190,
      journal: "JpGU 2024: CMB interaction on magnetoconvection",
      methods: ["Thermal imaging", "PIV", "FLIR A655sc"],
      funding: "ISRO RESPOND",
      images: [
        "/assets/research/coremantle1.jpg",
        "/assets/research/coremantle2.jpg",
      ],
    },
    {
      title: "Planetary Magnetic Field",
      description:
        "Comparative dynamo modeling for Earth, Mars, Jupiter. Analysis of Martian crustal magnetic anomalies and paleomagnetic reversals.",
      publications: 4,
      citations: 95,
      journal: "IGU 2023: Mars magnetic mysteries (Best Poster)",
      methods: ["HPC dynamo codes", "Swarm satellite", "Paleomagnetic data"],
      funding: "ISRO • DST",
      images: [
        "/assets/research/planetary1.jpg",
        "/assets/research/planetary2.jpg",
      ],
    },
  ];

  const methods = [
    "Analytical and theoretical modeling",
    "High-performance numerical simulations",
    "Laboratory-scale experiments",
    "Machine learning and physics-informed models",
    "Seismic and geophysical data analysis",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <PageHeader
          title="Research"
          subtitle="Fundamental and applied research in geophysical and planetary fluid dynamics, subsurface processes, and data-driven modeling."
        />

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            {/* Research Areas */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 pb-2 border-b border-border">
                Active Research Themes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchAreas.map((area, index) => (
                  <ResearchAreaCard key={index} {...area} />
                ))}
              </div>
            </div>

            {/* Methods & Approaches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Methods & Approaches
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {methods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
