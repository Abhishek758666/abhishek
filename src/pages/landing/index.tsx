import LayoutAside from "./components/aside";
import HomeContent from "./components/home";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
