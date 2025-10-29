"use client";
import { AuthProvider } from '@/context/auth';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}