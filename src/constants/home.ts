import { Code2, Smartphone, Cog, Brain } from "lucide-react";
import projConstruction from "@/assets/project-construction.jpg";
import projFieldApp from "@/assets/project-fieldapp.jpg";
import projLogistics from "@/assets/project-logistics.jpg";
import projAI from "@/assets/project-ai.jpg";

import avatarRajesh from "@/assets/avatar-rajesh.png";
import avatarPriya from "@/assets/avatar-priya.png";
import avatarAmit from "@/assets/avatar-amit.png";
import avatarSneha from "@/assets/avatar-sneha.png";
import avatarVikram from "@/assets/avatar-vikram.png";
import avatarWorkspace from "@/assets/avatar-workspace.png";

export const PARTNERS = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Salesforce",
  "Oracle",
  "SAP",
  "IBM",
  "Cisco",
  "Adobe",
  "Shopify",
  "HubSpot",
  "Twilio",
];

export const WHAT_WE_DO = [
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored enterprise solutions designed to solve specific industry bottlenecks and scale with your operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Powerful, offline-first mobile tools that empower field and site operations across iOS and Android.",
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    desc: "Eliminating manual errors by digitizing fragmented communication, approvals and reporting.",
  },
  {
    icon: Brain,
    title: "AI-Based Solutions",
    desc: "Future-ready intelligence layers that provide predictive insights for growth and efficiency.",
  },
];

export const PROJECTS = [
  {
    image: projConstruction,
    tag: "Custom Software",
    title: "Construction OS",
    client: "For a multi-site construction group",
    impact: "38% faster project closeouts",
    desc: "A unified operations platform replacing 6 spreadsheets — attendance, material tracking, progress reporting and approvals in one dashboard.",
  },
  {
    image: projFieldApp,
    tag: "Mobile App",
    title: "FieldPulse",
    client: "For a facility services company",
    impact: "60% drop in paperwork hours",
    desc: "Offline-first mobile app for 200+ field engineers — job cards, GPS check-ins, photo evidence and instant sync when back online.",
  },
  {
    image: projLogistics,
    tag: "Workflow Automation",
    title: "FleetFlow",
    client: "For a regional logistics operator",
    impact: "22% lower dispatch cost",
    desc: "Automated shipment routing, live fleet visibility and exception alerts — eliminating manual dispatch calls and reconciliation delays.",
  },
  {
    image: projAI,
    tag: "AI & Data",
    title: "PredictOps",
    client: "For a precision manufacturing plant",
    impact: "45% less unplanned downtime",
    desc: "Predictive maintenance layer over legacy PLC data — machine health scoring, anomaly alerts and root-cause dashboards for plant heads.",
  },
];

export const REASONS = [
  {
    title: "Deep Industry Expertise",
    desc: "We don't just write code — we understand construction, logistics, and manufacturing workflows to build solutions that actually fit.",
    bg: "bg-foreground",
    text: "text-background",
    sub: "text-background/70",
    ring: "border-background/40",
  },
  {
    title: "End-to-End Partnership",
    desc: "From discovery and design to deployment and scaling, we stay invested in your success long after the first release.",
    bg: "bg-copper",
    text: "text-white",
    sub: "text-white/80",
    ring: "border-white/50",
  },
  {
    title: "Future-Ready Architecture",
    desc: "Scalable, cloud-native systems built with modern tech so your platform grows as fast as your business does.",
    bg: "bg-surface-2",
    text: "text-foreground",
    sub: "text-foreground/70",
    ring: "border-foreground/40",
  },
  {
    title: "Transparent Communication",
    desc: "Weekly demos, clear timelines, and direct access to the team — no opaque processes or hidden surprises.",
    bg: "bg-foreground",
    text: "text-background",
    sub: "text-background/70",
    ring: "border-background/40",
  },
  {
    title: "Local Presence, Global Standards",
    desc: "Based in Gujarat with delivery practices that match world-class engineering teams around the globe.",
    bg: "bg-copper",
    text: "text-white",
    sub: "text-white/80",
    ring: "border-white/50",
  },
];

export const STATS = [
  { value: "90%", label: "Client satisfaction" },
  { value: "180+", label: "Project Successfully Done" },
  { value: "10K+", label: "Overall Revenue Raised" },
];

export const REVIEWS = [
  {
    quote: "DZ Infotech transformed how we manage our construction sites.",
    author: "Rajesh Patel",
    role: "Director",
    company: "Multi-Site Construction",
    rating: 5,
  },
  {
    quote: "Our field team loves the mobile app. Offline-first was a game-changer.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "Facility Services",
    rating: 5,
  },
  {
    quote: "The AI predictive maintenance saved us weeks of downtime.",
    author: "Amit Desai",
    role: "Plant Manager",
    company: "Precision Mfg",
    rating: 5,
  },
  {
    quote: "Professional, responsive, deeply technical. On time and within budget.",
    author: "Sneha Iyer",
    role: "Logistics Director",
    company: "Regional Logistics",
    rating: 5,
  },
];

export const REVIEW_AVATARS = {
  rajesh: avatarRajesh,
  priya: avatarPriya,
  amit: avatarAmit,
  sneha: avatarSneha,
  vikram: avatarVikram,
  workspace: avatarWorkspace,
  unbox: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=800&fit=crop",
};

// Card width + gap (px) — must stay in sync with card w-[280px]/md:w-[320px] + gap-5 (20px)
export const CARD_W_MOBILE = 280 + 20;
export const CARD_W_DESKTOP = 320 + 20;
// How much of a past (already-covered) card peeks out from the left
export const PEEK_MOBILE = 22;
export const PEEK_DESKTOP = 28;
