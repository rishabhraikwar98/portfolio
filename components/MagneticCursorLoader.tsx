"use client";

import dynamic from "next/dynamic";

const MagneticCursor = dynamic(
  () => import("@/components/MagnaticCursor").then((mod) => mod.MagneticCursor),
  { ssr: false }
);

export function MagneticCursorLoader() {
  return <MagneticCursor />;
}