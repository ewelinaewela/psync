import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

const practices = [
  {
    title: "Imagery",
    description: "Rehearse a meaningful situation with clarity, confidence, and control.",
    duration: "8–12 min",
    icon: `${basePath}/imagery.svg`,
    accent: "imagery",
    href: `${basePath}/imagery`,
  },
  {
    title: "Inner Voice",
    description: "Notice the way you speak to yourself and shape a voice that helps you perform.",
    duration: "6–10 min",
    icon: `${basePath}/inner-voice.svg`,
    accent: "inner-voice",
    href: `${basePath}/inner-voice`,
  },
  {
    title: "Anxiety & pressure",
    description: "Notice what the moment asks of you and prepare in manageable steps.",
    duration: "Two practices",
    icon: `${basePath}/anxiety.svg`,
    accent: "anxiety",
    href: `${basePath}/anxiety`,
  },
];

export default function Home() {
  return (
    <main className="home-shell">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Psync home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Psync</span>
        </a>
        <span className="preview-pill">Early preview</span>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Mental skills for everyday performance</p>
        <h1>Train your mind.<span>Perform at your best.</span></h1>
        <p className="hero-copy">Short, guided practices inspired by sport psychology—made to help you prepare, focus, and respond with intention.</p>
      </section>

      <section className="practices" aria-labelledby="practices-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Choose a practice</p>
            <h2 id="practices-title">What would help you today?</h2>
          </div>
          <p>Your practice stays on this device.</p>
        </div>

        <div className="practice-grid">
          {practices.map((practice) => (
            <article className={`practice-card ${practice.accent}`} key={practice.title}>
              <div className="practice-icon-wrap">
                {/* Local SVG from the original Psync design system. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={practice.icon} alt="" width="80" height="80" className="practice-icon" />
              </div>
              <div className="practice-content">
                <div>
                  <p className="duration">{practice.duration}</p>
                  <h3>{practice.title}</h3>
                  <p>{practice.description}</p>
                </div>
                <Link className="practice-button" href={practice.href}>Start practice <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Psync is an educational tool, not a substitute for professional mental health care or emergency support.</p>
        <nav aria-label="Information">
          <Link href={`${basePath}/about`}>About</Link>
          <Link href={`${basePath}/privacy`}>Privacy</Link>
          <Link href={`${basePath}/safety`}>Safety</Link>
        </nav>
      </footer>
    </main>
  );
}
