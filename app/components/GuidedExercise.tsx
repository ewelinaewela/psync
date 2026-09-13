"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ExerciseKind = "imagery" | "inner-voice";
type FieldType = "text" | "textarea" | "choice";

type Field = {
  id: string;
  label: string;
  placeholder?: string;
  type?: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
};

type Step = {
  eyebrow: string;
  title: string;
  guidance: string;
  type?: "form" | "timer";
  fields: Field[];
};

type Exercise = {
  title: string;
  duration: string;
  intro: string;
  explanationTitle: string;
  explanation: string[];
  steps: Step[];
};

const exercises: Record<ExerciseKind, Exercise> = {
  imagery: {
    title: "Imagery",
    duration: "8–12 min",
    intro: "Create, practise and develop a vivid mental image.",
    explanationTitle: "Why is imagery useful?",
    explanation: [
      "Imagery is the skill of mentally rehearsing an action or situation without physically performing it. High performers use it to prepare, build confidence and support the development of movement skills.",
      "A useful image includes more than what you see. Physical sensations, sounds, emotions and relevant people can make the rehearsal feel more realistic.",
      "Keep it simple at first. Like any mental skill, imagery becomes easier and more detailed with practice.",
    ],
    steps: [
      {
        eyebrow: "Prepare",
        title: "Set up your imagery practice",
        guidance: "Choose one specific and meaningful situation. Then decide when and where you will practise imagining it.",
        fields: [
          { id: "situation", label: "Describe the situation you want to imagine", placeholder: "e.g. performing a fast and accurate tennis serve under pressure", type: "textarea", required: true },
          { id: "practiceWhen", label: "When will you practise your imagery?", placeholder: "e.g. at home before training" },
          { id: "practiceWhere", label: "Where will you practise it?", placeholder: "e.g. in a quiet room or beside the court" },
          { id: "people", label: "Who is around you in the imagined situation?", placeholder: "e.g. team-mates, coaches or a crowd" },
        ],
      },
      {
        eyebrow: "Add detail",
        title: "Make the image realistic",
        guidance: "Imagine the situation from your own point of view. Focus only on details that are relevant to the performance.",
        fields: [
          { id: "emotion", label: "What emotions would you like to feel?", placeholder: "e.g. confident, excited, strong and in control", required: true },
          { id: "physical", label: "What physical feelings would you like to focus on?", placeholder: "e.g. the movement of your arm and the tension releasing from your shoulders", type: "textarea" },
          { id: "senses", label: "What will you see and hear?", placeholder: "Add the sights and sounds that make the situation feel real", type: "textarea" },
        ],
      },
      {
        eyebrow: "Imagine",
        title: "Picture it for 30 seconds",
        guidance: "Make the situation as clear and vivid as possible. It may help to close your eyes. You can stop at any time.",
        type: "timer",
        fields: [],
      },
      {
        eyebrow: "Reflect",
        title: "How vivid was your image?",
        guidance: "There is no pass or fail. Noticing the current quality of the image helps you decide what to practise next.",
        fields: [
          { id: "vividness", label: "Choose the closest description", type: "choice", required: true, options: [
            { value: "Not clear yet", label: "Not clear yet" },
            { value: "Some details", label: "I noticed some details" },
            { value: "Clear", label: "Clear and easy to follow" },
            { value: "Very vivid", label: "Very vivid and realistic" },
          ] },
        ],
      },
      {
        eyebrow: "Develop",
        title: "Strengthen the image",
        guidance: "Use full sentences. Add the details that would make the next rehearsal more realistic and useful for you.",
        fields: [
          { id: "development", label: "Describe your developed image", placeholder: "Write the scene as if it is happening now: what you notice, feel and do…", type: "textarea", required: true },
          { id: "cue", label: "Choose a short cue phrase", placeholder: "e.g. smooth and strong" },
        ],
      },
    ],
  },
  "inner-voice": {
    title: "Inner Voice",
    duration: "6–10 min",
    intro: "Notice your self-talk and train a more helpful response.",
    explanationTitle: "What is self-talk?",
    explanation: [
      "We all have an inner voice: a running commentary that may be spoken aloud or heard quietly in our thoughts. It can be helpful or unhelpful, and it influences how we feel and act.",
      "This voice is especially noticeable in challenging situations, when fear or harsh self-criticism can become an automatic response. It can also affect our enjoyment and our ability to recover after effort.",
      "This exercise helps you listen to your self-talk, decide whether it supports you, and practise a more productive response.",
    ],
    steps: [
      {
        eyebrow: "Notice",
        title: "Recall a challenging moment",
        guidance: "Mistakes and setbacks are a normal part of attempting something difficult. Be honest about the moment without being unfairly harsh with yourself.",
        fields: [
          { id: "situation", label: "What challenging situation did you experience?", placeholder: "e.g. making an important mistake or feeling anxious before a difficult task", type: "textarea", required: true },
          { id: "thought", label: "What did you say to yourself at the time?", placeholder: "Write the words as you remember them", type: "textarea", required: true },
        ],
      },
      {
        eyebrow: "Evaluate",
        title: "Did your self-talk help you?",
        guidance: "Think about whether those words helped you respond effectively in that moment.",
        fields: [
          { id: "helpful", label: "Did it help you at the time?", type: "choice", required: true, options: [
            { value: "yes", label: "Yes, it supported me" },
            { value: "no", label: "No, it held me back" },
          ] },
        ],
      },
      {
        eyebrow: "Draft",
        title: "Develop helpful self-talk",
        guidance: "Helpful self-talk should be fair, realistic and productive. Imagine how you would speak to a good friend facing the same challenge.",
        fields: [
          { id: "newSelfTalk", label: "What could you say to yourself next time?", placeholder: "Write a positive and helpful response you would feel comfortable hearing aloud", type: "textarea", required: true },
        ],
      },
      {
        eyebrow: "Keyword",
        title: "Create a simple reminder",
        guidance: "A short word or phrase is easier to recall when pressure rises. Use it to bring your helpful self-talk back to mind.",
        fields: [
          { id: "cue", label: "What word or phrase will remind you?", placeholder: "e.g. reset, one step at a time, stay present", required: true },
          { id: "nextTime", label: "When might you need it next?", placeholder: "e.g. before Tuesday's presentation" },
        ],
      },
      {
        eyebrow: "Practise",
        title: "Prepare it before the challenge",
        guidance: "Helpful self-talk becomes more automatic through repetition. Practise it first in a peaceful moment, then use it in the real situation.",
        fields: [
          { id: "practicePlan", label: "When will you practise it in a peaceful moment?", placeholder: "e.g. for one minute tomorrow morning", required: true },
        ],
      },
    ],
  },
};

