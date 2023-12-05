"use client";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Image from "next/image";

export function Aside() {
  return (
    <aside className="w-96 border border-l-blue-default flex flex-col items-center p-4">
      <div>
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </div>

      <DateCalendar className="mt-10" />
    </aside>
  );
}
