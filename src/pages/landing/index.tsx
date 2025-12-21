import { ClientOnly } from "@tanstack/react-router";
import LayoutAside from "./components/aside";
import FloatingDoc from "./components/floating-doc";
import HomeContent from "./components/home";

const LandingPage = () => {
  return (
    <ClientOnly>
      <div className="fixed top-0 left-0 inset-0 bg-size-[30px_30px] bg-[radial-gradient(#EAEAF1_2px,transparent_2px)] dark:bg-[radial-gradient(#EAEAF1_2px,transparent_2px)] animate-[background-position_2s_linear_infinite]" />
      <div className="pointer-events-none fixed top-0 inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-full w-full relative z-20 tracking-tighter">
        <FloatingDoc />
        <main className="w-full h-full">
          <aside>
            <LayoutAside />
          </aside>
          <div className="page w-full">
            <div className="max-w-[820px] w-full mx-auto px-5 py-20 grid gap-20 md:grid-cols-[1.5fr_2fr] tracking-tighter leading-none">
              <div className="hidden md:block"></div>
              <HomeContent />
            </div>
          </div>
        </main>
      </div>
    </ClientOnly>
  );
};

export default LandingPage;
