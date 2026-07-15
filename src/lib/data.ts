export const profile = {
  name: "Moussa Mouatez",
  firstName: "Moussa",
  role: "Junior Video Editor",
  tagline: "Turning concepts into visually compelling stories.",
  location: "Doha, Qatar",
  email: "Mouatezmoussa25@gmail.com",
  phone: "+974 70460038",
  summary:
    "Creative Video Editor passionate about turning concepts into visually compelling stories. Skilled at combining technical precision with artistic vision to produce videos that engage audiences and deliver clear messages. Proficient in Adobe Premiere Pro and After Effects, with experience managing projects from raw footage to final polished content.",
  mobility: "Available for relocation and open to international opportunities.",
  cvUrl: "/moussa-mouatez-cv.pdf",
  photoUrl: "/photo.png",
};

export const workCategories = [
  {
    title: "Social & Vlog Content",
    description:
      "Engaging vlogs optimized for vertical formats and fast-paced social media audiences.",
    tag: "Sparkia Qatar",
  },
  {
    title: "Event Recaps & Highlights",
    description:
      "High-impact recaps and highlight reels that turn raw footage into a compelling story.",
    tag: "Sparkia Qatar",
  },
  {
    title: "Promotional Content",
    description:
      "Brand-consistent promotional edits built to meet client style guides and deadlines.",
    tag: "Sparkia Qatar",
  },
  {
    title: "YouTube & Digital Platforms",
    description:
      "Assembled and edited long-form content for YouTube and digital platforms with smooth pacing.",
    tag: "Lumea Solutions",
  },
];

export const experience = [
  {
    role: "Video Editor",
    company: "Sparkia Qatar",
    start: "Dec 2025",
    end: "Feb 2026",
    points: [
      "Produced engaging vlogs, event recaps, highlights, and promotional content.",
      "Optimized short-form content for vertical formats and fast-paced social media audiences.",
      "Collaborated with creators and clients to meet brand style and deadlines.",
      "Improved video quality through color grading, audio balancing, and visual effects.",
    ],
  },
  {
    role: "Video Editor",
    company: "Lumea Solutions",
    start: "Oct 2024",
    end: "Dec 2025",
    points: [
      "Edited and assembled video content for social media, YouTube, and digital platforms, ensuring smooth flow and visual engagement.",
      "Transformed raw footage and creative concepts into polished, high-impact videos combining technical editing with creative visual design.",
      "Followed brand colors, styles, and visual guidelines across projects.",
      "Managed multiple edits while respecting deadlines and revisions.",
    ],
  },
];

export const education = [
  {
    title: "Baccalaureate in Civil Engineering",
    school: "Mentouri University, Algeria",
  },
  {
    title: "Technician Certificate in Computer Networking, Cisco Academy",
    school: "INSIM, Algeria",
  },
];

export const skills = [
  "Time Management",
  "Storytelling",
  "Color Correction",
  "Color Grading",
  "Audio Editing",
  "Sound Design",
  "Video Assembly",
  "Pacing & Sequencing",
  "Engagement Optimization",
];

export const tools = ["Adobe Premiere Pro", "After Effects", "CapCut"];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
];

export const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}` },
];
