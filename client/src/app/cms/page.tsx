"use client";
import { CreateAppointmentModal } from "@/components/CreateAppointmentModal";
import Schedule from "@/components/Schedule";
import { useAppointments } from "@/hook/useAppointmentsFiltered";

export default function CMS() {
  const { appointments } = useAppointments();

  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="text-lg text-center">Agenda </h1>

        <CreateAppointmentModal />
      </div>

      <Schedule />
    </div>
  );
}
