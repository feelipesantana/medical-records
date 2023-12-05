"use client";

import { ReactNode } from "react";
import { DatePickerProvider } from "./DatePickerProvider";

export function AppProvider({ children }: { children: ReactNode }) {
  return <DatePickerProvider>{children}</DatePickerProvider>;
}
