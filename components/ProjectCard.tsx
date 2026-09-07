import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  image,
  slug,
}: ProjectCardProps) {
  return (
    <div className="group">
      
    
      <div className="mt-6 grid gap-4 md:grid-cols-[80px_1fr]">
        <p className="text-sm text-gray-400">{number}</p>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {category}
          </p>

          <h3 className="mt-2 text-3xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
            {description}
          </p>

          <Link
            href={`/projects/${slug}`}
            className="mt-6 inline-block text-sm font-medium text-white transition-opacity hover:opacity-50"
          >
            View Project →
          </Link>
        </div>
      </div>
    </div>
  );
}

