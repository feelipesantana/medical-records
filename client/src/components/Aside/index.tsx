"use client";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Image from "next/image";

export function Aside() {
  return (
    <aside className="w-96 border border-l-blue-default flex flex-col items-center p-4">
      <div>
        <Image src="/assets/logo-2.png" alt="logo" width={100} height={100} />
      </div>

      <DateCalendar className="mt-10" />
    </aside>
  );
}
