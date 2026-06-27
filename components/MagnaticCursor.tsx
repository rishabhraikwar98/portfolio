"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const dotSpringX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const dotSpringY = useSpring(cursorY, { stiffness: 500, damping: 40 });
  const ringSpringX = useSpring(cursorX, { stiffness: 250, damping: 30 });
  const ringSpringY = useSpring(cursorY, { stiffness: 250, damping: 30 });

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) setIsHovering(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isTouchDevice, cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small solid dot, tracks tightly */}
      <motion.div
        style={{ translateX: dotSpringX, translateY: dotSpringY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-100 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet"
      />
      {/* Larger outline ring, trails slightly behind, expands on hover */}
      <motion.div
        style={{ translateX: ringSpringX, translateY: ringSpringY }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none fixed left-0 top-0 z-100 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent-cyan"
      />
    </>
  );
}