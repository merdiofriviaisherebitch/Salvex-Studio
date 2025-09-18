"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "How We Work", id: "approach" },
  { label: "Our Impact", id: "impact" },
  { label: "Our Work", id: "portfolio" },
  { label: "Testimonial", id: "testimonials" },
  { label: "Contact", id: "contact" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

const indicatorTransition = {
  stiffness: 420,
  damping: 40,
  mass: 0.5,
};

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [isCondensed, setIsCondensed] = useState(false);
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const nextActive = visibleEntries[0].target.id as SectionId;
          setActiveSection(nextActive);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  // Handle mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setIsCondensed((prev) => {
            if (currentY > 140 && !prev) {
              return true;
            }
            if (currentY < 80 && prev) {
              return false;
            }
            return prev;
          });

          // Handle mobile sidebar
          if (isMobile) {
            setIsMobileSidebar((prev) => {
              if (currentY > 200 && !prev) {
                return true;
              }
              if (currentY < 100 && prev) {
                return false;
              }
              return prev;
            });
          } else {
            setIsMobileSidebar(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const handleNavigate = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        x: isMobileSidebar ? 0 : 0
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={cn(
        "sticky z-50 transition-all duration-500 ease-out",
        isMobileSidebar
          ? "fixed top-4 left-4 flex flex-col"
          : "flex justify-center",
        !isMobileSidebar && (isCondensed ? "top-2" : "top-4")
      )}
    >
      <div
        className={cn(
          "relative bg-[linear-gradient(135deg,rgba(251,243,213,0.92),rgba(214,218,200,0.88))] backdrop-blur-2xl transition-all duration-500",
          isMobileSidebar
            ? "flex flex-col items-start w-auto rounded-2xl border border-white/35 px-3 py-3 shadow-[0_18px_32px_-28px_rgba(58,68,70,0.55)]"
            : isCondensed
            ? "flex items-center justify-center w-auto rounded-2xl border border-white/35 px-4 py-2 shadow-[0_18px_32px_-28px_rgba(58,68,70,0.55)]"
            : "flex items-center justify-center w-full max-w-6xl rounded-3xl border border-[#d6c8ae]/70 px-6 py-4 shadow-[0_28px_70px_-36px_rgba(58,68,70,0.55)]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(214,169,157,0.18),transparent_55%)]" />
          <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_bottom_left,rgba(156,175,170,0.2),transparent_60%)]" />
          <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(0deg,rgba(255,255,255,0.12),transparent_65%)]" />
        </div>

        <div
          className={cn(
            "relative transition-all duration-500",
            isMobileSidebar
              ? "flex flex-col items-start gap-2"
              : "flex flex-wrap items-center justify-center",
            !isMobileSidebar && (isCondensed ? "gap-1.5" : "gap-2.5")
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={cn(
                  "relative overflow-hidden font-semibold uppercase tracking-[0.28em] text-[#7a8689] transition-all duration-300",
                  isMobileSidebar
                    ? "w-full text-left rounded-lg px-3 py-2 text-[0.6rem]"
                    : "rounded-full",
                  !isMobileSidebar && (isCondensed
                    ? "px-3 py-1.5 text-[0.65rem] sm:text-xs"
                    : "px-4 py-2 text-xs sm:text-sm")
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={indicatorTransition}
                    className={cn(
                      "absolute z-0 shadow-[0_12px_30px_-18px_rgba(214,169,157,0.65)]",
                      isMobileSidebar
                        ? "inset-0 rounded-lg bg-gradient-to-r from-primary/70 via-accent/60 to-primary/70"
                        : "inset-0 rounded-full bg-gradient-to-r from-primary/70 via-accent/60 to-primary/70"
                    )}
                  />
                )}
                <span className={cn("relative z-10", isActive ? "text-background" : "text-[#7a8689]")}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

export default SiteNavigation;

