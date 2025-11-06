import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient + content overlay. pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative h-full flex items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Minimal CRUD Dashboard
            </h1>
            <p className="mt-3 text-neutral-600 max-w-2xl">
              Manage items with a clean, modern interface. Add, search, edit, and delete with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
