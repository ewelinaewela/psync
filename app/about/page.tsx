import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";

export const metadata: Metadata = { title: "About — Psync", description: "Why Psync exists and what we are building." };

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About Psync" title="Mental skills should be easier to practise." intro="Psync turns simple exercises inspired by sport psychology into short, guided digital practices for everyday performance.">
      <section><h2>The idea</h2><p>Athletes practise mental skills alongside physical ones: they rehearse situations, direct their attention and learn to speak to themselves constructively. These skills can also help with work, study, creative challenges and other meaningful moments.</p></section>
      <section><h2>What this early version includes</h2><p>This first open-source version focuses on two practices: Imagery and Inner Voice. It has no account, no social features and no artificial-intelligence chat. The goal is to make the core exercises useful before adding complexity.</p></section>
      <section><h2>Open by design</h2><p>Psync is being rebuilt as an open-source project. Once the foundation is ready, the source code and contribution guidance will be published so people can review it, suggest improvements and help build it responsibly.</p></section>
    </InfoPage>
  );
}
