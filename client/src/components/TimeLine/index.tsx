"use client";
import { useAppointments } from "@/hook/useAppointmentsFiltered";
export function TimeLine() {
  const { appointments } = useAppointments();

  console.log(appointments);
  return <div className="w-full h-full "></div>;
}
