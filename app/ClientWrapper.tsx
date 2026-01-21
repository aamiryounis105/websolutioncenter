"use client";

import { ReactNode, useEffect, useState } from "react";
import SmoothScroll from "./SmoothScroll"; // client component

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Only render SmoothScroll after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // fallback during SSR

  return <SmoothScroll>{children}</SmoothScroll>;
}
