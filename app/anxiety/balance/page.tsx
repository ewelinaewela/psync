import type { Metadata } from "next";
import { GuidedExercise } from "../../components/GuidedExercise";

export const metadata: Metadata = {
  title: "Demands and resources — Psync",
  description: "Reflect on pressures, resources and one manageable next step.",
};

export const dynamic = "force-static";

export default function AnxietyBalancePage() {
  return <GuidedExercise kind="anxiety-balance" />;
}
