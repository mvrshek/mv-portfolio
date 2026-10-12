"use client";

import Image from "next/image";
import { useState } from "react";

type CivicProjectImageProps = {
  src: string;
  alt: string;
  sizes: string;
};

export default function CivicProjectImage({ src, alt, sizes }: CivicProjectImageProps) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">
      {unavailable ? (
        <div className="flex h-full items-center justify-center border border-white/10 px-6 text-center text-gray-500">
          <p>{alt} placeholder</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-contain"
          onError={() => setUnavailable(true)}
        />
      )}
    </div>
  );
}
