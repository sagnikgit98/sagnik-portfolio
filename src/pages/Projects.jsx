import SectionTitle from "../components/SectionTitle.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data.js";
import CallMadeIcon from "@mui/icons-material/CallMade";
export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="My work"
          a="Featured"
          b="Projects"
          sub="Selected builds from my professional work."
        />
        <Reveal>
          <div className="border-t border-line">
            {projects.map((item, id) => (
              <div
                key={id}
                className="group grid grid-cols-1 sm:grid-cols-[36px_1fr_auto] gap-4 items-center py-7 border-b border-line transition-[padding] hover:pl-3"
              >
                <span className="hidden sm:block font-mono text-xs text-mute">
                  0{id + 1}
                </span>
                <div>
                  <h3 className="font-head text-[22px] font-semibold transition-colors group-hover:text-acc">
                    {item.title}
                  </h3>
                  <p className="text-mute text-sm max-w-[600px] mt-1 mb-2">
                    {item.description}
                  </p>
                  <div className="font-mono text-[11.5px] text-mute break-words">
                    <b className="text-acc font-medium">Tech Stack:</b> ·{" "}
                    {item.tech}
                  </div>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex sm:w-full sm:max-w-[100px] items-center justify-center gap-1.5 font-mono text-xs text-paper-100 border border-ink-border rounded-full px-4 py-2 hover:border-acc hover:text-acc transition-colors"
                >
                  <CallMadeIcon fontSize="small" />
                  Link
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
