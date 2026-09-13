import type { Metadata } from "next";
import { GuidedExercise } from "../components/GuidedExercise";

export const metadata: Metadata = {
  title: "Inner Voice practice — Psync",
  description: "Notice and reshape the self-talk that affects your performance.",
};

export const dynamic = "force-static";

export default function InnerVoicePage() {
  return <GuidedExercise kind="inner-voice" />;
}
