import Image from "next/image";

export default function PhotoSection() {
  return (
    <section className="px-8 py-32 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            A little more about me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Outside the CAD screen.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/photos/photo1.jpg"
              alt="Mason"
              width={800}
              height={600}
              className="h-full w-full object-cover transition duration-700 hover:scale-100"
            />
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/photos/photo2.jpeg"
              alt="Mason"
              width={800}
              height={600}
              className="h-full w-full object-cover transition duration-700 hover:scale-100"
            />
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/photos/photo3.jpeg"
              alt="Mason"
              width={800}
              height={600}
              className="h-full w-full object-cover transition duration-700 hover:scale-100"
            />
          </div>

        </div>

      </div>
    </section>
  );
}