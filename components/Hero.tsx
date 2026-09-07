export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-8 pt-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-500">
            Mechanical Engineering · Robotics · Autonomous Systems
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] md:text-8xl lg:text-[10rem]">
            Mason
            <br />
            Vrshek
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Second year Mechanical engineering student at Purdue University
              interested in Manufacturing, Humanoid Robotics, embedded systems, and building solutions from the ground up.
            </p>

            <a
              href="/projects"
              className="w-fit border-b border-white pb-1 text-sm text-white transition-colors hover:text-gray-400"
            >
              Explore my work →
            </a>
          </div>
        </div>

        
       
      </div>
    </section>
  );
}

