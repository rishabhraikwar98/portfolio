export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "Web App" | "SaaS" | "Realtime";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "linkpulse",
    title: "LinkPulse",
    description:
      "A SaaS link management and analytics platform with customizable public profiles.",
    longDescription:
      "LinkPulse enables users to organize links, create customizable public profiles, and track engagement through click analytics. It uses Supabase for authentication, real-time database operations, and secure user management, plus analytics and theme customization features so users can personalize their profile and measure link performance.",
    image:
      "https://res.cloudinary.com/dbdqc0uzq/image/upload/v1782129568/LinkPulse_anth9k.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "shadcn",
      "Tailwind CSS",
      "MongoDB",
    ],
    category: "SaaS",
    liveUrl: "https://link-pulse-iota.vercel.app",
    githubUrl: "https://github.com/rishabhraikwar98/link-pulse",
    featured: true,
  },
  {
    slug: "trackflow",
    title: "TrackFlow",
    description:
      "A SaaS issue-tracking system for teams to manage tasks and track issues in real time.",
    longDescription:
      "TrackFlow is a full-stack project management platform built for teams to manage tasks, assign roles, and track issues in real time. It implements role-based access control and secure JWT authentication for controlled operations, and is designed as a scalable SaaS-style application that simulates real-world team collaboration tools like Linear or Jira.",
    image:
      "https://res.cloudinary.com/dbdqc0uzq/image/upload/v1782129568/TrackFlow_dqfqnk.jpg",
    tags: [
      "React.js",
      "MongoDB",
      "Express.js",
      "Shadcn",
      "Node.js",
      "Redux Toolkit",
      "TypeScript",
    ],
    category: "SaaS",
    liveUrl: "https://track-flow-delta.vercel.app",
    githubUrl: "https://github.com/rishabhraikwar98/track-flow",
    featured: true,
  },
  {
    slug: "next-scheduler",
    title: "Next Scheduler",
    description:
      "An event booking platform with automated workflows and Google Calendar integration.",
    longDescription:
      "Next Scheduler is a scheduling platform to create and manage bookings with automated event workflows. It integrates the Google Calendar API for real-time availability and meeting scheduling, backed by a scalable Prisma + PostgreSQL backend with a clean, responsive UI.",
    image:
      "https://res.cloudinary.com/dbdqc0uzq/image/upload/v1782129568/Next_Scheduler_aoaund.jpg",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Shadcn",
      "Clerk",
      "Google Calendar API",
    ],
    category: "Web App",
    liveUrl: "https://next-scheduler-seven.vercel.app",
    githubUrl: "https://github.com/rishabhraikwar98/next-scheduler",
  },
  {
    slug: "chats",
    title: "Chats",
    description:
      "A real-time messaging platform with live chat, typing indicators, and presence tracking.",
    longDescription:
      "Chats is a real-time messaging platform featuring live chat, typing indicators, and online presence tracking. It uses Socket.IO for instant communication and real-time updates, with secure authentication and user profile management built on a responsive UI.",
    image:
      "https://res.cloudinary.com/dbdqc0uzq/image/upload/v1782129568/Chats_nzf6os.jpg",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Redux",
      "Cloudinary API",
      "MUI",
    ],
    category: "Realtime",
    liveUrl: "https://chats-black.vercel.app",
    githubUrl: "https://github.com/rishabhraikwar98/chats",
  },
];
