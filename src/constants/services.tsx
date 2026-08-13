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
import wapp1 from "@/assets/whatsapp_api.png";
import customSoft1 from "@/assets/custom_soft_development.png";
import AiService1 from "@/assets/ai_business.png";
import wf1 from "@/assets/workflow_automation.png";

// Import Client Avatars for Testimonials
import avatarRajesh from "@/assets/avatar-rajesh.png";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarAmit from "@/assets/avatar-amit.png";
import avatarSneha from "@/assets/avatar-sneha.png";
import avatarVikram from "@/assets/avatar-vikram.png";

export const SERVICES = [
  {
    title: "Custom Software Development",
    desc: "Build software around the way your business actually operates.",
    points: [
      "Custom Web Applications",
      "Custom Business Software",
      "CRM & ERP Development",
      "API & Third-Party Integrations",
      "Cloud-Based Applications",
    ],
    images: [customSoft1],
  },
  {
    title: "WhatsApp API Integration",
    desc: "Turn WhatsApp into a powerful business communication and automation channel.",
    points: [
      "WhatsApp API Setup & Verification",
      "Automated Alerts & Notifications",
      "AI Chatbots & Flow Automation",
      "Multi-Agent Shared Inbox",
      "CRM, ERP & Database Integration",
    ],
    images: [wapp1],
  },
  {
    title: "Workflow Automation",
    desc: "Reduce repetitive work and connect your business processes.",
    points: [
      "Business Process Automatio",
      "Automated Reports & Dashboards",
      "Task & Approval Automation",
      "Real-time Notifications",
      "CRM & ERP Workflow Integration",
    ],
    images: [wf1],
  },
  {
    title: "AI & Business Intelligence",
    desc: "Turn your business data into actionable insights with AI..",
    points: [
      "AI-Powered Business Assistants",
      "AI Chatbots & Customer Support",
      "Business Analytics & Dashboards",
      "AI-Powered Data Insights",
      "Predictive Business Analyticss",
    ],
    images: [AiService1],
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

export const STEP_COLORS = [
  {
    bg: "bg-[#EBF5FF] dark:bg-[#1E293B]",
    text: "text-[#1E40AF] dark:text-[#93C5FD]",
    icon: "text-[#3B82F6]",
    iconBg: "bg-[#DBEAFE] dark:bg-[#1E3A8A]/50",
    hover: "hover:bg-[#DBEAFE] dark:hover:bg-[#334155]",
    border: "bg-[#1E40AF]/30 dark:bg-[#93C5FD]/30"
  },
  {
    bg: "bg-[#F5F3FF] dark:bg-[#1E293B]",
    text: "text-[#5B21B6] dark:text-[#C084FC]",
    icon: "text-[#8B5CF6]",
    iconBg: "bg-[#EDE9FE] dark:bg-[#4C1D95]/50",
    hover: "hover:bg-[#EDE9FE] dark:hover:bg-[#334155]",
    border: "bg-[#5B21B6]/30 dark:bg-[#C084FC]/30"
  },
  {
    bg: "bg-[#FDF2F8] dark:bg-[#1E293B]",
    text: "text-[#9D174D] dark:text-[#F472B6]",
    icon: "text-[#EC4899]",
    iconBg: "bg-[#FCE7F3] dark:bg-[#831843]/50",
    hover: "hover:bg-[#FCE7F3] dark:hover:bg-[#334155]",
    border: "bg-[#9D174D]/30 dark:bg-[#F472B6]/30"
  },
  {
    bg: "bg-[#FFFBEB] dark:bg-[#1E293B]",
    text: "text-[#92400E] dark:text-[#FCD34D]",
    icon: "text-[#F59E0B]",
    iconBg: "bg-[#FEF3C7] dark:bg-[#78350F]/50",
    hover: "hover:bg-[#FEF3C7] dark:hover:bg-[#334155]",
    border: "bg-[#92400E]/30 dark:bg-[#FCD34D]/30"
  },
  {
    bg: "bg-[#F0FDFA] dark:bg-[#1E293B]",
    text: "text-[#115E59] dark:text-[#2DD4BF]",
    icon: "text-[#14B8A6]",
    iconBg: "bg-[#CCFBF1] dark:bg-[#115E59]/50",
    hover: "hover:bg-[#CCFBF1] dark:hover:bg-[#334155]",
    border: "bg-[#115E59]/30 dark:bg-[#2DD4BF]/30"
  },
  {
    bg: "bg-[#F0FDF4] dark:bg-[#1E293B]",
    text: "text-[#166534] dark:text-[#86EFAC]",
    icon: "text-[#22C55E]",
    iconBg: "bg-[#DCFCE7] dark:bg-[#064E3B]/50",
    hover: "hover:bg-[#DCFCE7] dark:hover:bg-[#334155]",
    border: "bg-[#166534]/30 dark:bg-[#86EFAC]/30"
  },
  {
    bg: "bg-[#FFF5F5] dark:bg-[#1E293B]",
    text: "text-[#C53030] dark:text-[#FEB2B2]",
    icon: "text-[#F56565]",
    iconBg: "bg-[#FED7D7] dark:bg-[#742A2A]/50",
    hover: "hover:bg-[#FED7D7] dark:hover:bg-[#334155]",
    border: "bg-[#C53030]/30 dark:bg-[#FEB2B2]/30"
  }
];