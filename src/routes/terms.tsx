import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldAlert, Scale, Code, AlertCircle, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { PageShell, Container } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — DZ Infotech" },
      {
        name: "description",
        content:
          "Read the Terms of Service and Website Usage Terms for DZ Infotech Partnership Firm. Understand your rights, obligations, and legal agreements.",
      },
      { property: "og:title", content: "Terms of Service — DZ Infotech" },
      {
        property: "og:description",
        content: "Legal terms governing access to DZ Infotech website, software services, and client contracts.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const lastUpdated = "September 7, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: CheckCircle2,
      title: "1. Acceptance of Terms",
      content: (
        <div className="space-y-3">
          <p>
            Welcome to DZ Infotech Partnership Firm (&quot;DZ Infotech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website (<code className="rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-800">dzinfotech.in</code>), digital platforms, software prototypes, and custom software engineering services.
          </p>
          <p>
            By visiting our website, submitting project inquiry forms, or entering into formal Statement of Work (&quot;SOW&quot;) contracts with us, you agree to comply with and be bound by these Terms and our <Link to="/privacy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</Link>. If you disagree with any part of these terms, you must immediately discontinue use of our site and services.
          </p>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      icon: Code,
      title: "2. Intellectual Property Rights",
      content: (
        <div className="space-y-4">
          <p>
            All content, source code, visual designs, brand assets, logos (<code className="rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-800">DZ Infotech</code>), graphics, icons, software components, and text on this website are the exclusive property of DZ Infotech Partnership Firm or its licensors and are protected under Indian and international copyright, trademark, and intellectual property laws.
          </p>
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs text-neutral-700 space-y-2">
            <h4 className="font-semibold text-blue-950 text-sm">Client Deliverables & IP Ownership</h4>
            <p>
              For custom software engineering engagements, IP assignment and license transfers are explicitly governed by individual Master Services Agreements (&quot;MSA&quot;) or Statement of Work (&quot;SOW&quot;) documents executed between DZ Infotech and the client upon full payment of agreed fees.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "services-engagement",
      icon: FileText,
      title: "3. Professional Services & Client Engagements",
      content: (
        <div className="space-y-3">
          <p>
            DZ Infotech provides custom software architecture, web development, mobile application development, workflow automation, ERP/CRM integrations, and AI intelligence solutions.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
            <li><strong className="text-neutral-800">Proposals & Estimates:</strong> Project quotes and timelines provided via website contact forms or email proposals are valid for 30 days unless specified otherwise.</li>
            <li><strong className="text-neutral-800">Scope of Work:</strong> Specific deliverables, milestone schedules, revision cycles, and payment schedules are governed by individual written agreements signed by both parties.</li>
            <li><strong className="text-neutral-800">Client Cooperation:</strong> Timely provision of required business logic, assets, feedback, and approvals is necessary for project completion according to scheduled timelines.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "acceptable-use",
      icon: ShieldAlert,
      title: "4. User Conduct & Acceptable Use",
      content: (
        <div className="space-y-3">
          <p>When interacting with our website or digital assets, you agree NOT to:</p>
          <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
            <li>Attempt to probe, scan, or test the vulnerability of any DZ Infotech server, database, or network infrastructure.</li>
            <li>Decompile, reverse-engineer, or disassemble any pre-release code, web component, or proprietary software demo hosted on our domain.</li>
            <li>Use automated scrapers, bots, or data-extraction tools to harvest content, images, or business contacts without prior written authorization.</li>
            <li>Submit false, misleading, defamatory, or malicious content through our contact or partner inquiry forms.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "disclaimers",
      icon: AlertCircle,
      title: "5. Disclaimers & Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            This website and its information are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or non-infringement.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-900 space-y-1.5">
            <h4 className="font-semibold text-amber-950">Limitation of Liability</h4>
            <p>
              To the maximum extent permitted by applicable law, DZ Infotech Partnership Firm, its partners, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or business goodwill) arising from your access to or inability to use this website.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "governing-law",
      icon: Scale,
      title: "6. Governing Law & Legal Jurisdiction",
      content: (
        <div className="space-y-3">
          <p>
            These Terms of Service and any dispute, claim, or controversy arising out of or related to them shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles.
          </p>
          <p>
            You agree that any legal action or proceeding arising under or in connection with these Terms or your engagement with DZ Infotech shall be subject to the exclusive jurisdiction of the competent courts situated in <strong className="text-neutral-900">Bhavnagar, Gujarat, India</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "modifications",
      icon: FileText,
      title: "7. Modifications to Terms",
      content: (
        <div className="space-y-3">
          <p>
            We reserve the right to revise or modify these Terms at any time. Changes will become effective immediately upon posting to this page with an updated &quot;Last Revised&quot; date. Continued use of our site following any changes constitutes your acceptance of the updated Terms.
          </p>
        </div>
      ),
    },
  ];

  return (
    <PageShell>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-neutral-50/50 pt-32 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />
        
        <Container className="relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-100/50 px-3.5 py-1 text-xs font-semibold text-blue-800 backdrop-blur-xs">
              <Scale className="h-3.5 w-3.5" /> Legal Agreement
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
              Standard terms and conditions governing the use of our website, software consulting, and technology partnerships.
            </p>
            <div className="mt-4 text-xs font-medium text-neutral-500">
              Last Revised: <span className="text-neutral-800">{lastUpdated}</span>
            </div>
          </div>

          {/* Main Layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            {/* TOC */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Table of Contents
                </h3>
                <nav className="mt-4 flex flex-col space-y-2 text-xs">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-neutral-600 transition-colors hover:bg-blue-50 hover:text-blue-700 font-medium"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 text-blue-600" />
                    </a>
                  ))}
                </nav>

                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-xs text-neutral-600">
                  <p className="font-semibold text-blue-950">Legal Inquiries?</p>
                  <p className="mt-1">Send contract or legal notices to <a href="mailto:info@dzinfotech.in" className="text-blue-600 hover:underline">info@dzinfotech.in</a>.</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 lg:col-span-8">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <section
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-28 rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-blue-200"
                  >
                    <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">{s.title}</h2>
                    </div>
                    <div className="mt-5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {s.content}
                    </div>
                  </section>
                );
              })}

              {/* Contact Box */}
              <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-900 to-sky-900 p-6 sm:p-8 text-white shadow-md">
                <h3 className="text-lg font-bold">DZ Infotech Legal Information</h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  For official legal correspondence or contractual inquiries regarding our Terms of Service:
                </p>
                <div className="mt-6 grid gap-4 text-xs sm:text-sm sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-sky-300 shrink-0" />
                    <span>info@dzinfotech.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-sky-300 shrink-0" />
                    <span>+91 93278 53727</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-sky-300 shrink-0" />
                    <span>Bhavnagar, Gujarat, India</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs">
                  <Link to="/privacy" className="text-sky-200 hover:text-white underline transition-colors">
                    View Privacy Policy
                  </Link>
                  <Link to="/cookies" className="text-sky-200 hover:text-white underline transition-colors">
                    View Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageShell>
  );
}
