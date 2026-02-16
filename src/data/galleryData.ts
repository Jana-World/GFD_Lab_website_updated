/**
 * galleryData.ts
 * =====================================================
 * 👉 ONLY FILE YOU NEED TO EDIT TO UPDATE GALLERY
 *
 * HOW TO ADD NEW SECTION:
 * 1. Copy one section block
 * 2. Change title & description
 * 3. Add media items
 */

 /* 👉 ONLY FILE YOU NEED TO EDIT TO UPDATE GALLERY
 */

// =====================
// MEDIA IMPORTS
// =====================//

import rotatingTankImg from "@/assets/gallery/rotating_tank.jpg";
import instrumentSetupVideo from "@/assets/gallery/instrumentSetup.mp4";

import picnicImg1 from "@/assets/gallery/picnic1.jpg";
/*import picnicVideo from "@/assets/gallery/picnicVideo.mp4";*/

import ricPosterImg from "@/assets/gallery/ricPoster.jpg";
/*import ricTalkVideo from "@/assets/gallery/ricTalk.mp4";*/

import teachersDay1Img from "@/assets/gallery/teachersDay25.jpeg";
import teachersDay2Img from "@/assets/gallery/teachersDay25_1.jpeg";

export interface GalleryMedia {
  src: string;               // Image or video path
  type: "image" | "video";   // Media type
  alt: string;               // Accessibility text
  comment: string;           // Text shown below media
  date?: string;
  place?: string;
}

export interface GallerySection {
  id: string;
  title: string;
  subtitle: string;
  theme: "instrument" | "event" | "conference"; // controls shape & style
  items: GalleryMedia[];
}

export const gallerySections: GallerySection[] = [
  {
    id: "instrument-setup",
    title: "Instrument Setup at GFD Lab",
    subtitle:
      "Development and installation of Rotating Tank",
    theme: "instrument",
    items: [
      {
        src: rotatingTankImg,
        type: "image",
        alt: "Rotating tank experiment",
        comment:
          "Rotating tank system used for studying thermal and rotating convection.",
        date: "December 2025",
        place: "GFD Lab, IIT (ISM)",
      },
      {
        src: instrumentSetupVideo,
        type: "video",
        alt: "Instrument setup video",
        comment:
          "Video showing calibration and first testing of the new rotating platform.",
      },
    ],
  },

  {
    id: "lab-picnic",
    title: "GFD Lab Picnic 2025",
    subtitle:
      "Informal gathering to strengthen collaboration and lab culture",
    theme: "event",
    items: [
      {
        src: picnicImg1 ,
        type: "image",
        alt: "Lab picnic group photo",
        comment:
          "Group photo of GFD lab members during the annual lab picnic.",
        date: "January 2026",
        place: "Topchanchi, Jharkhand",
      },
      
    ],
  },

  {
    id: "conference-ric",
    title: "GFD Members at RIC Conference",
    subtitle:
      "Participation and presentations at National research conferences",
    theme: "conference",
    items: [
      {
        src: ricPosterImg,
        type: "image",
        alt: "RIC conference poster",
        comment:
          "Poster presentation on planetary fluid dynamics at RIC Conference.",
        place: "RIC Conference, IIT Guwahati, India",
        date: "October 2025",
      },
    
    ],
  },

  {
  id: "TeachersDay2025",
  title: "Teachers' Day Celebration at GFD Lab",
  subtitle: "Honoring mentors and celebrating academic excellence",
  theme: "event",
  items: [
    {
      src: teachersDay1Img,
      type: "image",
      alt: "Teachers' Day celebration at GFD Lab",
      comment:
        "Guide and students celebrating Teachers' Day with gratitude, speeches, and cake cutting at GFD Lab.",
      place: "GFD Lab, IIT Guwahati, India",
      date: "September 5, 2025",
    },
     {
      src: teachersDay2Img,
      type: "image",
      alt: "Time with guide",
      comment:
        "Guide and students .",
      place: "IIT Guwahati, India",
      date: "September 5, 2025",
    },
  ],
}

];
