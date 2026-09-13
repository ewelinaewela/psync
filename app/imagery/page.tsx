import type { Metadata } from "next";
import { GuidedExercise } from "../components/GuidedExercise";

export const metadata: Metadata = {
  title: "Imagery practice — Psync",
  description: "Build a guided mental rehearsal for a meaningful situation.",
};

export const dynamic = "force-static";

export default function ImageryPage() {
  return <GuidedExercise kind="imagery" />;
}
