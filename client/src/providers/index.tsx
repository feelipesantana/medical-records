"use client";

import { ReactNode } from "react";
import { NextAuthProvider } from "./NextAuthProvider";
import { QueryProvider } from "./QueryProvider";

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return (
    <NextAuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </NextAuthProvider>
  );
}
