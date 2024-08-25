"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(auth === "true");
    }
  }, []);

  if (isAuthenticated) {
    router.push("/sportbooker/home");
  } else {
    router.push("/login");
  }

  return null;
}
