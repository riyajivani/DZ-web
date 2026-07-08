import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Search,
  Target,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import {
  PageShell,
  Container,
  SectionHeading,
  PartnerButton,
  CTAButton,
  Eyebrow,
} from "@/components/site";

// Import project images
import projConstruction from "@/assets/project-construction.jpg";
import projFieldApp from "@/assets/project-fieldapp.jpg";
import projLogistics from "@/assets/project-logistics.jpg";
import projAI from "@/assets/project-ai.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceSoftware from "@/assets/service-software.jpg";
import serviceWorkflow from "@/assets/service-workflow.jpg";
import projCloud from "@/assets/project-cloud.jpg";
import projCrm from "@/assets/project-crm.jpg";
import talkToUsBg from "@/assets/talkToUs-bg.png";

// Import Client Avatars for Testimonials
import avatarRajesh from "@/assets/avatar-rajesh.png";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarAmit from "@/assets/avatar-amit.png";
import avatarSneha from "@/assets/avatar-sneha.png";
import avatarVikram from "@/assets/avatar-vikram.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DZ Infotech" },
      {
        name: "description",
        content:
          "Custom software, mobile app development, workflow automation and AI & data intelligence — expert engineering for modern industries.",
      },
      { property: "og:title", content: "DZ Infotech Services" },
      { property: "og:description", content: "Digital excellence for modern industries." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
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
    images: [serviceSoftware, projCloud, projLogistics],
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
    images: [serviceMobile, projFieldApp, projLogistics],
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
    images: [serviceWorkflow, projCrm, projConstruction],
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
    images: [serviceAi, projAI, projCloud],
  },
];

