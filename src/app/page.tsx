import { PromptCard } from "@/components/prompt-card";

const prompts = [
  {
    title: "Slide 1",
    focus: "Dandruff reveal",
    prompt:
      "Close-up shot of a black t-shirt shoulder with visible dandruff flakes, realistic lighting, shallow depth of field",
  },
  {
    title: "Slide 2",
    focus: "Mirror moment",
    prompt:
      "Person looking into mirror, brushing white flakes off shoulder, confused expression, indoor bathroom lighting",
  },
  {
    title: "Slide 3",
    focus: "Scalp anatomy",
    prompt:
      "Zoomed-in scalp view morphing into medical diagram illustration showing layers of skin and hair roots, clean clinical style",
  },
  {
    title: "Slide 4",
    focus: "Texture shift",
    prompt:
      "Healthy scalp transitioning into dry and flaky scalp texture, split view, medical educational infographic style",
  },
  {
    title: "Slide 5",
    focus: "Oil vs dryness",
    prompt:
      "Split image: oily scalp with glossy shine on one side, desert-dry cracked scalp on the other, high-resolution educational theme",
  },
  {
    title: "Slide 6",
    focus: "Root cause",
    prompt:
      "Microscopic illustration of Malassezia yeast on scalp, magnified cells, soft blue bioluminescent glow, scientific render",
  },
  {
    title: "Slide 7",
    focus: "Clinic consultation",
    prompt:
      "Dermatologist examining patient scalp with translucent HUD overlay of hydration levels, modern clinic, natural light",
  },
  {
    title: "Slide 8",
    focus: "Shampoo action",
    prompt:
      "Dynamic macro shot of shampoo lather breaking apart dandruff flakes, energetic motion trails, crisp studio lighting",
  },
  {
    title: "Slide 9",
    focus: "Progress timeline",
    prompt:
      "Before-and-after scalp transformation across calendar weeks, minimalist timeline infographic, soft neutral palette",
  },
  {
    title: "Slide 10",
    focus: "Confidence return",
    prompt:
      "Woman smiling outdoors with wind in hair, dandruff-free, warm golden hour lighting, lifestyle photography",
  },
  {
    title: "Slide 11",
    focus: "Care kit",
    prompt:
      "Flat lay of anti-dandruff care essentials: shampoo bottle, dropper serum, herbal ingredients, arranged on clean spa backdrop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-sky-900 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.08),_transparent_40%)]" />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <header className="grid gap-6 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300/80">
            Visual storyboard prompts
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            11-frame dandruff awareness sequence
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-300 sm:mx-0">
            Ready-to-render prompts for slides, shorts, or reels. Each visual is
            crafted to tell the story without on-screen text, pairing close-up
            problem reveals with solution-led imagery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="rounded-full border border-sky-400/30 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-200/90">
              No captions required
            </span>
            <span className="rounded-full border border-sky-400/30 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-200/90">
              Fits slides & reels
            </span>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.map((prompt, index) => (
            <PromptCard
              key={prompt.title}
              index={index + 1}
              title={prompt.title}
              prompt={prompt.prompt}
              focus={prompt.focus}
            />
          ))}
        </section>

        <footer className="rounded-3xl border border-white/10 bg-white/10 px-6 py-8 text-center text-xs text-slate-200 backdrop-blur sm:text-left">
          <p>
            Tip: Keep each generated frame free of overlay text so your existing
            script and voiceover remain the hero. These prompts are optimized for
            photorealistic or illustrative renders depending on your model.
          </p>
        </footer>
      </main>
    </div>
  );
}