export function GuidedExercise({ kind }: { kind: ExerciseKind }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const exercise = exercises[kind];
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showError, setShowError] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);
  const complete = started && step === exercise.steps.length;
  const current = !complete ? exercise.steps[step] : undefined;

  useEffect(() => {
    if (!timerRunning) return;
    const timer = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          setTimerRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [timerRunning]);

  const result = useMemo(() => {
    if (kind === "imagery") {
      return {
        label: "Your imagery practice",
        title: answers.cue || "Your developed image",
        paragraphs: [
          answers.development || `I imagine ${answers.situation || "the situation"} as if it is happening now.`,
          `I focus on feeling ${answers.emotion || "confident and in control"}. ${answers.physical ? `I notice ${answers.physical}.` : ""} ${answers.senses ? `I see and hear ${answers.senses}.` : ""}`,
          `${answers.people ? `The relevant people around me are ${answers.people}.` : ""} I keep the image specific, meaningful and focused on what I can control.`,
        ].filter(Boolean),
        tip: `Practise this image for 30 seconds${answers.practiceWhen ? ` ${answers.practiceWhen}` : ""}${answers.practiceWhere ? `, ${answers.practiceWhere}` : ""}. Your last image felt: ${answers.vividness || "not rated"}.`,
      };
    }

    return {
      label: "Your helpful self-talk",
      title: answers.cue || "A useful reminder",
      paragraphs: [
        `In ${answers.situation || "a challenging situation"}, I noticed myself saying: “${answers.thought || "I cannot do this"}”.`,
        answers.helpful === "yes" ? "That response helped me. I can deliberately return to what worked." : "That response held me back. I can acknowledge it without continuing to speak to myself unfairly.",
        `Next time I will say: “${answers.newSelfTalk || "I can take the next useful step."}”`,
      ],
      tip: `Practise “${answers.cue || "my cue phrase"}” ${answers.practicePlan || "in a peaceful moment"}${answers.nextTime ? `, ready for ${answers.nextTime}` : ""}. Repetition helps the response become easier to access when a challenge arrives.`,
    };
  }, [answers, kind]);

  function updateAnswer(id: string, value: string) {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [id]: value }));
    setShowError(false);
  }

  function goNext() {
    if (!current) return;
    const missingRequired = current.fields.some((field) => field.required && !answers[field.id]?.trim());
    if (missingRequired) {
      setShowError(true);
      return;
    }
    setStep((currentStep) => currentStep + 1);
    setShowError(false);
    setTimerRunning(false);
    setSeconds(30);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (step === 0) {
      setStarted(false);
    } else {
      setStep((value) => value - 1);
    }
    setTimerRunning(false);
    setSeconds(30);
    setShowError(false);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setStarted(false);
    setShowError(false);
    setTimerRunning(false);
    setSeconds(30);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="exercise-page">
      <header className="exercise-header">
        <Link className="back-link" href={`${basePath}/`} aria-label="Back to home"><span aria-hidden="true">←</span> Home</Link>
        <div className="exercise-identity">
          {/* Local SVG from the original Psync design system. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}${kind === "imagery" ? "/imagery.svg" : "/inner-voice.svg"}`} alt="" width="42" height="42" />
          <div><strong>{exercise.title}</strong><span>{exercise.duration}</span></div>
        </div>
        <span className="local-note">Not saved</span>
      </header>

      <div className="exercise-layout">
        <aside className="exercise-sidebar" aria-label="Exercise progress">
          <p>{exercise.intro}</p>
          <ol>
            {exercise.steps.map((item, index) => (
              <li className={started && index === step ? "active" : started && (index < step || complete) ? "done" : ""} key={item.eyebrow}>
                <span>{started && (index < step || complete) ? "✓" : index + 1}</span>
                <div><small>Step {index + 1}</small><strong>{item.eyebrow}</strong></div>
              </li>
            ))}
          </ol>
        </aside>

        <section className="exercise-card" aria-live="polite">
          {!started ? (
            <div className="intro-view">
              <p className="exercise-eyebrow">Before you begin</p>
              <h1>{exercise.explanationTitle}</h1>
              <div className="intro-copy">{exercise.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="protocol-note"><strong>Take your time</strong><p>Your answers are not saved. You can pause or leave the exercise whenever you want.</p></div>
              <div className="exercise-actions"><Link className="text-link" href={`${basePath}/`}>Not now</Link><button className="button-primary" type="button" onClick={() => setStarted(true)}>Begin exercise <span aria-hidden="true">→</span></button></div>
            </div>
          ) : !complete && current ? (
            <>
              <div className="progress-mobile"><span>Step {step + 1} of {exercise.steps.length}</span><span>{Math.round(((step + 1) / exercise.steps.length) * 100)}%</span></div>
              <div className="progress-track" aria-hidden="true"><span style={{ width: `${((step + 1) / exercise.steps.length) * 100}%` }} /></div>
              <p className="exercise-eyebrow">{current.eyebrow}</p>
              <h1>{current.title}</h1>
              <p className="exercise-guidance">{current.guidance}</p>

              {kind === "inner-voice" && step === 1 && answers.helpful && (
                <div className={`protocol-note ${answers.helpful === "yes" ? "helpful-note" : "unhelpful-note"}`}>
                  <strong>{answers.helpful === "yes" ? "That is a useful skill" : "Treat yourself fairly"}</strong>
                  <p>{answers.helpful === "yes" ? "Your self-talk supported you when you needed it. The next steps will help you make that response easier to repeat." : "Unhelpful self-talk does not move you towards the person you want to be. Consider what you would say to a good friend in the same moment."}</p>
                </div>
              )}

              {current.type === "timer" && (
                <div className="timer-panel">
                  <span className="timer-value" aria-live="off">{seconds}</span>
                  <span className="timer-label">seconds</span>
                  <button className="button-primary" type="button" onClick={() => seconds === 0 ? setSeconds(30) : setTimerRunning((value) => !value)}>{seconds === 0 ? "Practise again" : timerRunning ? "Pause" : "Start 30 seconds"}</button>
                </div>
              )}

              <div className="exercise-fields">
                {current.fields.map((field) => (
                  <fieldset className={field.type === "choice" ? "choice-field" : "text-field"} key={field.id}>
                    <legend>{field.label}{field.required && <em>Required</em>}</legend>
                    {field.type === "choice" ? (
                      <div className="choice-grid">{field.options?.map((option) => <label className={answers[field.id] === option.value ? "selected" : ""} key={option.value}><input type="radio" name={field.id} value={option.value} checked={answers[field.id] === option.value} onChange={(event) => updateAnswer(field.id, event.target.value)} /><span>{option.label}</span></label>)}</div>
                    ) : field.type === "textarea" ? (
                      <textarea rows={3} value={answers[field.id] || ""} onChange={(event) => updateAnswer(field.id, event.target.value)} placeholder={field.placeholder} />
                    ) : (
                      <input value={answers[field.id] || ""} onChange={(event) => updateAnswer(field.id, event.target.value)} placeholder={field.placeholder} />
                    )}
                  </fieldset>
                ))}
              </div>

              {showError && <p className="field-error" role="alert">Please answer each required question before continuing.</p>}
              <div className="exercise-actions"><button className="button-secondary" type="button" onClick={goBack}>Back</button><button className="button-primary" type="button" onClick={goNext}>{step === exercise.steps.length - 1 ? "Complete exercise" : "Continue"}<span aria-hidden="true">→</span></button></div>
            </>
          ) : (
            <div className="result-view">
              <div className="result-check" aria-hidden="true">✓</div>
              <p className="exercise-eyebrow">{result.label}</p>
              <h1>{result.title}</h1>
              <div className="result-script">{result.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="practice-tip"><strong>Train the skill</strong><p>{result.tip}</p></div>
              <p className="privacy-reminder">Your answers disappear when you close or refresh this page.</p>
              <div className="exercise-actions result-actions"><button className="button-secondary" type="button" onClick={() => setStep(exercise.steps.length - 1)}>Edit answers</button><button className="button-primary" type="button" onClick={restart}>Start again</button><Link className="text-link" href={`${basePath}/`}>Finish</Link></div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
