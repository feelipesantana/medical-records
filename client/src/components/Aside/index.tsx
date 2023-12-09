"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, parse } from "date-fns";
import { api } from "@/services/api";
import { AppointmentType } from "@/types/AppointmentType";
import { useAppointmentFiltered } from "@/hook/useAppointmentsFiltered";

export function Aside() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { setAppointmentsFiltered } = useAppointmentFiltered();
  async function getAppointmentByDate() {
    if (date) {
      const dateFormatted = format(
        new Date(date),
        "yyyy-MM-dd'T'00:00:00.000'Z'"
      );

      try {
        const response = await api.get("/appointment");
        const result = await response.data;

        if (result) {
          const filterAppointmentsByDate = result.filter(
            (appointment: AppointmentType) => appointment.date === dateFormatted
          );

          console.log(filterAppointmentsByDate);
          setAppointmentsFiltered(filterAppointmentsByDate);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    getAppointmentByDate();
  }, [date]);
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
      />
    </aside>
  );
}
