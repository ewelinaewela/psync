import type { Metadata } from "next";
import { GuidedExercise } from "../../components/GuidedExercise";

export const metadata: Metadata = {
  title: "Practise under pressure — Psync",
  description: "Plan a small, manageable rehearsal for an everyday pressure situation.",
};

export const dynamic = "force-static";

export default function AnxietyPressurePage() {
  return <GuidedExercise kind="anxiety-pressure" />;
}
