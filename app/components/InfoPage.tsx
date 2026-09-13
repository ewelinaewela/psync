import type { ReactNode } from "react";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function InfoPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main className="info-page">
      <header className="info-header">
        <Link className="brand" href={`${basePath}/`} aria-label="Psync home"><span className="brand-mark" aria-hidden="true">P</span><span>Psync</span></Link>
        <Link className="back-link" href={`${basePath}/`}><span aria-hidden="true">←</span> Home</Link>
      </header>
      <article className="info-article">
        <p className="exercise-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="info-intro">{intro}</p>
        <div className="info-content">{children}</div>
      </article>
    </main>
  );
}
