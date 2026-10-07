import { useRef, useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo-removebg2.png";

const NAV_GROUPS = [
  {
    id: "about",
    label: "About",
    links: [
      ["/about/story", "Our Story"],
      ["/about/team", "Meet the Team"],
    ],
  },
  {
    id: "projects",
    label: "Projects",
    links: [
      ["/projects/tennis-for-good", "Tennis for Good"],
      ["/projects/global-tutoring", "Global Tutoring"],
      ["/projects/educational-video-library", "Educational Video Library"],
      ["/projects/teen-vaping-awareness", "Teen Vaping Awareness"],
      ["/projects/adolescent-obesity", "Food Access & Adolescent Health"],
      ["/projects/sports-strength-training", "Sports & Strength Training"],
    ],
  },
  {
    id: "partners",
    label: "Partners",
    links: [
      ["/partners/genesis-foundation", "Genesis Foundation for Fitness & Tennis"],
      ["/partners/building-blocks-foundation", "Building Blocks Foundation"],
      ["/partners/become-a-partner", "Become a Partner"],
    ],
  },
  {
    id: "learn",
    label: "Learn",
    to: "/learn",
    links: [
      ["/learn", "Resource Library"],
      ["/learn/health-awareness", "Health Awareness"],
      ["/learn/tutoring-education", "Tutoring & Education"],
      ["/learn/fitness", "Sports and Fitness"],
      ["/learn/youth-leadership", "Youth Leadership"],
    ],
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2";
const navLink = `rounded-lg px-3 py-3 hover:bg-slate-100 hover:text-teal-800 xl:px-2 ${focusRing}`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const groupButtons = useRef({});
  const closeTimer = useRef(null);
  const location = useLocation();

  const clearCloseTimer = useCallback(() => {
    window.clearTimeout(closeTimer.current);
  }, []);

  const closeNavigation = useCallback(() => {
    clearCloseTimer();
    setMobileOpen(false);
    setOpenGroup(null);
  }, [clearCloseTimer]);

  useEffect(() => {
    closeNavigation();
  }, [location, closeNavigation]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onOutsidePointer = (event) => {
      if (!headerRef.current?.contains(event.target)) closeNavigation();
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onBreakpointChange = () => {
      // Move focus out of controls that become hidden at this breakpoint.
      if (headerRef.current?.contains(document.activeElement)) {
        if (desktop.matches) headerRef.current.querySelector("a")?.focus();
        else menuButtonRef.current?.focus();
      }
      closeNavigation();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onOutsidePointer);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      clearCloseTimer();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onOutsidePointer);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [clearCloseTimer, closeNavigation]);

  function handleEscape(event) {
    if (event.key !== "Escape") return;
    clearCloseTimer();
    if (openGroup) {
      event.preventDefault();
      groupButtons.current[openGroup]?.focus();
      setOpenGroup(null);
    } else if (mobileOpen) {
      event.preventDefault();
      menuButtonRef.current?.focus();
      setMobileOpen(false);
    }
  }

  return (
    <header
      ref={headerRef}
      onKeyDown={handleEscape}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeNavigation();
      }}
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85",
        "border-b border-slate-200",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <div className="relative mx-auto flex h-[120px] max-w-7xl items-center justify-between gap-4 px-4">
        <Link to="/" onClick={closeNavigation} className={`shrink-0 rounded-lg ${focusRing}`}>
          <img
            src={logo}
            alt="ELEVATE home"
            className="block h-24 w-auto max-w-[180px] object-contain md:h-28"
          />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => {
            clearCloseTimer();
            setMobileOpen((open) => !open);
            setOpenGroup(null);
          }}
          className={`inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 font-semibold text-slate-900 xl:hidden ${focusRing}`}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          Menu
        </button>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          onClick={(event) => {
            if (event.target.closest("a")) closeNavigation();
          }}
          className={[
            mobileOpen ? "flex" : "hidden",
            "absolute inset-x-0 top-full max-h-[calc(100dvh-120px)] flex-col gap-1 overflow-y-auto overscroll-contain border-b border-slate-200 bg-white p-4 font-semibold text-slate-900 shadow-lg",
            "xl:static xl:flex xl:max-h-none xl:flex-row xl:items-center xl:gap-4 xl:overflow-visible xl:border-0 xl:bg-transparent xl:p-0 xl:text-lg xl:shadow-none",
          ].join(" ")}
        >
          <Link to="/" className={navLink}>Home</Link>

          {NAV_GROUPS.map((group) => {
            const open = openGroup === group.id;
            return (
              <div
                key={group.id}
                className="relative"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1280px)").matches) {
                    clearCloseTimer();
                    setOpenGroup(group.id);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== "mouse" || !window.matchMedia("(min-width: 1280px)").matches) return;
                  if (event.currentTarget.contains(document.activeElement)) return;
                  clearCloseTimer();
                  closeTimer.current = window.setTimeout(() => {
                    setOpenGroup((current) => current === group.id ? null : current);
                  }, 180);
                }}
                onFocus={clearCloseTimer}
                onBlur={(event) => {
                  // Mobile groups stay expanded while focus moves to another link.
                  // Collapsing here would move the link before its click completes.
                  if (window.matchMedia("(min-width: 1280px)").matches && !event.currentTarget.contains(event.relatedTarget)) {
                    clearCloseTimer();
                    setOpenGroup((current) => current === group.id ? null : current);
                  }
                }}
              >
                <div className="flex items-center">
                  {group.to && <Link to={group.to} className={`flex-1 ${navLink}`}>{group.label}</Link>}
                  <button
                    ref={(node) => { groupButtons.current[group.id] = node; }}
                    id={`nav-${group.id}-button`}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`nav-${group.id}-links`}
                    aria-label={group.to ? `${group.label} submenu` : undefined}
                    onClick={() => {
                      clearCloseTimer();
                      setOpenGroup((current) => current === group.id ? null : group.id);
                    }}
                    className={`inline-flex min-h-11 items-center justify-between gap-2 ${group.to ? "" : "w-full"} ${navLink}`}
                  >
                    {!group.to && group.label}
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>

                <div
                  id={`nav-${group.id}-links`}
                  hidden={!open}
                  aria-labelledby={`nav-${group.id}-button`}
                  className="ml-3 rounded-xl border border-slate-200 bg-slate-50 p-2 xl:absolute xl:right-0 xl:top-full xl:mt-2 xl:ml-0 xl:w-80 xl:bg-white xl:shadow-lg"
                >
                  {group.links.map(([to, label]) => (
                    <Link key={to} to={to} className={`block rounded-lg px-3 py-3 hover:bg-slate-100 hover:text-teal-800 ${focusRing}`}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <Link to="/get-involved" className={navLink}>Get Involved</Link>
          <Link
            to="/donate"
            className={`inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-teal-700 ${focusRing}`}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
