import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import Avatar from "./Avatar.jsx";
import { nav, me } from "../data.js";
export default function Footer() {
  const b =
    "!border !border-solid !border-line !text-ink hover:!border-acc hover:!text-acc";
  return (
    <footer className="relative overflow-hidden border-t border-line pt-16 pb-10 mt-10">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] font-head font-bold text-[clamp(90px,22vw,260px)] tracking-tighter whitespace-nowrap select-none pointer-events-none"
        style={{ color: "var(--ghost)" }}
      >
        BANERJEE
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* //container-px py-16 sm:py-20 relative grid sm:grid-cols-3 gap-16 sm:gap-24 items-center */}

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-24 items-center">
          <div className="grid grid-cols-2 gap-x-10  gap-y-3 font-mono text-[13px] text-mute">
            {nav.map(([n, to]) => (
              <Link key={to} to={to} className="hover:text-acc">
                {n}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Avatar size={52} className="mx-auto mb-2.5" />
            <b className="block font-head">{me.name}</b>
            <small className="font-mono text-[10.5px] tracking-[.14em] text-acc uppercase">
              {me.role}
            </small>
            <i className="block text-mute text-[13px] mt-1">
              "Crafting digital experiences with code & craft."
            </i>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-4">
            <IconButton
              href={me.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className={b}
              sx={{
                transition: "all .2s ease-in-out",
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "0 0 8px 1px var(--glow)",
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href={`mailto:${me.email}`}
              aria-label="Email"
              className={b}
              sx={{
                transition: "all .2s ease-in-out",
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "0 0 8px 1px var(--glow)",
                },
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <p className="text-center text-mute font-mono text-[11.5px] mt-9">
          © 2026 {me.name}. Built with React, Vite, MUI & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