const PROCESS_STEPS = [
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

const ReactLogo = () => (
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

const VueLogo = () => (
  <svg className="h-7 w-7" viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M204.8 0H256L128 220.8L0 0H51.2L128 132.5L204.8 0Z" fill="#41B883" />
    <path d="M51.2 0L128 132.5L204.8 0H157.4L128 50.9L98.6 0H51.2Z" fill="#35495E" />
  </svg>
);

const NextLogo = () => (
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

const NodeLogo = () => (
  <svg
    className="h-7 w-7 text-[#339933]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1L2 6.8v11.4L12 23l10-5.8V6.8L12 1zm0 2.9l7.5 4.3v8.6L12 21.1l-7.5-4.3V8.2L12 3.9z" />
  </svg>
);

const SpringLogo = () => (
  <svg
    className="h-7 w-7 text-[#6DB33F]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.8 15.6c-.6.6-1.5 1-2.4 1.1-.9.1-1.9-.1-2.7-.6l.7-.7c1.3.4 2.8-.2 3.4-1.4.3-.6.4-1.2.2-1.8l1.4-.4c.3.9.1 1.9-.6 2.7z" />
  </svg>
);

const DotnetLogo = () => (
  <svg
    className="h-7 w-7 text-[#512BD4]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 15h-8v-2h2V9H8V7h8v2h-2v4h2v2z" />
  </svg>
);

const AwsLogo = () => (
  <svg
    className="h-7 w-7 text-[#FF9900]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm1 14.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1zm0-3c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v4.5z" />
  </svg>
);

const AzureLogo = () => (
  <svg
    className="h-7 w-7 text-[#0089D6]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 15h-8v-2h2V9H8V7h8v2h-2v4h2v2z" />
  </svg>
);

const DockerLogo = () => (
  <svg
    className="h-7 w-7 text-[#2496ED]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.9 8.8h-2.2v2.1h2.2v-2.1zm-2.7 0H9v2.1h2.2v-2.1zm-2.7 0H6.3v2.1h2.2v-2.1zm8.1 0H14v2.1h2.2v-2.1zm-8.1-2.6H6.3v2.1h2.2v-2.1zm2.7 0H9v2.1h2.2v-2.1zm2.7 0H14v2.1h2.2v-2.1z" />
  </svg>
);

const PostgresLogo = () => (
  <svg
    className="h-7 w-7 text-[#336791]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3 13.5H9v-2h6v2z" />
  </svg>
);

const MysqlLogo = () => (
  <svg
    className="h-7 w-7 text-[#00758F]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 11.5H8v-2h8v2z" />
  </svg>
);

const MongodbLogo = () => (
  <svg
    className="h-7 w-7 text-[#47A248]"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm1 14.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1zm0-3c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v5z" />
  </svg>
);
const TECHS_ROW_1 = [
  { name: "React", logo: ReactLogo },
  { name: "Vue.js", logo: VueLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "AWS", logo: AwsLogo },
  { name: "Azure", logo: AzureLogo },
  { name: "Docker", logo: DockerLogo },
];

const TECHS_ROW_2 = [
  { name: "Spring Boot", logo: SpringLogo },
  { name: "Node.js", logo: NodeLogo },
  { name: ".NET Core", logo: DotnetLogo },
  { name: "PostgreSQL", logo: PostgresLogo },
  { name: "MySQL", logo: MysqlLogo },
  { name: "MongoDB", logo: MongodbLogo },
];

const REVIEWS = [
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

const FAQs = [
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

function ServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeReviewIdx, setActiveReviewIdx] = useState(2);

  return (
    <PageShell>
      <div className="bg-white pt-24 pb-12 md:pt-28 md:pb-16 text-foreground">
        <Container>
          {/* Header Section */}
          <div className="relative">
            <h1 className="text-[12vw] font-bold tracking-tighter text-surface leading-[0.85] select-none md:text-[9vw]">
              Services
            </h1>

            <div className="border-t border-border/85 mt-4 mb-2" />

            <div className="flex justify-between items-center text-[10px]  text-muted-foreground uppercase tracking-widest py-1">
              <span>Engineering Excellence</span>
              <span>Next-Gen Systems</span>
            </div>

            <div className="border-t border-border/85 mt-2 mb-8" />
          </div>

          {/* Right Aligned Bracketed Intro Statement */}
          <div className="flex justify-end py-4 px-4 mb-10">
            <h2 className="max-w-3xl text-right text-lg font-medium tracking-tight text-muted-foreground md:text-xl leading-relaxed">
              [ We provide a range of top-quality services designed to help brands grow, connect,
              and stand out. With a focus on creativity, functionality, and results ]
            </h2>
          </div>

          {/* Minimal Statistic Section */}
          <div className="border-t border-b border-border/60 py-12 my-16 flex flex-col items-center gap-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-copper text-center">
              Delivering measurable results through thoughtful engineering.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-0 w-full md:flex md:items-center md:justify-between text-center">
              <div className="flex-1 px-4 border-r border-border/60 md:border-r-0">
                <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                  150+
                </div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                  Projects Delivered
                </div>
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden md:block h-10 w-px bg-border/60 shrink-0" />

              <div className="flex-1 px-4">
                <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                  8+
                </div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                  Industries
                </div>
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden md:block h-10 w-px bg-border/60 shrink-0" />

              <div className="flex-1 px-4 border-r border-border/60 md:border-r-0">
                <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                  98%
                </div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden md:block h-10 w-px bg-border/60 shrink-0" />

              <div className="flex-1 px-4">
                <div className="text-4xl font-extrabold text-copper tracking-tight md:text-5xl">
                  5+
                </div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* What We Build Intro Paragraph */}
          <div className="py-12 max-w-4xl mx-auto text-center md:py-16 mb-16">
            <h2 className="text-xs  uppercase tracking-widest text-copper mb-4">What We Build</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
              We engineer bespoke digital systems that turn complex workflow operational challenges
              into fluid, reliable, and high-yielding user experiences. By bridging advanced
              software design with robust back-end architecture, we give modern enterprises the
              structural agility to scale effortlessly.
            </p>
          </div>

          {/* Services List Section */}
          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <div key={s.title}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="border-t border-border/60 py-16 grid gap-10 md:grid-cols-12 md:py-24"
                >
                  {/* Left Column: Title, Points, and Inquire button */}
                  <div className="md:col-span-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {s.title}
                      </h3>
                      <ul className="mt-8 space-y-3.5 text-sm font-medium text-muted-foreground">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="hover:text-foreground transition-colors duration-200 cursor-default flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-copper/40" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 md:mt-0 pt-6">
                      <Link
                        to="/partner"
                        className="inline-flex items-center gap-1 text-md font-bold text-copper hover:text-copper-glow transition-colors group"
                      >
                        Inquire now
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Paragraph and Mockup Images Row */}
                  <div className="md:col-span-8 flex flex-col justify-between">
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
                      {s.desc}
                    </p>

                    {/* Images Showcase Row (3 images side by side) */}
                    <div className="mt-12 grid grid-cols-3 gap-3 md:gap-4">
                      {s.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="overflow-hidden rounded-2xl border border-border/60 bg-muted aspect-3/4"
                        >
                          <img
                            src={img}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>

                {/* Visual Break between every 2 services (inserted after 2nd service, index 1) */}
                {i === 1 && (
                  <div className="py-16 my-8 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-px bg-border/60" />
                    <blockquote className="my-8 max-w-2xl text-xl md:text-2xl font-light italic text-muted-foreground px-4">
                      "Technology should simplify business, not complicate it."
                    </blockquote>
                    <div className="w-24 h-px bg-border/60" />
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-border/60 w-full" />
          </div>
        </Container>
      </div>

      {/* Development Process Section */}
      <section className="py-20 md:py-28 bg-surface overflow-hidden">
        <Container>
          <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Our Development <span className="text-copper font-bold">Process</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
              A structured roadmap built to guarantee operational continuity, rigorous testing, and
              flawless delivery.
            </p>
          </div>

          {/* Desktop alternating horizontal timeline */}
          <div className="hidden md:block relative py-12">
            {/* Horizontal Center Line */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-copper/35 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isTop = idx % 2 === 0;
                return (
                  <div key={step.name} className="flex flex-col items-center text-center">
                    {isTop ? (
                      /* Top Step Content Block */
                      <div className="flex flex-col items-center justify-end h-[180px] mb-px">
                        {/* Circle Node with Icon */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono text-xs font-bold text-copper/60">
                            {idx + 1}.
                          </span>
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-copper text-copper bg-white hover:scale-105 transition-transform duration-300 shadow-[0_4px_12px_rgba(var(--copper),0.05)]">
                            <step.icon className="h-6 w-6" />
                          </div>
                        </div>
                        {/* Text Information */}
                        <div className="px-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                            {step.name}
                          </h4>
                          <p className="text-[11px] text-muted-foreground mt-1.5 max-w-[125px] mx-auto leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                        {/* Vertical Connector Line */}
                        <div className="w-[2px] h-8 bg-copper/30 mt-4" />
                      </div>
                    ) : (
                      /* Empty Spacer to align bottom steps */
                      <div className="h-[180px]" />
                    )}

                    {/* Connection Dot on the Horizontal Line */}
                    <div className="h-3.5 w-3.5 rounded-full bg-white border-2 border-copper z-20 shadow-xs" />

                    {!isTop ? (
                      /* Bottom Step Content Block */
                      <div className="flex flex-col items-center justify-start h-[180px] mt-px">
                        {/* Vertical Connector Line */}
                        <div className="w-[2px] h-8 bg-copper/30 mb-4" />
                        {/* Text Information */}
                        <div className="px-2 mb-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                            {step.name}
                          </h4>
                          <p className="text-[11px] text-muted-foreground mt-1.5 max-w-[125px] mx-auto leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                        {/* Circle Node with Icon */}
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-copper/60">
                            {idx + 1}.
                          </span>
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-copper text-copper bg-white hover:scale-105 transition-transform duration-300 shadow-[0_4px_12px_rgba(var(--copper),0.05)]">
                            <step.icon className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Empty Spacer to align top steps */
                      <div className="h-[180px]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile alternating vertical timeline */}
          <div className="block md:hidden relative py-8 px-2">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-copper/35 -translate-x-1/2 z-0" />

            <div className="relative z-10 flex flex-col gap-6">
              {PROCESS_STEPS.map((step, idx) => {
                const isRight = idx % 2 === 0;
                return (
                  <div
                    key={step.name}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 relative"
                  >
                    {/* Left Column (Content or Empty Spacer) */}
                    <div
                      className={`flex flex-col ${isRight ? "invisible pointer-events-none" : "items-end text-right px-1"}`}
                    >
                      {!isRight && (
                        <>
                          <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="font-mono text-xs font-bold text-copper/60">
                              {idx + 1}.
                            </span>
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-copper text-copper bg-white shadow-xs">
                              <step.icon className="h-5 w-5" />
                            </div>
                          </div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                            {step.name}
                          </h4>
                          <p className="text-[10px] text-muted-foreground mt-1 max-w-[140px] leading-relaxed">
                            {step.desc}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Middle Column (Center Line Connector) */}
                    <div className="flex items-center justify-center w-8 relative h-full">
                      {/* Connection Dot */}
                      <div className="h-3 w-3 rounded-full bg-white border-2 border-copper z-20 shadow-xs" />
                      {/* Horizontal extension line */}
                      <div
                        className={`absolute h-[2px] w-4 bg-copper/35 top-1/2 -translate-y-1/2 ${isRight ? "left-1/2" : "right-1/2"}`}
                      />
                    </div>

                    {/* Right Column (Content or Empty Spacer) */}
                    <div
                      className={`flex flex-col ${!isRight ? "invisible pointer-events-none" : "items-start text-left px-1"}`}
                    >
                      {isRight && (
                        <>
                          <div className="flex items-center gap-2 justify-start mb-1">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-copper text-copper bg-white shadow-xs">
                              <step.icon className="h-5 w-5" />
                            </div>
                            <span className="font-mono text-xs font-bold text-copper/60">
                              {idx + 1}.
                            </span>
                          </div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                            {step.name}
                          </h4>
                          <p className="text-[10px] text-muted-foreground mt-1 max-w-[140px] leading-relaxed">
                            {step.desc}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 md:py-28  w-full bg-white overflow-hidden border-t border-border/40">
        <Container>
          <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-16">
            <Eyebrow>Our Stack</Eyebrow>
            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Modern Technology <span className="text-copper font-bold">Stack</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
              We leverage reliable systems and lightweight modern frameworks to guarantee
              responsiveness and scalability.
            </p>
          </div>
        </Container>

        {/* Full-width Technology Horizontal Scroll Banners */}
        <div className="flex flex-col gap-6 relative w-full overflow-hidden mt-16">
          {/* Row 1: Scrolls Left */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...TECHS_ROW_1, ...TECHS_ROW_1, ...TECHS_ROW_1, ...TECHS_ROW_1].map((tech, i) => {
                const Logo = tech.logo;
                return (
                  <div
                    key={`${tech.name}-row1-${i}`}
                    className="mx-3 inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-background text-md font-bold tracking-wide text-foreground/80 md:mx-4 md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                  >
                    <Logo />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[...TECHS_ROW_2, ...TECHS_ROW_2, ...TECHS_ROW_2, ...TECHS_ROW_2].map((tech, i) => {
                const Logo = tech.logo;
                return (
                  <div
                    key={`${tech.name}-row2-${i}`}
                    className="mx-3 inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-background text-md font-bold tracking-wide text-foreground/80 md:mx-4 md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                  >
                    <Logo />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
            <Eyebrow>TESTIMONIALS</Eyebrow>
            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What Our Client <span className="text-copper font-bold">Say!</span>
            </h2>
          </div>

          <div className="relative flex flex-col items-center justify-center min-h-[460px] w-full max-w-6xl mx-auto px-4 mt-6">
            {/* Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 md:px-8">
              <button
                onClick={() =>
                  setActiveReviewIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
                }
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white hover:bg-surface text-foreground shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveReviewIdx((prev) => (prev + 1) % REVIEWS.length)}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white hover:bg-surface text-foreground shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Cards Container */}
            <div className="flex items-center justify-center gap-6 md:gap-8 w-full max-w-5xl px-8">
              {/* Left Card (Hidden on Mobile) */}
              {(() => {
                const leftIdx = (activeReviewIdx - 1 + REVIEWS.length) % REVIEWS.length;
                const review = REVIEWS[leftIdx];
                return (
                  <div
                    onClick={() => setActiveReviewIdx(leftIdx)}
                    className="hidden md:flex flex-col justify-between p-8 rounded-3xl border border-border/40 bg-white opacity-85 scale-95 cursor-pointer hover:opacity-100 transition-all duration-500 w-full max-w-[360px] min-h-[380px] shrink-0 select-none shadow-sm"
                  >
                    <div>
                      <Quote className="h-8 w-8 text-copper mb-4 rotate-180 opacity-60" />
                      <p className="text-sm text-foreground/80 leading-relaxed italic">
                        "{review.quote}"
                      </p>
                    </div>
                    <div>
                      <div className="border-t border-border/20 my-4" />
                      <div className="flex items-center gap-3">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="h-10 w-10 rounded-full object-cover border border-border/40"
                        />
                        <div className="text-left">
                          <h4 className="text-sm font-bold text-foreground leading-none">
                            {review.author}
                          </h4>
                          <span className="text-xs text-muted-foreground mt-1 block">
                            {review.role}, {review.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Center Active Card */}
              {(() => {
                const review = REVIEWS[activeReviewIdx];
                return (
                  <div className="flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-copper/35 bg-white opacity-100 scale-100 md:scale-105 shadow-xl transition-all duration-500 w-full max-w-[440px] min-h-[390px] shrink-0 relative z-10">
                    <div>
                      <Quote className="h-10 w-10 text-copper mb-5 rotate-180 fill-copper/5" />
                      <p className="text-base text-foreground leading-relaxed italic font-medium">
                        "{review.quote}"
                      </p>
                    </div>
                    <div>
                      <div className="border-t border-border/40 my-5" />
                      <div className="flex items-center gap-4">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="h-12 w-12 rounded-full object-cover border border-border/60"
                        />
                        <div className="text-left">
                          <h4 className="text-md font-bold text-foreground leading-none">
                            {review.author}
                          </h4>
                          <span className="text-xs text-muted-foreground mt-1 block">
                            {review.role}, {review.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Right Card (Hidden on Mobile) */}
              {(() => {
                const rightIdx = (activeReviewIdx + 1) % REVIEWS.length;
                const review = REVIEWS[rightIdx];
                return (
                  <div
                    onClick={() => setActiveReviewIdx(rightIdx)}
                    className="hidden md:flex flex-col justify-between p-8 rounded-3xl border border-border/40 bg-white opacity-85 scale-95 cursor-pointer hover:opacity-100 transition-all duration-500 w-full max-w-[360px] min-h-[380px] shrink-0 select-none shadow-sm"
                  >
                    <div>
                      <Quote className="h-8 w-8 text-copper mb-4 rotate-180 opacity-60" />
                      <p className="text-sm text-foreground/80 leading-relaxed italic">
                        "{review.quote}"
                      </p>
                    </div>
                    <div>
                      <div className="border-t border-border/20 my-4" />
                      <div className="flex items-center gap-3">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="h-10 w-10 rounded-full object-cover border border-border/40"
                        />
                        <div className="text-left">
                          <h4 className="text-sm font-bold text-foreground leading-none">
                            {review.author}
                          </h4>
                          <span className="text-xs text-muted-foreground mt-1 block">
                            {review.role}, {review.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-8 z-20">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReviewIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeReviewIdx
                      ? "bg-copper scale-125"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="mb-14 flex flex-col items-center gap-3 text-center md:mb-20">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Frequently Asked <span className="text-copper font-bold">Questions</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
              Clear answers to core collaboration concerns and technical engagement parameters.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="border-b border-border/60 pb-4">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-4 font-bold text-foreground text-base md:text-lg hover:text-copper transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-copper shrink-0 ml-4">
                      {isExpanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded
                        ? "max-h-[200px] opacity-100 mt-2"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Let's Talk CTA Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Image with Low Opacity */}
        <img
          src={talkToUsBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.2] pointer-events-none select-none z-0"
        />
        <Container className="relative z-10">
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            {/* Soft decorative glow */}
            <div className="pointer-events-none absolute left-1/2 -top-24 h-72 w-80 -translate-x-1/2 rounded-full bg-copper/5 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 -bottom-32 h-[450px] w-[450px] rounded-full bg-copper-light/5 blur-[130px]" />

            <Eyebrow>Let's talk</Eyebrow>

            <h2 className="mt-2 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Have a project in mind?{" "}
              <span className="text-copper font-bold block mt-2 md:inline md:mt-0">
                Let's build it.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
              Connect with our senior engineering team today to review your project roadmap and
              receive a detailed, cost-effective implementation strategy.
            </p>

            <div className="mt-6 relative flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <PartnerButton variant="primary" />
              <CTAButton to="/about" variant="ghost">
                About us
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
