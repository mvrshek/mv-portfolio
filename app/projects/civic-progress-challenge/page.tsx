import Link from "next/link";
import CivicProjectImage from "@/components/CivicProjectImage";

export default function CivicProgressChallengePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-8 pb-24 pt-40 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            &larr; Back to Projects
          </Link>

          <p className="mt-16 text-sm uppercase tracking-[0.3em] text-gray-500">
            Civic Progress
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Civic progress challenge
          </h1>
          <p className="mt-4 text-xl text-gray-400 md:text-2xl">
            Project overview and highlights
          </p>

          <div className="mt-16">
            <CivicProjectImage
              src="/civic-progress-challenge/hero.jpg"
              alt="Civic progress challenge wide project image"
              sizes="(min-width: 1536px) 1280px, 100vw"
            />
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Overview
            </p>
            {/* Replace this paragraph with your project overview. */}
            <p className="text-xl leading-relaxed text-gray-300">
              Add an introduction to the Civic progress challenge here. Describe
              the challenge, the project goals, and your involvement.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-16 md:grid-cols-2 md:items-center">
          <CivicProjectImage
            src="/civic-progress-challenge/detail.jpg"
            alt="Civic progress challenge project detail"
            sizes="(min-width: 1536px) 616px, (min-width: 768px) 50vw, 100vw"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              01
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Project Details
            </h2>
            {/* Replace this paragraph with text about the detail image. */}
            <p className="mt-6 leading-relaxed text-gray-400">
              Add more details about your work here. Use this section to explain
              the accompanying image, your contributions, and the project results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
