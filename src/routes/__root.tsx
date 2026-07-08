import "@fontsource-variable/inter/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-copper px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-copper px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-glow"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DZ Infotech — Building Smart Digital Solutions for Real-World Industries" },
      {
        name: "description",
        content:
          "DZ Infotech designs and builds custom software, CRM, ERP, web, mobile, AI and cloud solutions that transform how modern businesses operate.",
      },
      { name: "author", content: "DZ Infotech" },
      {
        property: "og:title",
        content: "DZ Infotech — Building Smart Digital Solutions for Real-World Industries",
      },
      {
        property: "og:description",
        content:
          "A premium software partner for custom software, CRM, ERP, mobile, cloud and AI solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "DZ Infotech — Building Smart Digital Solutions for Real-World Industries",
      },
      {
        name: "description",
        content:
          "DZ Infotech designs and develops technology that simplifies operations, improves efficiency and gives businesses complete control over their workflows.",
      },
      {
        property: "og:description",
        content:
          "DZ Infotech designs and develops technology that simplifies operations, improves efficiency and gives businesses complete control over their workflows.",
      },
      {
        name: "twitter:description",
        content:
          "DZ Infotech designs and develops technology that simplifies operations, improves efficiency and gives businesses complete control over their workflows.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66d96263-a0fa-4957-ace9-11455d36e58c/id-preview-9eb7951b--24bc06a9-7e01-45be-bd92-83f509336f88.lovable.app-1783400926535.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66d96263-a0fa-4957-ace9-11455d36e58c/id-preview-9eb7951b--24bc06a9-7e01-45be-bd92-83f509336f88.lovable.app-1783400926535.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
