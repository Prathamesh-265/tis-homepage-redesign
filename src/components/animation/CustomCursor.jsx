import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

const HOVERABLE = "a, button, input, select, textarea, [data-cursor]";

export default function CustomCursor() {
  const ring = useRef(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const x = gsap.quickTo(ring.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    const y = gsap.quickTo(ring.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });
    const move = (e) => {
      x(e.clientX);
      y(e.clientY);
      gsap.to(ring.current, { opacity: 1, duration: 0.2, overwrite: "auto" });
    };
    const over = (e) =>
      gsap.to(ring.current, {
        scale: e.target.closest(HOVERABLE) ? 2.4 : 1,
        duration: 0.25,
      });
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <div
      ref={ring}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] -ml-3 -mt-3 hidden size-6 rounded-full border-2 border-brand opacity-0 mix-blend-difference [@media(pointer:fine)]:block"
    />
  );
}
