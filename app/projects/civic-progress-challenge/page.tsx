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
            Civic Progress Challenge: SAE 
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Civic progress challenge
          </h1>
          <p className="mt-4 text-xl text-gray-400 md:text-2xl">
            GM Sponsored Accesibility project. Bringing inclusive mobility to the GM vehicles.
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
              The Civic Progress Challenge is a GM & SAE sponsored design challenge spanning 2 years, centered around developing accesible design for GM vehicles. As a member of Purdues team for the challenge, I serve as a digital twin subteam lead, where I am actively developing a one to one digital model for our design changes, so that we can simulate work prior to implementation. Additioanlly, the digital twin is being used to validate new features through lived experience research, as the model is currently being assessed by a group of disabled individuals in our community, so they can help us improve our design before we make physical changes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-16 md:grid-cols-2 md:items-center">
          <CivicProjectImage
            src="/civic-progress-challenge/detail.png"
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
              Our subteam is still in the initial phases of the digital twin development process, as we are waiting on designs from other teams for a more nuanced ramp, and handlebar design. However, we have been able to develop a basic model of the vehicle, ramp and a cityscape, together with a control architecture that allows users to switch between 3rd person view when operating the vehicle, to first person view for more realistic simulation of wheelchair applications. For the future, we are seeking to obtain a more accurate 3D model of the GM chassis we are modifying, using a creality 3d scanner, and we also want to implement the novel designs from the ramp and handle attachment subteams into our digital twin with the goal of using virtual reality technology in coordination with our digital twin to enable research participants to trial the accesibility system prior to physical implementation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
