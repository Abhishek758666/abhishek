import { Facebook, Github, Linkedin } from "lucide-react";
import type { ExperienceType } from "./experience";
import type { Skill } from "./skills";
import type { SocialLink } from "./social-links";

export const SKILLS: Skill[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Next js",
  "Node Js",
  "Express js",
  "PostgreSQL",
  "Sequelize",
].map((title) => ({ title }));

export const EXPERIENCE: ExperienceType[] = [
  {
    jobTitle: "Frontend Developer",
    company: "A5SYNC",
    period: "June 2025 - current",
    description:
      "Worked on various modules such as Order, Fulfillment, and Channel SKUs, and contributed to the redesign of the Platform, Reseller Portal, and Storefront.",
  },
  {
    jobTitle: "Frontend Developer",
    company: "Reflex It Solution",
    period: "March 2024 - June 2025",
    description:
      "Developed 5+ projects, including booking, e-commerce, and real estate websites with dashboards and client-facing pages, using Next.js, TypeScript, SCSS, and Redux Toolkit.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    link: "https://www.linkedin.com/in/abhishek-khati-b4a427299/",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn Profile",
  },
  {
    link: "https://github.com/Abhishek758666/",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub Profile",
  },
  {
    link: "https://www.facebook.com/profile.php?id=100055382902789",
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook Profile",
  },
];
