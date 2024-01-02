"use client";
import { CreateAppointmentModal } from "@/components/CreateAppointmentModal";
import { TimeLine } from "@/components/TimeLine";
import { Button } from "@/components/ui/button";
import { TextField } from "@mui/material";

export default function CMS() {
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="text-lg text-center">Agenda </h1>

        <CreateAppointmentModal />
      </div>
      <TimeLine />
    </div>
  );
}
