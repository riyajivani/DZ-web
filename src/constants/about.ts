import { Sparkles, Layers, Globe, Cpu } from "lucide-react";
import theIdeaImg from "@/assets/the-idea.png";
import prototypePhaseImg from "@/assets/prototype-phase.png";
import dzFoundationImg from "@/assets/dz-foundation.png";
import mvpLaunchImg from "@/assets/mvp-launch.png";
import proofOfConceptImg from "@/assets/proof-of-concept.png";
import industryExpansionImg from "@/assets/industry-expansion.png";

export const TIMELINE = [
  {
    when: "April 2025",
    title: "The Idea",
    desc: "Concept conceived after identifying operational challenges faced by contractors on real construction projects.",
    bgImage: theIdeaImg,
  },
  {
    when: "June – July 2025",
    title: "Prototype Phase",
    desc: "First working prototype developed, focusing on digital site execution and field-first reporting.",
    bgImage: prototypePhaseImg,
  },
  {
    when: "September 2025",
    title: "DZ Infotech Foundation",
    desc: "DZ Infotech officially registered as a technology firm in Bhavnagar, Gujarat.",
    bgImage: dzFoundationImg,
  },
  {
    when: "Late 2025",
    title: "MVP Launch",
    desc: "First flagship platform launched with DPR, progress tracking and attendance modules.",
    bgImage: mvpLaunchImg,
  },
  {
    when: "Early Adoption",
    title: "Proof of Concept",
    desc: "Solution successfully demonstrated to over 15 major contractors for live feedback.",
    bgImage: proofOfConceptImg,
  },
  {
    when: "Future Vision",
    title: "Industry Expansion",
    desc: "Expanding our digital intelligence platform to automate workflows across multiple heavy industries.",
    bgImage: industryExpansionImg,
  },
];

export const NEXT = [
  {
    icon: Sparkles,
    title: "AI Predictive Analytics",
    desc: "Leveraging machine learning models to forecast project delays, predict material cost variances, and optimize workforce allocation.",
  },
  {
    icon: Layers,
    title: "Workflow Automation",
    desc: "Expanding our proprietary workflow engines to seamlessly automate back-office operations and cross-system handoffs.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    desc: "Deploying high-performance edge servers globally to assure low latency and offline-first functionality for remote sites.",
  },
  {
    icon: Cpu,
    title: "Hardware Integration",
    desc: "Connecting telemetry modules, smart weighbridges, and IoT sensors directly to our real-time reporting pipeline.",
  },
];
