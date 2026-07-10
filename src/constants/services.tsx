import { Search, Target, Palette, Code2, CheckCircle2, Rocket, HeartHandshake } from "lucide-react";

// Import project images
import projConstruction from "@/assets/project-construction.jpg";
import projFieldApp from "@/assets/project-fieldapp.jpg";
import projLogistics from "@/assets/project-logistics.jpg";
import projAI from "@/assets/project-ai.jpg";
import projCloud from "@/assets/project-cloud.jpg";

import customSoft1 from "@/assets/custom-soft1.png";
import customSoft2 from "@/assets/custom-soft2.png";
import AppDev1 from "@/assets/app-dev1.png";
import AppDev2 from "@/assets/app-dev2.png";
import AppDev3 from "@/assets/app-dev3.png";
import Erp1 from "@/assets/erp1.png";
import Erp2 from "@/assets/erp2.png";
import AiService1 from "@/assets/ai-service1.png";
import AiService2 from "@/assets/ai-service2.png";

// Import Client Avatars for Testimonials
import avatarRajesh from "@/assets/avatar-rajesh.png";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarAmit from "@/assets/avatar-amit.png";
import avatarSneha from "@/assets/avatar-sneha.png";
import avatarVikram from "@/assets/avatar-vikram.png";

export const SERVICES = [
  {
    title: "Custom Software Development",
    desc: "We build tailored enterprise-grade software designed to solve specific business bottlenecks and scale with your growth.",
    points: [
      "Enterprise Architecture",
      "Cloud-Native Solutions",
      "Legacy Modernization",
      "API Integration",
      "Database Administration",
    ],
    images: [customSoft1, projCloud, customSoft2],
  },
  {
    title: "Mobile App Development",
    desc: "High-performance, offline-first mobile applications built for field operations and seamless user experiences on iOS and Android.",
    points: [
      "Flutter & React Native",
      "Offline Data Sync",
      "GPS & Telemetry",
      "User-Centric UI/UX",
      "App Store Deployment",
    ],
    images: [AppDev1, AppDev3, AppDev2],
  },
  {
    title: "Workflow Automation",
    desc: "Digitize fragmented communication and manual processes to eliminate errors and improve operational transparency.",
    points: [
      "Process Mapping",
      "Automated Reporting",
      "Resource Optimization",
      "Real-time Notifications",
      "Custom ERP Integrations",
    ],
    images: [Erp1, projConstruction, Erp2],
  },
  {
    title: "AI & Data Intelligence",
    desc: "Future-ready intelligence layers that provide predictive insights, helping you make data-driven decisions to protect your margins.",
    points: [
      "Predictive Analytics",
      "Machine Learning Models",
      "Data Visualization",
      "Anomaly Detection",
      "Business Intelligence Systems",
    ],
    images: [AiService1, projAI, AiService2],
  },
];

export const PROCESS_STEPS = [
  {
    name: "Discover",
    desc: "Domain research & mapping current operational workflows.",
    icon: Search,
  },
  {
    name: "Strategy",
    desc: "Technology mapping & technical specs strategy.",
    icon: Target,
  },
  {
    name: "Design",
    desc: "Interactive prototyping & user flow design.",
    icon: Palette,
  },
  {
    name: "Development",
    desc: "Type-safe robust coding with active integration.",
    icon: Code2,
  },
  {
    name: "Testing",
    desc: "Automated testing suites & user testing loops.",
    icon: CheckCircle2,
  },
  {
    name: "Deployment",
    desc: "Isolated containers & zero-downtime cloud deploy.",
    icon: Rocket,
  },
  {
    name: "Support",
    desc: "Active health checks, updates, and maintenance.",
    icon: HeartHandshake,
  },
];

export const ReactLogo = () => (
  <svg
    className="h-7 w-7 text-[#61DAFB] animate-spin"
    style={{ animationDuration: "15s" }}
    viewBox="-11.5 -10.2 23 20.4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const VueLogo = () => (
  <svg className="h-7 w-7" viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M204.8 0H256L128 220.8L0 0H51.2L128 132.5L204.8 0Z" fill="#41B883" />
    <path d="M51.2 0L128 132.5L204.8 0H157.4L128 50.9L98.6 0H51.2Z" fill="#35495E" />
  </svg>
);

export const NextLogo = () => (
  <svg
    className="h-7 w-7 text-neutral-900 dark:text-white"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path d="M149.5 157.5L69.1 54H54v72h11.9V67.1l72.1 92.9c4.2-.7 8-1.6 11.5-2.5z" fill="white" />
    <rect x="115" y="54" width="12" height="72" fill="white" />
  </svg>
);

export const NodeLogo = () => (
  <svg
    className="h-7 w-7 text-[#339933]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1L2 6.8v11.4L12 23l10-5.8V6.8L12 1zm0 2.9l7.5 4.3v8.6L12 21.1l-7.5-4.3V8.2L12 3.9z" />
  </svg>
);

export const SpringLogo = () => (
  <svg
    className="h-7 w-7 text-[#6DB33F]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.8 15.6c-.6.6-1.5 1-2.4 1.1-.9.1-1.9-.1-2.7-.6l.7-.7c1.3.4 2.8-.2 3.4-1.4.3-.6.4-1.2.2-1.8l1.4-.4c.3.9.1 1.9-.6 2.7z" />
  </svg>
);

