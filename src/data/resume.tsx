import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Firebase } from "@/components/ui/svgs/firebase";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Expo } from "@/components/ui/svgs/expo";

export const DATA = {
  name: "Marios Papadakis",
  initials: "MP",
  url: "https://github.com/MariosPapadakis",
  location: "Heraklion, Greece",
  locationLink: "https://www.google.com/maps/place/Heraklion,+Greece",
  description:
    "Co-Founder @Opora and Computer Science student at the University of Crete.",
  summary:
    "I am a Computer Science undergraduate at the [University of Crete](/#education), driven by a vision to design intelligent, scalable, and human-centered software. I build production web and mobile platforms with React Native, Expo, Next.js, Node.js, Firebase, and PostgreSQL, with current work spanning mobile application development at Epignosis, agricultural logistics through Opora, fitness management through Naedo, and AI-assisted learning tools.",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Expo", icon: Expo },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Firebase", icon: Firebase },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "SQL", icon: Postgresql },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C", icon: Csharp },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "marios.papadakis.gr@gmail.com",
    tel: "+306945112807",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MariosPapadakis",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mariospapadakis/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:marios.papadakis.gr@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Epignosis learning technologies",
      href: "https://www.epignosishq.com/",
      badges: [],
      location: "Remote",
      title: "Junior Software Engineer",
      logoUrl: "/epignosis_ltd_logo.jpeg",
      start: "May 2026",
      end: "Present",
      description:
        "Full-time junior software engineer focused on mobile application development.",
    },
    {
      company: "Epignosis learning technologies",
      href: "https://www.epignosishq.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/epignosis_ltd_logo.jpeg",
      start: "Feb 2026",
      end: "May 2026",
      description:
        "Software engineering internship contributing to remote product development work.",
    },
    {
      company: "Opora",
      href: "https://www.getopora.com/",
      badges: [],
      location: "Heraklion, Greece",
      title: "Co-Founder & Full-Stack Developer",
      logoUrl: "/opora_logo.png",
      start: "Jul 2025",
      end: "Present",
      description:
        "Designed and deployed a full-stack agricultural logistics platform using React Native/Expo for iOS and Android and Next.js for the web dashboard, enabling real-time producer-driver coordination across multi-tenant organizations. Integrated Firebase Firestore with live onSnapshot listeners for sub-second order tracking and route updates, improving delivery efficiency by 35%.",
    },
    {
      company: "Naedo.gr",
      href: "https://naedo.gr/",
      badges: [],
      location: "Heraklion, Greece",
      title: "Co-Founder & Full-Stack Developer",
      logoUrl: "/naedo_logo.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "Developed a cloud-native multi-tenant fitness management platform with React Native/Expo, Node.js APIs on Vercel, isolated Neon PostgreSQL instances, and Clerk-based authentication. Built an admin dashboard with runtime feature toggles, dynamic theming, and role-based access control, and automated gym provisioning with deployment scripts and Vercel Cron Jobs, reducing setup time from multiple days to under four hours.",
    },
    {
      company: "Enhance Digital Agency",
      href: "",
      badges: [],
      location: "Heraklion, Greece",
      title: "Web Developer",
      logoUrl: "/enhance_image.jpg",
      start: "Nov 2024",
      end: "Dec 2024",
      description:
        "Developed client websites with WordPress and JavaScript, collaborating with design and SEO teams to deliver responsive, SEO-optimized web solutions.",
    },
  ],
  education: [
    {
      school: "University of Crete, Department of Computer Science",
      href: "https://www.csd.uoc.gr/",
      degree: "Bachelor of Science - BS, Computer Science; Grade: 8.08/10",
      logoUrl: "/uoc.jpg",
      start: "Sep 2022",
      end: "Jul 2026",
    },
  ],
  projects: [
    {
      title: "Opora - Agricultural Logistics Management Platform",
      href: "https://www.getopora.com/",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "Designed and deployed a full-stack agricultural logistics platform using React Native/Expo and Next.js, enabling real-time producer-driver coordination across multi-tenant organizations. Integrated Firebase Firestore with live onSnapshot listeners for sub-second order tracking and route updates, improving delivery efficiency by 35%. Built a role-based access system with notifications and Greek-first internationalization, now powering logistics for production clients across Greece.",
      technologies: ["React Native", "Expo", "Next.js", "Firebase", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://www.getopora.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/opora_logo.png",
      video: "",
    },
    {
      title: "Naedo - Multi-Tenant Fitness Management Platform",
      href: "https://naedo.gr/",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Developed Naedo, a cloud-native multi-tenant fitness management platform built with React Native/Expo, Node.js, and Vercel. Implemented secure tenant separation with Clerk authentication and isolated Neon PostgreSQL instances, built runtime feature toggles, dynamic theming, and role-based access control, and automated gym provisioning with deployment scripts and Vercel Cron Jobs.",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "Vercel",
        "PostgreSQL",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://naedo.gr/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/naedo_white_logo.png",
      video: "",
    },
    {
      title: "Alpha Language Compiler & Virtual Machine",
      href: "https://github.com/MariosPapadakis/HY340-Alpha-Compiler-VM",
      dates: "Mar 2025 - Jun 2025",
      active: true,
      description:
        "Implemented a full compiler pipeline in C++ for the custom Alpha programming language, including lexical analysis, parsing, semantic checks, intermediate code generation, and bytecode execution. Developed a stack-based virtual machine supporting nested scopes, closures, and reference-counted garbage collection, demonstrating end-to-end compiler design from source parsing to bytecode interpretation.",
      technologies: ["C++", "Flex", "Bison", "Compiler Design", "Virtual Machine"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/MariosPapadakis/HY340-Alpha-Compiler-VM",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Movie Platform Project",
      href: "https://github.com/MariosPapadakis/Movie-Platform-project",
      dates: "HY240 Coursework",
      active: true,
      description:
        "Built a C-based movie platform project for HY240, focusing on structured data handling, command-driven program flow, and systems programming fundamentals.",
      technologies: ["C", "Makefile", "Data Structures", "Systems Programming"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/MariosPapadakis/Movie-Platform-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "StudyPilot",
      href: "https://www.figma.com/deck/sIZoFaxg7nzu09V4R2pLC8/StudyPilot--Copy-?node-id=18-55&p=f&viewport=-4195%2C336%2C0.15&t=I0FfsYGlIOmHreLJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      dates: "Oct 2025",
      active: true,
      description:
        "Award-winning AI-powered learning assistant that generates quizzes, flashcards, and summaries from study materials including PDFs, DOCX files, and YouTube videos.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Google Genkit AI"],
      links: [
        {
          type: "Deck",
          href: "https://www.figma.com/deck/sIZoFaxg7nzu09V4R2pLC8/StudyPilot--Copy-?node-id=18-55&p=f&viewport=-4195%2C336%2C0.15&t=I0FfsYGlIOmHreLJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "1st Place - AI FuturEd Hackathon",
      dates: "Oct 2025",
      location: "Epignosis & University of Crete, Computer Science Department",
      description:
        "Won 1st place for developing StudyPilot, an AI-powered learning assistant that generates quizzes, flashcards, and summaries from study materials including PDFs, DOCX files, and YouTube videos.",
      image: "/Logo.svg",
      win: "1st Place",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MariosPapadakis",
        },
      ],
    },
    {
      title: "1st Place - OramaVR Hackathon at CS-150",
      dates: "May 2023",
      location: "OramaVR & University of Crete, Computer Science Department",
      description:
        "Built a multiplayer educational VR game in 72 hours using Unity and the MAGES SDK plugin. The team placed 1st.",
      image: "/oramavr_logo.jpeg",
      win: "1st Place",
      links: [
        {
          title: "Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=CqETAvKYhqA",
        },
      ],
    },
  ],
} as const;
