"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, parse } from "date-fns";
import { api } from "@/services/api";
import { AppointmentType } from "@/types/AppointmentType";
import { useAppointments } from "@/hook/useAppointmentsFiltered";
import { useQuery } from "@tanstack/react-query";
import { parseCookies } from "nookies";
import { useChosenDate } from "@/hook/useChosenDate";

export function Aside() {
  const { chosenDate, setChosenDate } = useChosenDate();
  const { setAppointments } = useAppointments();

  async function getAppointments(date = new Date()) {
    const formattedDate = format(date, "yyyy-MM-dd");

    const response = await api.get("/appointments/", {
      params: {
        date: String(formattedDate), // Convertendo a data para um formato reconhecido
      },
    });

    const result: AppointmentType[] = await response.data;

    if (result) {
      setAppointments(result);
      return result;
    } else {
      return [];
    }
  }

  const { data, refetch } = useQuery<AppointmentType[]>({
    queryKey: ["appointments"],
    queryFn: () => getAppointments(chosenDate),
  });

  useEffect(() => {
    refetch();
  }, [chosenDate]);
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
        selected={chosenDate}
        onSelect={setChosenDate}
        className="rounded-md border"
      />
    </aside>
  );
}
