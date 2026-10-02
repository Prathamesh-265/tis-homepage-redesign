import { useCallback, useState } from "react";
import useLenis from "./hooks/useLenis";
import useTheme from "./hooks/useTheme";
import Preloader from "./components/animation/Preloader";
import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SportsSection from "./components/sections/SportsSection";
import RankingsSection from "./components/sections/RankingsSection";
import AchieversSection from "./components/sections/AchieversSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import EnquireSection from "./components/sections/EnquireSection";

export default function App() {
  useLenis();
  const [ready, setReady] = useState(false);
  const onLoaded = useCallback(() => setReady(true), []);
  const [dark, toggleTheme] = useTheme();
  return (
    <>
      <Preloader onDone={onLoaded} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main id="main">
        <HeroSection ready={ready} />
        <AboutSection />
        <SportsSection />
        <RankingsSection />
        <AchieversSection />
        <TestimonialsSection />
        <EnquireSection />
      </main>
      <Footer />
    </>
  );
}
