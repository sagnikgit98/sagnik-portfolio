import Reveal from "../components/Reveal.jsx";
import { me } from "../data.js";
const rows = [
  ["Name", me.name],
  ["Role", me.role],
  ["Based in", "Kolkata, India"],
  ["Phone", me.phone],
  ["Email", me.email],
  ["Focus", "React / Next.js / TypeScript"],
];
export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid md:grid-cols-[.8fr_1.2fr] gap-8 md:gap-14 items-center">
        <Reveal>
          <div className="relative max-w-[400px] aspect-square mx-auto w-full grid place-items-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-line animate-sp" />
            <div className="absolute inset-[6%] rounded-full border border-[color-mix(in_srgb,var(--acc)_40%,transparent)]" />
            <div
              className="absolute inset-[12%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle,var(--glow),transparent 72%)",
              }}
            />
            <div className="relative w-[78%] aspect-square rounded-full overflow-hidden">
              <img
                src="/sagnik.png"
                alt="Sagnik Banerjee"
                className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 h-[112%] max-w-none"
              />
            </div>
            <div className="absolute top-[8%] right-0 px-3 py-1.5 rounded-xl border border-line bg-sf font-mono text-[10px] uppercase">
              <b className="font-head text-acc text-[15px] mr-1">3+</b>Years of
              experience
            </div>
            <div className="absolute bottom-[8%] left-0 px-3 py-1.5 rounded-xl border border-line bg-sf font-mono text-[10px] uppercase">
              {"{ }"} Frontend Developer
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="eyebrow">About me</div>
          <h2 className="font-head font-bold text-[clamp(30px,4.6vw,46px)] leading-[1.1] tracking-tight">
            I'm Sagnik <em className="not-italic text-acc">Banerjee</em>
          </h2>
          <p className="text-mute my-4">
            Front-End Developer with 3+ years of experience building responsive,
            high-performance web applications using React.js, Next.js, Astro.js,
            and modern JavaScript (ES6+). I turn complex UI/UX designs into
            clean, scalable, and accessible interfaces, using Redux and React
            Query for state management, integrating REST and GraphQL APIs, and
            optimizing performance with lazy loading, code splitting, and
            memoization.
          </p>
          <p className="text-mute mb-6">
            With working knowledge of Node.js, Express.js, and MongoDB, I
            contribute to end-to-end feature delivery and collaborate
            effectively with backend, QA, and product teams in Agile/Scrum
            environments to ship production-ready features on schedule.
          </p>
          <div className="grid grid-cols-2 border border-line rounded-2xl overflow-hidden bg-sf">
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className={`px-4 py-3.5 min-w-0 break-words border-line ${i % 2 === 0 ? "border-r" : ""} ${i < 4 ? "border-b" : ""}`}
              >
                <small className="block font-mono text-[9.5px] tracking-[.14em] uppercase text-mute">
                  {k}
                </small>
                <span className="font-semibold text-sm">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
