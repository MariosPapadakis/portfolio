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
import { Cplusplus } from "@/components/ui/svgs/cplusplus";
import { Firebase } from "@/components/ui/svgs/firebase";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Expo } from "@/components/ui/svgs/expo";
import { Aws } from "@/components/ui/svgs/aws";

export const DATA = {
  name: "Marios Papadakis",
  initials: "MP",
  url: "https://github.com/MariosPapadakis",
  location: "Heraklion, Greece",
  locationLink: "https://www.google.com/maps/place/Heraklion,+Greece",
  description:
    "Computer Science student at the University of Crete and co-founder of Opora.",
  summary:
    "I study Computer Science at the [University of Crete](/#education) and work mostly on web and mobile products. Recently that has meant mobile application work at Epignosis, logistics software for agricultural teams at Opora, gym management tools through Naedo, and a few university and hackathon projects around compilers, systems programming, and AI-assisted study tools.",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Expo", icon: Expo },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "AWS", icon: Aws },
    { name: "Firebase", icon: Firebase },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "SQL", icon: Postgresql },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C", icon: Csharp },
    { name: "C++", icon: Cplusplus },
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
        "Working full-time on mobile application development.",
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
        "Worked remotely as a software engineering intern before moving into a full-time role.",
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
        "Designed and shipped an agricultural logistics platform with React Native, Expo, and Next.js. The product coordinates producers, drivers, and managers across multiple organizations, with Firestore listeners for live order tracking and route updates.",
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
        "Built a multi-tenant fitness management platform with React Native, Expo, Node.js APIs on Vercel, Neon PostgreSQL, and Clerk. I worked on the admin dashboard, feature toggles, theming, access control, and provisioning scripts that reduced gym setup time from days to under four hours.",
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
        "Built client websites with WordPress and JavaScript, working with design and SEO teams on responsive pages.",
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
        "A logistics platform for agricultural distribution teams. Producers create requests, drivers handle routes, and managers track orders through a Next.js dashboard and React Native apps. The system uses Firebase for live updates, role-based access, notifications, and Greek-first localization.",
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
        "A gym management platform for scheduling, members, and subscriptions. I built the React Native app, Node.js API layer, tenant separation with Clerk and Neon PostgreSQL, and the admin tooling used to configure each gym.",
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
        "A compiler and stack-based virtual machine for the Alpha programming language. The project covers lexical analysis, parsing, semantic checks, intermediate code, bytecode execution, nested scopes, closures, and reference-counted memory management.",
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
        "A C project for HY240 that models a movie platform with command-driven program flow and manual data-structure management.",
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
        "A hackathon project that turns study material into summaries, flashcards, and quizzes from sources such as PDFs, DOCX files, and YouTube videos.",
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
        "Won 1st place with StudyPilot, a learning assistant that creates summaries, flashcards, and quizzes from PDFs, DOCX files, and YouTube videos.",
      image: "/Logo.svg",
      win: "1st Place",
      links: [
        {
          title: "Deck",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.figma.com/deck/sIZoFaxg7nzu09V4R2pLC8/StudyPilot--Copy-?node-id=18-55&p=f&viewport=-4195%2C336%2C0.15&t=I0FfsYGlIOmHreLJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        },
      ],
    },
    {
      title: "1st Place - OramaVR Hackathon at CS-150",
      dates: "May 2023",
      location: "OramaVR & University of Crete, Computer Science Department",
      description:
        "Built a multiplayer educational VR game in 72 hours with Unity and the MAGES SDK. The team placed 1st.",
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
