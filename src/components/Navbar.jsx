import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Button, Drawer } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useMode } from "../theme.jsx";
import Avatar from "./Avatar.jsx";
import { nav, me } from "../data.js";

const ico =
  "!border !border-solid !border-line !text-ink hover:!border-acc hover:!text-acc";
export default function Navbar() {
  const { mode, toggle } = useMode();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const idOf = (to) => (to === "/" ? "home" : to.slice(1));
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(([, to]) => {
      const el = document.getElementById(idOf(to));
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] border-b border-[color-mix(in_srgb,var(--line)_60%,transparent)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <Avatar />
          <span>
            <b className="block font-head text-[14px] leading-tight">
              {me.short}
            </b>
            <small className="block font-mono text-[9.5px] tracking-[.14em] text-mute uppercase">
              Front-End Dev
            </small>
          </span>
        </Link>
        <nav className="hidden lg:flex gap-6 font-mono text-[14px]">
          {nav.map(([n, to]) => (
            <Link
              key={to}
              to={to}
              className={`relative py-1 transition-colors hover:text-acc after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-acc after:transition-all ${active === idOf(to) ? "text-acc after:w-full" : "text-mute after:w-0"}`}
            >
              {n}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <IconButton
            onClick={toggle}
            aria-label="Toggle dark and light mode"
            className={ico}
            size="small"
            sx={{
              width: 36,
              height: 36,
              transition: "all .2s ease-in-out",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "0 0 8px 1px var(--glow)",
              },
            }}
          >
            {mode === "dark" ? (
              <LightModeIcon fontSize="small" />
            ) : (
              <DarkModeIcon fontSize="small" />
            )}
          </IconButton>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            size="small"
            sx={{
              borderRadius: 99,
              px: 2,
              py: 0.7,
              display: { xs: "none", sm: "inline-flex" },
              fontFamily: "JetBrains Mono",
              fontSize: 12.5,
              fontWeight: 500,
            }}
          >
            Let's Talk
          </Button>
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`lg:!hidden ${ico}`}
            size="small"
            sx={{ width: 36, height: 36 }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 240, p: 3, backgroundImage: "none" } }}
      >
        <div className="flex flex-col gap-4 font-mono text-sm mt-10">
          {nav.map(([n, to]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={active === idOf(to) ? "text-acc" : "text-mute"}
            >
              {n}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
