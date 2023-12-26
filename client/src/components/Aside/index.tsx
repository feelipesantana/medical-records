"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, parse } from "date-fns";
import { api } from "@/services/api";
import { AppointmentType } from "@/types/AppointmentType";
import { useAppointments } from "@/hook/useAppointmentsFiltered";
import { useQuery } from "@tanstack/react-query";

async function getAppointments() {
  const response = await api.get("/appointment");
  const result = await response.data;
  return result;
}

export function Aside() {
  const [startsAt, setStartsAt] = useState<Date>(new Date());
  const { setAppointments } = useAppointments();

  const { data } = useQuery<AppointmentType[]>({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });

  useEffect(() => {
    const startsAtFormatted = format(startsAt, "MM-dd-yy");

    const dataFiltered = data?.filter(
      (result) =>
        startsAtFormatted === format(new Date(result.startsAt), "MM-dd-yy")
    );

    if (!dataFiltered) return;

    setAppointments(dataFiltered);
  }, [startsAt]);

  // async function getAppointmentByDate() {
  //   if (date) {
  //     const dateFormatted = format(
  //       new Date(date),
  //       "yyyy-MM-dd'T'00:00:00.000'Z'"
  //     );

  //     console.log("dateFormatted", dateFormatted);
  //     try {
  //       console.log("RESULT Request", result);
  //       if (result) {
  //         const filterAppointmentsByDate = result.filter(
  //           (appointment: AppointmentType) =>
  //             appointment.startsAt === dateFormatted
  //         );

  //         console.log(filterAppointmentsByDate);
  //         setAppointmentsFiltered(filterAppointmentsByDate);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getAppointmentByDate();
  // }, [date]);
  return (
    <aside className="w-96 border border-l-blue-default flex flex-col items-center py-4  ">
      <div className="w-full mb-10">
        <Image
          src="/assets/logo3.png"
          alt="logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <Calendar
        mode="single"
        selected={startsAt}
        onSelect={setStartsAt}
        className="rounded-md border"
      />
    </aside>
  );
}
