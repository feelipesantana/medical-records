"use client";
import { Resume } from "@/components/Resume";
import { TimeLine } from "@/components/TimeLine";
import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <h1 className="text-lg text-center">Prontuário </h1>

      <Resume />

      <TimeLine />
    </div>
  );
}
