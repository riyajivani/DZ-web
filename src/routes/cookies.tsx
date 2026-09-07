import { createFileRoute, Link } from "@tanstack/react-router";
import { Cookie, ShieldCheck, BarChart3, Settings, ToggleRight, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { PageShell, Container } from "@/components/site";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — DZ Infotech" },
      {
        name: "description",
        content:
          "Read the Cookie Policy of DZ Infotech Partnership Firm. Understand what cookies we use, why we use them, and how you can control your preferences.",
      },
      { property: "og:title", content: "Cookie Policy — DZ Infotech" },
      {
        property: "og:description",
        content: "Transparent cookie usage guidelines and tracking preferences at DZ Infotech.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const lastUpdated = "September 7, 2026";

  const sections = [
    {
      id: "what-are-cookies",
      icon: Cookie,
      title: "1. What Are Cookies?",
      content: (
        <div className="space-y-3">
          <p>
            Cookies are small text files placed on your computer, smartphone, or tablet when you visit a website. They are widely used to ensure website functionality, remember user preferences, analyze site performance, and provide a faster, more tailored user experience.
          </p>
          <p>
            This Cookie Policy explains how DZ Infotech Partnership Firm (&quot;DZ Infotech&quot;, &quot;we&quot;, &quot;our&quot;) uses cookies and similar tracking technologies when you browse <code className="rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-800">dzinfotech.in</code>.
          </p>
        </div>
      ),
    },
    {
      id: "types-of-cookies",
      icon: BarChart3,
      title: "2. Categories of Cookies We Use",
      content: (
        <div className="space-y-4">
          <p>We classify the cookies used on our website into three main categories:</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <div className="flex items-center gap-2 font-semibold text-blue-950 text-xs sm:text-sm">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" /> Essential Cookies
              </div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Strictly necessary for the basic operation of the site, route navigation, security, and rendering page components. These cannot be switched off in our systems.
              </p>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-4">
              <div className="flex items-center gap-2 font-semibold text-blue-950 text-xs sm:text-sm">
                <BarChart3 className="h-4 w-4 text-sky-600 shrink-0" /> Analytics & Performance
              </div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Help us measure visitor counts, traffic sources, page response times, and user interaction patterns so we can optimize website speed and usability.
              </p>
            </div>
            <div className="rounded-xl border border-teal-100 bg-teal-50/50 p-4">
              <div className="flex items-center gap-2 font-semibold text-blue-950 text-xs sm:text-sm">
                <Settings className="h-4 w-4 text-teal-600 shrink-0" /> Functional Cookies
              </div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Allow the website to remember choices you make (such as language preference or region) to provide enhanced, personalized functionality.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "third-party",
      icon: ShieldCheck,
      title: "3. Third-Party Analytics & Web Tools",
      content: (
        <div className="space-y-3">
          <p>
            In addition to our first-party tools, we may utilize privacy-compliant third-party analytics and hosting infrastructure (such as Google Fonts, Cloudflare CDN, or web traffic monitoring) that place cookies to help analyze traffic trends and protect our site against malicious DDoS traffic.
          </p>
          <p className="text-xs text-neutral-500">
            * These third-party services operate under their respective privacy policies and privacy frameworks.
          </p>
        </div>
      ),
    },
    {
      id: "managing-cookies",
      icon: ToggleRight,
      title: "4. Managing & Disabling Cookies",
      content: (
        <div className="space-y-4">
          <p>
            Most modern web browsers allow you to control cookie preferences through their configuration settings. You can block or delete cookies at any time.
          </p>
          <div className="rounded-xl border border-neutral-200 bg-white p-4 space-y-2 text-xs">
            <h4 className="font-semibold text-neutral-900">How to manage cookies in major web browsers:</h4>
            <ul className="mt-2 space-y-1.5 text-neutral-600 list-disc list-inside">
              <li><strong className="text-neutral-800">Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies.</li>
              <li><strong className="text-neutral-800">Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data.</li>
              <li><strong className="text-neutral-800">Apple Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies.</li>
              <li><strong className="text-neutral-800">Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage cookies.</li>
            </ul>
          </div>
          <p className="text-xs text-neutral-500">
            Please note that blocking essential cookies may impact website formatting, image loading, or smooth navigation.
          </p>
        </div>
      ),
    },
    {
      id: "updates-contact",
      icon: Settings,
      title: "5. Policy Updates & Contact",
      content: (
        <div className="space-y-3">
          <p>
            We may update this Cookie Policy periodically to stay aligned with browser updates and privacy regulations. Any updates will be posted directly to this page.
          </p>
        </div>
      ),
    },
  ];

  return (
    <PageShell>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-neutral-50/50 pt-32 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-sky-300/15 blur-3xl" />
        
        <Container className="relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-100/50 px-3.5 py-1 text-xs font-semibold text-blue-800 backdrop-blur-xs">
              <Cookie className="h-3.5 w-3.5 text-amber-600" /> Cookie Transparency
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
              Clear information on how cookies and browser data help deliver a secure and smooth user experience.
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
                  Cookie Topics
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
                  <p className="font-semibold text-blue-950">Cookie Preferences?</p>
                  <p className="mt-1">Got questions about web tracking? Email us at <a href="mailto:info@dzinfotech.in" className="text-blue-600 hover:underline">info@dzinfotech.in</a>.</p>
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
                <h3 className="text-lg font-bold">Cookie Policy Contact</h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Have questions regarding our cookie practices or browser data management? Contact the DZ Infotech team:
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
                  <Link to="/terms" className="text-sky-200 hover:text-white underline transition-colors">
                    View Terms of Service
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
