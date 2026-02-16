/**
 * newsData.ts
 * =====================================================
 * 👉 SINGLE SOURCE OF TRUTH FOR ALL NEWS
 * 👉 SAFE VITE ASSET IMPORTS (Netlify-friendly)
 * 👉 Non-developers can safely edit text content
 */

/* =====================================================
   MEDIA IMPORTS (⚠️ FILE NAMES MUST MATCH EXACTLY)
   ===================================================== */

// ---------- NPTEL ----------
import nptel2026Video from "@/assets/news/nptel2026.mp4";

// ---------- PHD ----------
import phdDefenseImg from "@/assets/news/Phd_defense_dheeraj.jpg";

// ---------- AWARD ----------
import awardCeremonyImg from "@/assets/news/award-ceremony-2026.jpg";
/*import awardSpeechVideo from "@/assets/news/award-speech.mp4";*/

// ---------- POSTER ----------
import ricPosterImg from "@/assets/news/ric-poster.jpg";

// ---------- SEG EVOLVE ----------
import segTeamImg from "@/assets/news/seg-team.png";

/* =====================================================
   TYPES
   ===================================================== */

export type MediaItem = {
  src: string;                 // imported image or video
  type: "image" | "video";
  alt: string;
  comment?: string;
};

export type NewsItem = {
  id: string;
  section: "course" | "phd" | "award" | "poster" | "achievement";
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  place?: string;
  links?: { label: string; url: string }[];
  media?: MediaItem[];
};

/* =====================================================
   DATA (EDIT THIS SECTION ONLY)
   ===================================================== */

export const newsData: NewsItem[] = [
  // ===================================================
  // NPTEL COURSE
  // ===================================================
  {
    id: "nptel-math-geo",
    section: "course",
    title: "NPTEL Course: Mathematical Geophysics",
    subtitle: "Instructor: Dr. Swarndeep Sahoo",
    description:
      "This course introduces mathematical tools used in geophysics, including inverse theory, partial differential equations, spectral methods, and applications to Earth and planetary systems.",
    date: "February 2026",
    links: [
      {
        label: "View NPTEL Course",
        url: "https://onlinecourses.nptel.ac.in/noc26_ce35/preview",
      },
    ],
    media: [
      {
        src: nptel2026Video,
        type: "video",
        alt: "NPTEL Mathematical Geophysics introduction video",
        comment:
          "Introductory lecture explaining course motivation, structure, and learning outcomes.",
      },
    ],
  },

  // ===================================================
  // PHD DEFENSE
  // ===================================================
  {
    id: "phd-dheeraj",
    section: "phd",
    title: "Dr. Dheeraj Kumar Sharma Successfully Defends PhD",
    subtitle: "Planetary Interiors & Numerical Dynamo Simulations",
    description:
      "Dr. Dheeraj Kumar Sharma successfully defended his PhD thesis focusing on planetary interior dynamics and numerical dynamo simulations relevant to terrestrial planets.",
    date: "March 2025",
    place: "IIT (ISM) Dhanbad",
    media: [
      {
        src: phdDefenseImg,
        type: "image",
        alt: "PhD defense celebration at GFD Lab",
        comment: "Celebration after the successful PhD defense.",
      },
    ],
  },

  // ===================================================
  // AWARD
  // ===================================================
  {
    id: "award-sahoo",
    section: "award",
    title: "Dr. Swarndeep Sahoo Receives Prestigious Research Award",
    subtitle: "Principal Investigator, GFD Laboratory",
    description:
      "Dr. Swarndeep Sahoo was honored with a prestigious national research award recognizing his contributions to geophysical fluid dynamics and planetary sciences.",
    date: "December 2024",
    place: "New Delhi, India",
    media: [
      {
        src: awardCeremonyImg,
        type: "image",
        alt: "Research award ceremony",
        comment: "Award ceremony attended by leading national scientists.",
      },
     
    ],
  },

  // ===================================================
  // BEST POSTER
  // ===================================================
  {
    id: "poster-rachana",
    section: "poster",
    title: "Ms. Rachana Kumar Wins Best Poster Award at RIC Conference",
    subtitle: "Transport Processes in Porous Media",
    description:
      "Her research focuses on modeling transport processes in porous media relevant to energy systems and environmental sustainability.",
    date: "October 2025",
    place: "RIC Conference, IIT Guwahati",
    media: [
      {
        src: ricPosterImg,
        type: "image",
        alt: "Best poster award at RIC Conference",
        comment: "Award-winning poster presentation at RIC Conference.",
      },
    ],
  },

  // ===================================================
  // SEG EVOLVE
  // ===================================================
  {
    id: "seg-partha",
    section: "achievement",
    title:
      "Mr. Partha Pratim Jana Successfully Completes SEG EVOLVE Carbon Solutions Program",
    subtitle: "Carbon Storage, Geomechanics & Reservoir Modeling",
    description:
      "Worked on the South Marsh Island case study involving geomechanics, petrophysics, static–dynamic reservoir modeling, and economic evaluation of CO₂ storage.",
    date: "February 2025",
    media: [
      {
        src: segTeamImg,
        type: "image",
        alt: "SEG EVOLVE Carbon Solutions team",
        comment:
          "International team collaboration under the SEG EVOLVE program.",
      },
    ],
  },
];
