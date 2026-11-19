import {
  Calendar,
  Users,
  Award,
  Video,
  Laptop,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const INTERNSHIP_STATS = [
  { value: "3 Months", label: "Program Duration" },
  { value: "Live & Demo", label: "Dual Project Focus" },
  { value: "Interactive", label: "Mentorship Sessions" },
  { value: "Verified", label: "Certificate of Completion" },
];

export const INTERNSHIP_PILLARS = [
  {
    icon: Calendar,
    title: "3 Months Immersive Duration",
    desc: "A rigorous 12-week structured curriculum taking you from foundational engineering practices to end-to-end production-level execution.",
    badge: "12 Weeks",
  },
  {
    icon: Video,
    title: "Interactive Guidance Sessions",
    desc: "Regular live mentor sessions, technical masterclasses, interactive problem-solving discussions, and comprehensive code reviews.",
    badge: "Live Mentorship",
  },
  {
    icon: Laptop,
    title: "Individual Live Project",
    desc: "Every intern owns and builds a dedicated live industry project from scratch to deployment, mastering real-world problem-solving independently.",
    badge: "Solo Ownership",
  },
  {
    icon: Users,
    title: "Demo Group Projects",
    desc: "Experience collaborative Agile sprints, Git workflows, peer code reviews, and cross-functional team dynamics like in top tech companies.",
    badge: "Team Sprints",
  },
  {
    icon: Award,
    title: "Certificate of Completion",
    desc: "Earn an official, verified certificate from DZ Infotech showcasing your project accomplishments, performance, and industrial competencies.",
    badge: "Official Credential",
  },
  {
    icon: Sparkles,
    title: "Career-Accelerating Training",
    desc: "A paid, self-funded professional internship program designed for ambitious students seeking real industry exposure over empty theory.",
    badge: "Student Funded",
  },
];

export const CURRICULUM_PHASES = [
  {
    phase: "Month 01",
    tag: "Weeks 1 - 4",
    title: "Foundations, Architecture & Guided Sessions",
    desc: "Bridge the gap between academic theory and industry engineering standards through interactive masterclasses and guided workshops.",
    highlights: [
      "Software development lifecycle & clean architecture principles",
      "Git branching workflows, code organization & modular patterns",
      "Live mentor-led interactive sessions & problem-solving rounds",
      "Requirements breakdown, wireframing & project planning",
    ],
    icon: BookOpen,
  },
  {
    phase: "Month 02",
    tag: "Weeks 5 - 8",
    title: "Individual Live Project Deep-Dive",
    desc: "Take full ownership of your individual live project, tackling authentic technical challenges and building production-grade solutions.",
    highlights: [
      "Allocation of an individual live industry-modeled project",
      "Hands-on solo feature implementation & end-to-end integration",
      "Personalized 1-on-1 mentor guidance & periodic code reviews",
      "Debugging, error handling, performance tuning & deployment readiness",
    ],
    icon: Briefcase,
  },
  {
    phase: "Month 03",
    tag: "Weeks 9 - 12",
    title: "Demo Group Sprints, Review & Certification",
    desc: "Collaborate in team-based demo sprints, present your completed individual project, and receive your verified completion credentials.",
    highlights: [
      "Demo group project sprints simulating modern tech team environments",
      "Collaborative feature merges, agile standups & peer reviews",
      "Final project demonstrations, technical evaluations & portfolio preparation",
      "Award of the official DZ Infotech Certificate of Completion",
    ],
    icon: Award,
  },
];

export const WHY_INTERN = [
  {
    icon: Layers,
    title: "Real Industry Exposure",
    desc: "Leave toy tutorials behind. You will solve genuine challenges modeled on actual business requirements and production environments.",
  },
  {
    icon: Users,
    title: "Direct Practitioner Mentorship",
    desc: "Learn directly from active software engineers and solution architects through live interactive sessions and personalized feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Verifiable Credential",
    desc: "Receive an official Certificate of Completion validating your project deliverables, dedication, and technical competence.",
  },
  {
    icon: Compass,
    title: "Dual Project Portfolio",
    desc: "Graduate with both an individual live project demonstrating solo mastery and a demo group project demonstrating team collaboration.",
  },
];

export const ACADEMIC_YEARS = [
  "1st Year / Undergraduate",
  "2nd Year / Undergraduate",
  "3rd Year / Undergraduate",
  "Final Year / Graduating Soon",
  "Recent Graduate",
  "Postgraduate / Master's Student",
  "Other / Career Transition",
];

export const INTERNSHIP_FAQS = [
  {
    question: "What is the duration and format of the internship?",
    answer:
      "The program runs for a complete 3 months (12 weeks). It features a blended format including interactive mentor sessions, independent work on your individual live project, and collaborative sprints on demo group projects.",
  },
  {
    question: "Is this a paid internship, and what does the student fee cover?",
    answer:
      "This is an enrollment-based paid internship program where students invest in their professional development. Selected applicants pay an enrollment fee upon selection that covers personalized mentorship sessions, dedicated project infrastructure, rigorous code reviews, and the official certificate of completion. Specific enrollment details are shared upon application review.",
  },
  {
    question: "What are the core project components I will work on?",
    answer:
      "You will complete two key project components: an Individual Live Project where you have sole ownership of building and deploying a real-world system, and Demo Group Projects where you collaborate with fellow interns simulating real workplace Agile sprints.",
  },
  {
    question: "Do I need expertise in a specific tech stack to apply?",
    answer:
      "No specific tech stack is mandated for application. We look for strong foundational problem-solving abilities, logical thinking, curiosity, and commitment to learning. The program focuses on timeless software engineering principles and real-world system development.",
  },
  {
    question: "How are the interactive sessions scheduled?",
    answer:
      "Interactive sessions, workshops, and code reviews are scheduled flexibly with students' college and university schedules in mind, ensuring you can attend live sessions and balance your academic commitments comfortably.",
  },
  {
    question: "When and how will I receive my Certificate of Completion?",
    answer:
      "Upon fulfilling the 3-month milestones, successfully delivering your individual live project, and contributing to the demo group project sprints, you will be awarded an official, verifiable DZ Infotech Certificate of Completion.",
  },
];
