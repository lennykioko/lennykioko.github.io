"use client";
import { Suspense } from "react";
import HobbyProjects from "./HobbyProjects";

function HobbyProjectsFallback() {
  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100 p-4">
      <div className="p-4 text-center text-2xl font-bold">Hobby Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <div className="w-96 h-64 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    </section>
  );
}

export default function HobbyProjectsWrapper() {
  return (
    <Suspense fallback={<HobbyProjectsFallback />}>
      <HobbyProjects />
    </Suspense>
  );
}
