"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/auth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if ( !currentUser) {
      router.replace("/login");
    }
  }, [currentUser, router]);

  if ( !currentUser) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return <>{children}</>;
}
