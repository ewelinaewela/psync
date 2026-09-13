import type { Metadata } from "next";
import { InfoPage } from "../components/InfoPage";

export const metadata: Metadata = { title: "Safety — Psync", description: "The scope and safety limitations of Psync." };

export const dynamic = "force-static";

export default function SafetyPage() {
  return (
    <InfoPage eyebrow="Safety" title="Psync is practice—not treatment." intro="Psync is an educational tool for practising mental skills. It does not diagnose conditions, provide therapy or replace a qualified professional.">
      <section><h2>Use the exercises gently</h2><p>You are always free to pause or stop. Choose situations that feel manageable. If an exercise causes distress, step away from it and consider talking to someone you trust or a qualified healthcare professional.</p></section>
      <section><h2>When Psync is not the right tool</h2><p>Do not rely on Psync during a mental health crisis, when someone may be in danger, or when you need medical advice. The app cannot monitor your wellbeing or contact help for you.</p></section>
      <section className="urgent-support"><h2>Urgent support in the UK</h2><p>If you or someone else is in immediate danger, call <strong>999</strong> or go to A&amp;E. For urgent mental health help that is not an emergency, call <strong>NHS 111</strong> and select the mental health option. You can also call Samaritans free at <strong>116 123</strong>, any time.</p><div className="support-links"><a href="https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/">NHS urgent mental health help</a><a href="https://www.samaritans.org/how-we-can-help/contact-samaritan/">Contact Samaritans</a></div></section>
      <section><h2>Outside the UK</h2><p>Contact your local emergency services or a crisis service in your country. Psync does not maintain a global directory, so use an official local health or government source.</p></section>
    </InfoPage>
  );
}
