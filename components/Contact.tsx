
export default function Contact() {
  return (
    <section 
        id="contact" 
        className="w-full scroll-mt-24 bg-[#0a0a0a] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
          Contact
        </p>

        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-4 max-w-xl text-gray-400">
          Feel free to reach out if you&apos;d like to talk about engineering,
          cutting edge projects, research, or Indiana Pacers basketball :)
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a
            href="tel:+13174071996"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
          >
            <p className="mb-2 text-sm text-gray-500">Phone</p>
            <p className="text-lg font-medium">(317) 407-1996</p>
          </a>

          <a
            href="mailto:masonvrshek@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
          >
            <p className="mb-2 text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">masonvrshek@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/mason-vrshek"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
          >
            <p className="mb-2 text-sm text-gray-500">LinkedIn</p>
            <p className="text-lg font-medium">LinkedIn Profile</p>
          </a>
        </div>
      </div>
    </section>
  );
}


