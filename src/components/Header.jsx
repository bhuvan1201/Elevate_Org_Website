import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-removebg.png"; // ✅ optional: remove if you don't want logo

function useHoverDropdown(delay = 180) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timer.current = setTimeout(() => setOpen(false), delay);
  };

  return { open, openMenu, closeMenu, setOpen };
}

export default function Header() {
  const about = useHoverDropdown(180);
  const projects = useHoverDropdown(180);
  const partners = useHoverDropdown(180);
  const learn = useHoverDropdown(180);


  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    about.setOpen(false);
    projects.setOpen(false);
    partners.setOpen(false);
    learn.setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Add shadow when page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
        "border-b border-slate-200",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left brand */}
        <Link to="/" className="flex items-center gap-3">
          {/* ✅ Optional logo */}
          <img
            src={logo}
            alt="ELEVATE"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="font-extrabold tracking-wide text-slate-900">
            ELEVATE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12 text-base font-semibold text-slate-900 tracking-wide">
          {/* ABOUT US dropdown */}
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={about.openMenu}
            onMouseLeave={about.closeMenu}
          >
            <button className="hover:text-black inline-flex items-center gap-1 py-2">
              About <span className="text-xs">▼</span>
            </button>

            {about.open && (
              <div
                className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden"
                onMouseEnter={about.openMenu}
                onMouseLeave={about.closeMenu}
              >
                <Link className="block px-4 py-2 hover:bg-slate-100" to="/about/story">
                  Our Story
                </Link>
                <Link className="block px-4 py-2 hover:bg-slate-100" to="/about/team">
                  Meet the Team
                </Link>
                <Link className="block px-4 py-2 hover:bg-slate-100" to="/contact">
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          {/* PROJECTS dropdown */}
          <div
            className="relative"
            onMouseEnter={projects.openMenu}
            onMouseLeave={projects.closeMenu}
          >
            <button className="hover:text-black inline-flex items-center gap-1 py-2">
              Projects <span className="text-xs">▼</span>
            </button>

            {projects.open && (
              <div
                className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden"
                onMouseEnter={projects.openMenu}
                onMouseLeave={projects.closeMenu}
              >
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/projects/tennis-for-good">
                  Tennis for Good
                </Link>
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/projects/teen-vaping-awareness">
                  Teen Vaping Awareness
                </Link>
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/projects/adolescent-obesity">
                  Adolescent Obesity
                </Link>
              </div>
            )}
          </div>

          {/* PARTNERS dropdown */}
          <div
            className="relative"
            onMouseEnter={partners.openMenu}
            onMouseLeave={partners.closeMenu}
          >
            <button className="hover:text-black inline-flex items-center gap-1 py-2">
              Partners <span className="text-xs">▼</span>
            </button>

            {partners.open && (
              <div
                className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden"
                onMouseEnter={partners.openMenu}
                onMouseLeave={partners.closeMenu}
              >
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/partners/genesis-foundation">
                  Genesis Foundation for Fitness &amp; Tennis
                </Link>
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/partners/building-blocks-foundation">
                  Building Blocks Foundation
                </Link>
              </div>
            )}
          </div>

          {/* LEARN dropdown */}
          <div
            className="relative"
            onMouseEnter={learn.openMenu}
            onMouseLeave={learn.closeMenu}
          >
            <button className="hover:text-black inline-flex items-center gap-1 py-2">
              Learn <span className="text-xs">▼</span>
            </button>

            {learn.open && (
              <div
                className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden"
                onMouseEnter={learn.openMenu}
                onMouseLeave={learn.closeMenu}
              >
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/learn/tutoring-education">
                  Tutoring &amp; Education
                </Link>
                <Link className="block px-4 py-3 hover:bg-slate-100" to="/learn/fitness">
                  Fitness
                </Link>
              </div>
            )}
          </div>


          <Link to="/get-involved" className="hover:text-black">
            Get Involved
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center rounded-xl bg-teal-600 px-5 py-2.5 text-white font-semibold hover:bg-teal-700 transition shadow-sm"
          >
            Donate
          </Link>
        </nav>
      </div>

      {/* IMPORTANT: add spacing so your page content doesn't hide behind fixed header */}
      <div className="h-0" />
    </header>
  );
}
