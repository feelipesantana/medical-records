"use client";
import { CreateAppointment } from "@/components/Modals/CreateAppointment";
import { Schedule } from "@/components/Schedule";

export default function CMS() {
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="text-lg text-center">Agenda </h1>

        <CreateAppointment />
      </div>

      <Schedule />
    </div>
  );
}
