import { useRef, useState } from "react";
import { Link } from "react-router-dom";

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

  return { open, openMenu, closeMenu };
}

export default function Header() {
  const about = useHoverDropdown(180);
  const projects = useHoverDropdown(180);
  const partners = useHoverDropdown(180);

  return (
    <header className="sticky top-0 z-40 bg-transparent border-b border-transparent">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-slate-900">
          ELEVATE
        </Link>

        <nav className="hidden md:flex items-center gap-12 text-base font-semibold text-slate-900 tracking-wide">
          {/* ABOUT US dropdown */}
          <div
            className="relative"
            onMouseEnter={about.openMenu}
            onMouseLeave={about.closeMenu}
          >
            <button className="hover:text-black inline-flex items-center gap-1 py-2">
              About Us <span className="text-xs">▼</span>
            </button>

            {about.open && (
              <div
                className="absolute left-0 top-full mt-2 w-56 rounded-xl border bg-white shadow-lg overflow-hidden"
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
                className="absolute left-0 top-full mt-2 w-72 rounded-xl border bg-white shadow-lg overflow-hidden"
                onMouseEnter={projects.openMenu}
                onMouseLeave={projects.closeMenu}
              >
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
                className="absolute left-0 top-full mt-2 w-80 rounded-xl border bg-white shadow-lg overflow-hidden"
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

          <Link to="/learn" className="hover:text-black">
            Learn
          </Link>

          <a href="/#get-involved" className="hover:text-black">
            Get Involved
          </a>
        </nav>
      </div>
    </header>
  );
}
