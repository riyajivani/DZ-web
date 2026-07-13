import { Search, Target, Palette, Code2, CheckCircle2, Rocket, HeartHandshake } from "lucide-react";
import {
  ReactLogo,
  VueLogo,
  NextLogo,
  NodeLogo,
  SpringLogo,
  DotnetLogo,
  AwsLogo,
  AzureLogo,
  DockerLogo,
  PostgresLogo,
  MysqlLogo,
  MongodbLogo,
} from "@/components/logos";

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
