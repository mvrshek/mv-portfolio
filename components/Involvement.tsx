export default function Involvement() {
  const items = [
    {
      number: "01",
      title: "MARS Lab @ Purdue",
      description:
        "Developing tactile sensing hardware to integrate with machine-learning based force estimation for humanoid robots.",
    },
    {
      number: "02",
      title: "ASME: Biomechanics",
      description:
        "GM sponsored Autonomous vehicle accesibility project.",
    },
    {
      number: "03",
      title: "Snowbot",
      description:
        "Snow plowing reimagined in the age of autonomy.",
    },
  ];

  return (
    <section className="px-8 py-32 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Currently
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            What I'm working on.
          </h2>
        </div>

        <div className="mt-20 border-t border-white/10">
          {items.map((item) => (
            <div
              key={item.number}
              className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_1.5fr] md:items-center"
            >
              <span className="text-sm text-gray-600">
                {item.number}
              </span>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="max-w-lg leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}