"use client";

export function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]">
      <div className="h-full w-full animate-grain bg-noise bg-repeat opacity-50" />
    </div>
  );
}
