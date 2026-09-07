import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight, Lock, Eye, Database, UserCheck, RefreshCw } from "lucide-react";
import { PageShell, Container } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DZ Infotech" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of DZ Infotech Partnership Firm. Understand how we collect, process, store, and protect your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — DZ Infotech" },
      {
        property: "og:description",
        content: "Transparent data protection practices and privacy commitments at DZ Infotech.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "September 7, 2026";

  const sections = [
    {
      id: "introduction",
      icon: ShieldCheck,
      title: "1. Introduction & Overview",
      content: (
        <div className="space-y-3">
          <p>
            DZ Infotech Partnership Firm (&quot;DZ Infotech&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your information when you visit our website (<code className="rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-800">dzinfotech.in</code>) or engage with our custom software, web, mobile, cloud, automation, and AI consulting services.
          </p>
          <p>
            By accessing or using our services, you acknowledge that you have read, understood, and agreed to the collection and use of your information as described in this policy. If you do not agree with any part of this policy, please refrain from using our digital services.
          </p>
        </div>
      ),
    },
    {
      id: "information-collection",
      icon: Database,
      title: "2. Information We Collect",
      content: (
        <div className="space-y-4">
          <p>
            We collect personal information directly from you when you interact with our website, submit project inquiries, or enter into commercial agreements with us.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
              <h4 className="font-semibold text-blue-950 text-sm flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-blue-600" /> Information You Provide
              </h4>
              <ul className="mt-2 text-xs space-y-1.5 text-neutral-600 list-disc list-inside">
                <li>Full name and job title</li>
                <li>Contact details (email address, phone number)</li>
                <li>Company name, industry, and website URL</li>
                <li>Project requirements, specifications, and inquiry messages</li>
                <li>Billing and invoicing information for executed contracts</li>
              </ul>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/40 p-4">
              <h4 className="font-semibold text-blue-950 text-sm flex items-center gap-2">
                <Eye className="h-4 w-4 text-sky-600" /> Automated Technical Data
              </h4>
              <ul className="mt-2 text-xs space-y-1.5 text-neutral-600 list-disc list-inside">
                <li>IP address and geolocation parameters</li>
                <li>Browser type, version, and operating system</li>
                <li>Referring URLs, landing pages, and exit links</li>
                <li>Device attributes, screen resolution, and session durations</li>
                <li>Cookies and local browser storage identifiers</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use",
      icon: Eye,
      title: "3. How We Use Your Information",
      content: (
        <div className="space-y-3">
          <p>We use the collected information for specific, legitimate business purposes, including:</p>
          <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
            <li><strong className="text-neutral-800">Service Delivery:</strong> Providing custom software design, engineering, ERP/CRM implementations, and technical support.</li>
            <li><strong className="text-neutral-800">Client Communication:</strong> Responding to inquiry forms, issuing project estimates, scheduling discovery calls, and providing updates.</li>
            <li><strong className="text-neutral-800">Business Operations:</strong> Processing invoices, managing client partnerships, and complying with accounting standards.</li>
            <li><strong className="text-neutral-800">Website Enhancement:</strong> Monitoring traffic patterns, debugging technical issues, and optimizing overall user experience.</li>
            <li><strong className="text-neutral-800">Security & Compliance:</strong> Protecting against fraudulent activity, illegal access, and legal liability.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-sharing",
      icon: Lock,
      title: "4. Data Sharing & Third-Party Disclosures",
      content: (
        <div className="space-y-3">
          <p>
            DZ Infotech strictly respects your confidentiality. <strong className="text-neutral-800">We do not sell, rent, or trade your personal data to third-party marketers.</strong>
          </p>
          <p>We may share data under the following strictly limited circumstances:</p>
          <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
            <li><strong className="text-neutral-800">Trusted Infrastructure Vendors:</strong> Secure web hosting, cloud infrastructure, domain hosts, and transactional email service providers operating under confidentiality agreements.</li>
            <li><strong className="text-neutral-800">Legal Obligations:</strong> Compliance with valid court orders, law enforcement demands, or Indian regulatory mandates.</li>
            <li><strong className="text-neutral-800">Business Protection:</strong> Enforcing our terms of service, defending legal claims, or investigating security breaches.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "security-retention",
      icon: Lock,
      title: "5. Data Security & Retention",
      content: (
        <div className="space-y-3">
          <p>
            We deploy multi-layered security measures—including SSL/TLS transport encryption, access controls, restricted server environments, and firewalls—to safeguard your data against unauthorized access, loss, or disclosure.
          </p>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable tax, legal, and operational regulations in India.
          </p>
        </div>
      ),
    },
    {
      id: "user-rights",
      icon: UserCheck,
      title: "6. Your Rights & Choices",
      content: (
        <div className="space-y-3">
          <p>Depending on your jurisdiction, you possess specific rights regarding your personal information:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-xs">
              <h5 className="font-semibold text-xs text-blue-900">Right to Access & Rectify</h5>
              <p className="mt-1 text-xs text-neutral-600">Request a copy of the personal data we store about you or request corrections to inaccurate entries.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-xs">
              <h5 className="font-semibold text-xs text-blue-900">Right to Erasure</h5>
              <p className="mt-1 text-xs text-neutral-600">Request the deletion of your personal data where there is no legal requirement for its retention.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-xs">
              <h5 className="font-semibold text-xs text-blue-900">Opt-Out Rights</h5>
              <p className="mt-1 text-xs text-neutral-600">Unsubscribe from direct promotional emails or communications at any time.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-xs">
              <h5 className="font-semibold text-xs text-blue-900">Cookie Preferences</h5>
              <p className="mt-1 text-xs text-neutral-600">Manage or disable non-essential cookies directly via your web browser settings.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "updates",
      icon: RefreshCw,
      title: "7. Policy Updates & Modifications",
      content: (
        <div className="space-y-3">
          <p>
            We may update this Privacy Policy from time to time to reflect technological changes, regulatory compliance, or evolving business operations. The revised policy will be posted on this page with an updated &quot;Last Revised&quot; date. We encourage you to review this page periodically.
          </p>
        </div>
      ),
    },
  ];

  return (
    <PageShell>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-neutral-50/50 pt-32 pb-24">
        {/* Glowing background highlights */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        
        <Container className="relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-100/50 px-3.5 py-1 text-xs font-semibold text-blue-800 backdrop-blur-xs">
              <ShieldCheck className="h-3.5 w-3.5" /> Legal & Governance
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
              We prioritize data transparency, confidentiality, and robust security for every interaction with DZ Infotech.
            </p>
            <div className="mt-4 text-xs font-medium text-neutral-500">
              Last Revised: <span className="text-neutral-800">{lastUpdated}</span>
            </div>
          </div>

          {/* Main layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            {/* Navigation / TOC */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Policy Contents
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
                  <p className="font-semibold text-blue-950">Questions about Privacy?</p>
                  <p className="mt-1">Reach out directly to our team at <a href="mailto:info@dzinfotech.in" className="text-blue-600 hover:underline">info@dzinfotech.in</a>.</p>
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
                <h3 className="text-lg font-bold">Contact Our Privacy Team</h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data handling at DZ Infotech Partnership Firm, please contact us:
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
                  <Link to="/terms" className="text-sky-200 hover:text-white underline transition-colors">
                    View Terms of Service
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
