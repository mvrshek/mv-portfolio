export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-32 md:px-16 lg:px-24"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Passion for creativity and innovation.
          </h2>
        </div>

        <div className="text-lg leading-relaxed text-gray-600">
          <p>
            Since I was young, I’ve always been fascinated by how devices and machines work and by the process of bringing them to life. Whether it was Snap Circuits projects or modified RC cars, I was always building, and I’ve carried that passion with me throughout my academic career.
            </p>

          <p className="mt-6">
            I enjoy taking projects from mechanical design and
            prototyping through electronics, controls, and
            rigorous testing.
          </p>
        </div>
      </div>
    </section>
  );
}