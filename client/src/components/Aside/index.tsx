"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, parse } from "date-fns";
import { api } from "@/services/api";

export function Aside() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [appointments, setAppointments] = useState();

  async function getAppointmentByDate() {
    if (date) {
      const dataFormatada = format(new Date(date), "yyyy-MM-dd");
      try {
        const response = await api.get("/appointment");
        const result = response.data;

        console.log(result);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <aside className="w-96 border border-l-blue-default flex flex-col items-center py-4  ">
      <div className="border-b-2 border-slate-200 w-full mb-10">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        onDayClick={getAppointmentByDate}
      />
    </aside>
  );
}
