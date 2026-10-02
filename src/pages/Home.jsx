import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import Typing from "../components/Typing.jsx";
import Marquee from "../components/Marquee.jsx";
import { me, marquee } from "../data.js";

const b =
  "!border !border-solid !border-line !text-ink hover:!border-acc hover:!text-acc";
export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 min-h-screen flex flex-col scroll-mt-16"
    >
      <div className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-[rgba(96,165,250,.1)] blur-[120px]"></div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 my-auto grid md:grid-cols-[1.1fr_.9fr] gap-8 md:gap-10 items-center">
        <div>
          <div className="eyebrow animate-up">Welcome to my portfolio</div>
          <h1 className="font-head font-bold text-[clamp(40px,7.4vw,80px)] leading-[.98] tracking-[-.04em] mb-5 animate-up [animation-delay:.1s]">
            Sagnik
            <br />
            <em className="not-italic text-acc">Banerjee</em>
          </h1>
          <div className="font-mono text-[clamp(16px,2.2vw,20px)] text-acc mb-4 min-h-[1.6em] animate-up [animation-delay:.22s]">
            <span className="text-mute">&lt;</span> <Typing words={me.roles} />{" "}
            <span className="text-mute">/&gt;</span>
          </div>
          <p className="text-[18px] sm:text-[16px] !opacity-75 max-w-[680px] mb-8 animate-up [animation-delay:.34s]">
            I build responsive, scalable and high-performance web applications
            with clean, maintainable code.
          </p>
          <div className="flex flex-wrap gap-3 animate-up [animation-delay:.46s]">
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              disableElevation
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 99,
                px: 3,
                py: 1.3,
                transition: "all .2s ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 12px 1px var(--glow) !important",
                  backgroundColor: "var(--acc) !important",
                  transform: "translateY(-3px) !important",
                },
              }}
            >
              Explore My Work
            </Button>

            <Button
              href="/Sagnik_Banerjee_Resume.pdf"
              download=""
              target="_blank"
              variant="outlined"
              endIcon={
                <>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                  </svg>
                </>
              }
              sx={{
                borderRadius: 99,
                px: 3,
                py: 1.3,
                transition: "all .2s ease-in-out",
                "&:hover": {
                  // boxShadow: "0 0 12px 1px var(--glow) !important",
                  transform: "translateY(-3px) !important",
                },
              }}
            >
              Download CV{" "}
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-8 font-mono text-[10.5px] tracking-[.18em] uppercase text-mute animate-up [animation-delay:.58s]">
            Find me on
            <IconButton
              size="small"
              href={me.linkedin}
              target="_blank"
              className={b}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={`mailto:${me.email}`} className={b}>
              <EmailIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={`tel:${me.tel}`} className={b}>
              <PhoneIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="hero-visual-motion relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-sm grid place-items-center animate-up [animation-delay:.3s]">
          <div
            className="absolute inset-6 rounded-full blur-[70px] bg-[rgba(96,165,250,.2)]"
            // style={{ background: "var(--glow)" }}
          />
          <div className="hero-visual-motion absolute inset-0 rounded-full border border-dashed border-[color-mix(in_srgb,var(--acc)_25%,transparent)] animate-sp" />
          <div className="hero-visual-motion absolute -inset-6 rounded-full border border-dashed border-[rgba(231,236,242,.3)] [animation:sp_32s_linear_infinite_reverse]" />
          <div className="relative z-10 aspect-square w-[78%] overflow-hidden rounded-full border border-[color-mix(in_srgb,var(--acc)_20%,transparent)]">
            <img
              src="/hero.jpg"
              alt="Sagnik working on his laptop"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="hero-visual-motion absolute top-2 left-0 sm:-left-2 z-20 grid h-11 w-11 place-items-center rounded-xl border border-line bg-sf font-mono text-xs text-acc transition-all duration-300 hover:border-acc hover:shadow-glow animate-fl [animation-delay:.3s]">
            &lt;/&gt;
          </div>
          <div className="hero-visual-motion absolute top-16 right-0 sm:-right-3 z-20 grid h-11 w-11 place-items-center rounded-xl border border-line bg-sf font-mono text-xs text-acc transition-all duration-300 hover:border-acc hover:shadow-glow animate-fl [animation-delay:-2s]">
            {"{ }"}
          </div>
          <div className="hero-visual-motion absolute -top-4 -right-4 sm:right-2 z-20 flex items-center gap-2 rounded-full border border-line bg-sf px-3 py-1.5 text-[11px] animate-fl">
            <i className="relative flex h-2 w-2">
              <i className="hero-visual-motion absolute inline-flex h-full w-full animate-pg rounded-full bg-acc opacity-75" />
              <i className="relative inline-flex h-2 w-2 rounded-full bg-acc" />
            </i>
            <span className="font-mono text-mute">Available for work</span>
          </div>
          <div className="hero-visual-motion absolute -bottom-10 -left-4 sm:-left-8 z-20 w-64 sm:w-72 rounded-xl border border-line bg-[color-mix(in_srgb,var(--sf)_90%,transparent)] p-4 font-mono transition-all duration-300 hover:border-acc hover:shadow-glow animate-fl [animation-delay:1s]">
            <div className="mb-3 flex items-center gap-1.5 text-mute">
              <i className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 text-[10px]">whoami.js</span>
            </div>
            <pre className="m-0 text-xs leading-relaxed text-ink">
              <span className="text-purple-500">const</span> dev = {"{"}
              {"\n"} name: <span className="text-acc">"Sagnik Banerjee"</span>,
              {"\n"} stack: <span className="text-acc">"React / Next.js"</span>,
              {"\n"} status: <span className="text-acc">"Open to Work"</span>
              {"\n"}
              {"}"}
            </pre>
          </div>
        </div>
      </div>
      <Marquee items={marquee} className="mt-10" />
    </section>
  );
}