export const DotnetLogo = () => (
  <svg
    className="h-7 w-7 text-[#512BD4]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 15h-8v-2h2V9H8V7h8v2h-2v4h2v2z" />
  </svg>
);

export const AwsLogo = () => (
  <svg
    className="h-7 w-7 text-[#FF9900]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm1 14.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1zm0-3c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v4.5z" />
  </svg>
);

export const AzureLogo = () => (
  <svg
    className="h-7 w-7 text-[#0089D6]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 15h-8v-2h2V9H8V7h8v2h-2v4h2v2z" />
  </svg>
);

export const DockerLogo = () => (
  <svg
    className="h-7 w-7 text-[#2496ED]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.9 8.8h-2.2v2.1h2.2v-2.1zm-2.7 0H9v2.1h2.2v-2.1zm-2.7 0H6.3v2.1h2.2v-2.1zm8.1 0H14v2.1h2.2v-2.1zm-8.1-2.6H6.3v2.1h2.2v-2.1zm2.7 0H9v2.1h2.2v-2.1zm2.7 0H14v2.1h2.2v-2.1z" />
  </svg>
);

export const PostgresLogo = () => (
  <svg
    className="h-7 w-7 text-[#336791]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3 13.5H9v-2h6v2z" />
  </svg>
);

export const MysqlLogo = () => (
  <svg
    className="h-7 w-7 text-[#00758F]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 11.5H8v-2h8v2z" />
  </svg>
);

export const MongodbLogo = () => (
  <svg
    className="h-7 w-7 text-[#47A248]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm1 14.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1zm0-3c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v5z" />
  </svg>
);

export const TECHS_ROW_1 = [
  { name: "React", logo: ReactLogo },
  { name: "Vue.js", logo: VueLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "AWS", logo: AwsLogo },
  { name: "Azure", logo: AzureLogo },
  { name: "Docker", logo: DockerLogo },
];

export const TECHS_ROW_2 = [
  { name: "Spring Boot", logo: SpringLogo },
  { name: "Node.js", logo: NodeLogo },
  { name: ".NET Core", logo: DotnetLogo },
  { name: "PostgreSQL", logo: PostgresLogo },
  { name: "MySQL", logo: MysqlLogo },
  { name: "MongoDB", logo: MongodbLogo },
];

export const REVIEWS = [
  {
    quote:
      "DZ Infotech transformed how we manage our construction sites. Their enterprise engineering team built an offline-first system that handles real-time synchronization across hundreds of remote projects. The architecture they designed has dramatically reduced communication delays and boosted project safety metrics across our entire national portfolio.",
    author: "Rajesh Patel",
    role: "Director of Infrastructure",
    company: "Multi-Site Construction",
    avatar: avatarRajesh,
  },
  {
    quote:
      "Our field team absolutely loves the custom mobile app. Building an offline-first solution was a critical game-changer for operations in remote agricultural regions. DZ Infotech's ability to maintain high data reliability and seamless background sync has saved us countless hours of manual data entry.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "Facility Services Group",
    avatar: avatarPriya,
  },
  {
    quote:
      "The custom AI predictive maintenance system integrated by DZ Infotech has saved our manufacturing plants weeks of unexpected downtime. By analyzing sensor telemetry data in real-time, we can schedule repairs before failures occur. Their engineering team is professional, deeply technical, and exceptionally responsive.",
    author: "Amit Desai",
    role: "Chief of Engineering",
    company: "Precision Mfg",
    avatar: avatarAmit,
  },
  {
    quote:
      "DZ Infotech delivered a modular warehouse management system that handles complex routing and inventory tracking seamlessly. Their team is exceptionally detail-oriented and integrated easily with our legacy databases with zero downtime. They are a highly skilled partner we plan to work with for years.",
    author: "Sneha Iyer",
    role: "Logistics Director",
    company: "Regional Logistics Group",
    avatar: avatarSneha,
  },
  {
    quote:
      "The modern customer portal built by DZ Infotech has drastically improved our digital retention. Their design system was executed with pixel-perfect precision, and the performance optimizations they implemented reduced our average load times by over 40%. The collaborative workflow was incredibly productive.",
    author: "Vikram Malhotra",
    role: "Head of Digital Experience",
    company: "Fintech Solutions Inc.",
    avatar: avatarVikram,
  },
];

export const FAQs = [
  {
    question: "How long does custom software development take?",
    answer:
      "Project timelines depend entirely on scope and complexity. Typically, MVP developments range from 3 to 4 months, while larger enterprise software suites or SaaS platforms take 6 to 9 months. We always work in structured two-week sprints so you can see live progress.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDA)?",
    answer:
      "Yes, we sign NDAs prior to any technical consultations or sharing of proprietary workflows. Protecting your intellectual property and data confidentiality is our primary priority.",
  },
  {
    question: "Can you modernize and upgrade existing software platforms?",
    answer:
      "Absolutely. We specialize in legacy modernization, database migrations, and converting legacy systems into modular, cloud-native API architectures. We implement these with zero operational downtime for your business.",
  },
  {
    question: "Do you provide ongoing support and system maintenance?",
    answer:
      "Yes, we offer monthly SLA support agreements that cover security patches, bug fixes, third-party API updates, scaling assistance, database optimizations, and system feature enhancements.",
  },
];
