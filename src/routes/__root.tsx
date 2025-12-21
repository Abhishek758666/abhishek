import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/providers/theme-provider";
import FloatingDoc from "@/pages/landing/components/floating-doc";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Abhihsek Khati : Software Engineer",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useLocation().pathname;
  const isPortfolioPage =
    pathname === "/" ||
    pathname === "/chatbot" ||
    pathname === "/visitors" ||
    pathname === "/projects";

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          {isPortfolioPage ? (
            <LandingLayout>{children}</LandingLayout>
          ) : (
            children
          )}
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed top-0 left-0 inset-0 bg-size-[30px_30px] bg-[radial-gradient(#EAEAF1_2px,transparent_2px)] dark:bg-[radial-gradient(#EAEAF1_2px,transparent_2px)] animate-[background-position_2s_linear_infinite]" />
      <div className="pointer-events-none fixed top-0 inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-full w-full relative z-20 tracking-tighter">
        <FloatingDoc />
        {children}
      </div>
    </>
  );
};
