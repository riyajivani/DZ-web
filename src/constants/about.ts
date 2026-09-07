import { Sparkles, Layers, Globe, Cpu } from "lucide-react";
import theIdeaImg from "@/assets/the-idea.png";
import prototypePhaseImg from "@/assets/prototype-phase.png";
import dzFoundationImg from "@/assets/dz-foundation.png";
import mvpLaunchImg from "@/assets/mvp-launch.png";
import proofOfConceptImg from "@/assets/proof-of-concept.png";
import industryExpansionImg from "@/assets/industry-expansion.png";

export const TIMELINE = [
  {
    when: "Milestone 01",
    title: "The Idea",
    desc: "Concept conceived after identifying key operational and workflow inefficiencies faced by growing businesses.",
    bgImage: theIdeaImg,
  },
  {
    when: "Milestone 02",
    title: "Prototype Phase",
    desc: "First working prototypes developed, focusing on custom software architectures and automated reporting.",
    bgImage: prototypePhaseImg,
  },
  {
    when: "Milestone 03",
    title: "DZ Infotech Foundation",
    desc: "DZ Infotech officially registered as a technology firm in Bhavnagar, Gujarat.",
    bgImage: dzFoundationImg,
  },
  {
    when: "Milestone 04",
    title: "MVP Launch",
    desc: "First suite of custom digital platforms and workflow automation modules launched for client operations.",
    bgImage: mvpLaunchImg,
  },
  {
    when: "Milestone 05",
    title: "Proof of Concept",
    desc: "Custom solutions and automated software successfully deployed across early business partners for live feedback.",
    bgImage: proofOfConceptImg,
  },
  {
    when: "Milestone 06",
    title: "Industry Expansion",
    desc: "Expanding our digital intelligence platform and AI-driven software development across diverse industries.",
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
