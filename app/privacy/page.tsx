import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";

export const metadata: Metadata = { title: "Privacy — Psync", description: "How the current Psync preview handles your information." };

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Your reflections remain yours." intro="The current Psync preview is intentionally built without accounts, analytics or a database.">
      <section><h2>Exercise answers</h2><p>Your answers are held only in the memory of the open browser page so the exercise can create your final practice. Psync does not transmit or save them. They disappear when you refresh or close the page.</p></section>
      <section><h2>Cookies and tracking</h2><p>The application itself does not set tracking cookies and does not include advertising or analytics tools in this version.</p></section>
      <section><h2>Hosting information</h2><p>When this site is served through GitHub Pages, GitHub may log visitors&apos; IP addresses for security purposes. This is handled by the hosting provider, not by the Psync application. You can read more in the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</a>.</p></section>
      <section><h2>Important limitation</h2><p>Do not enter information you would be uncomfortable displaying on your screen. Other people with access to your device may be able to see the page while it is open.</p></section>
      <section><h2>Future changes</h2><p>If Psync later introduces optional storage, accounts or analytics, this page will be updated before those features are enabled. Privacy-friendly defaults will remain a product requirement.</p></section>
    </InfoPage>
  );
}
