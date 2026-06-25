"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row">
      {/* Thumbs */}
      <div className="flex gap-3 sm:flex-col">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`Voir l'image ${i + 1}`}
            className={`relative aspect-[3/4] w-16 shrink-0 overflow-hidden rounded-lg border transition-all sm:w-20 ${
              active === i ? "border-sage" : "border-line opacity-70"
            }`}
          >
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main */}
      <div className="relative aspect-[3/4] flex-1 overflow-hidden rounded-lg bg-line">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={images[active]}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
