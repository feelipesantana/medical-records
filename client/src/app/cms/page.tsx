"use client";
import { TimeLine } from "@/components/TimeLine";
import { Button, TextField } from "@mui/material";

export default function CMS() {
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <h1 className="text-lg text-center">Agenda </h1>

      <TimeLine />
    </div>
  );
}
