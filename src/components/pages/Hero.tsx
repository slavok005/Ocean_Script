"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex flex-col items-center text-center px-6 mt-20 relative z-10 max-w-3xl">
      <h2 className="text-5xl font-bold leading-tight">
        Transforming Ideas into Digital Marvels
      </h2>
      <p className="text-gray-300 mt-6 text-lg">
        Lorem ipsum dolor sit amet consectetur. Vivamus est eget ut ipsum
        vulputate adipiscing condimentum.
      </p>

      {/* Кнопка полностью из изображения */}
    <button className="mt-8 relative group">
        <Image
          src="/Btn.png"
          alt="Go to services"
          width={200}
          height={60}
          className="transition-transform group-hover:scale-105"
        />
      </button>
    </main>
  );
}
