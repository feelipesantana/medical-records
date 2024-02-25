"use client";

import { CalendarIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { api } from "@/services/api";
import { format } from "date-fns-tz";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Diplomata } from "next/font/google";
import { z } from "zod";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { formatDateWithTime } from "@/utils/formatDateWithTime";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { useOpenModal } from "@/hook/useOpenModal";

interface CreateAppointmentProps {
  children: ReactNode;
}

const schemaZod = z.object({
  patientId: z.string(),
  dateAt: z.string(),
  startsAt: z.string(),
  endsAt: z.string(),
  description: z.string(),
});

type FormValues = z.infer<typeof schemaZod>;

export function EventClickModal() {
  const { openModal, setOpenModal } = useOpenModal()
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="sm:max-w-[28rem]">
        <DialogHeader>
          <DialogTitle>Registrar Consulta</DialogTitle>
          <DialogDescription>Registre as consultas diárias</DialogDescription>
        </DialogHeader>

      </DialogContent>
    </Dialog>
  );
}
