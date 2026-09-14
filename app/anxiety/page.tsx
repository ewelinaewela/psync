import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anxiety and pressure practices — Psync",
  description: "Reflect on demands and resources or plan a manageable practice for pressure situations.",
};

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const practices = [
  {
    title: "Demands & resources",
    description: "Name what a situation asks of you, notice the support you have, and choose one next step.",
    duration: "5–8 min",
    href: `${basePath}/anxiety/balance`,
  },
  {
    title: "Practise under pressure",
    description: "Plan a small rehearsal for a challenging moment, with an optional and gentle pressure element.",
    duration: "5–8 min",
    href: `${basePath}/anxiety/pressure`,
  },
];

export default function AnxietyPage() {
  return (
    <main className="exercise-page anxiety-page">
      <header className="exercise-header">
        <Link className="back-link" href={`${basePath}/`}><span aria-hidden="true">←</span> Home</Link>
        <div className="exercise-identity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/anxiety.svg`} alt="" width="42" height="42" />
          <div><strong>Anxiety & pressure</strong><span>Two practices</span></div>
        </div>
        <span className="local-note">Not saved</span>
      </header>

      <section className="anxiety-intro">
        <p className="exercise-eyebrow">Choose your focus</p>
        <h1>Make room for the challenge.</h1>
        <p>Anxiety can be a normal response to stress. These short reflections help you prepare for everyday performance situations; they do not measure anxiety or replace mental health care.</p>
      </section>

      <section className="anxiety-options" aria-label="Anxiety and pressure practices">
        {practices.map((practice, index) => (
          <article className="anxiety-option" key={practice.title}>
            <span className="anxiety-option-number" aria-hidden="true">0{index + 1}</span>
            <div>
              <p className="duration">{practice.duration}</p>
              <h2>{practice.title}</h2>
              <p>{practice.description}</p>
            </div>
            <Link className="practice-button" href={practice.href}>Start practice <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </section>

      <p className="anxiety-safety-note">Take this at your own pace. You can stop at any time. If anxiety is affecting your daily life or feels overwhelming, consider speaking with a qualified professional. <Link href={`${basePath}/safety`}>Read our safety guidance</Link>.</p>
    </main>
  );
}
