"use client";

import { CalendarIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { api } from "@/services/api";
import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz";
import { setHours, setMinutes } from "date-fns";
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

interface CreateAppointmentModalProps {
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
export function CreateAppointmentModal() {
  const [date, setDate] = useState<Date>();

  const { handleSubmit, register, setValue, getValues, watch } =
    useForm<FormValues>();

  async function handleCreateAppointment(data: FormValues) {
    if (date) {
      const newStartsAt = formatDateWithTime(date, data.startsAt);
      const newEndsAt = formatDateWithTime(date, data.endsAt);

      const payload = {
        patientId: data.patientId,
        startsAt: newStartsAt,
        endsAt: newEndsAt,
        description: data.description,
      };

      const response = await api.post("/appointments", payload);

      console.log(response.status);
    }
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"}> Nova Consulta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[28rem]">
        <DialogHeader>
          <DialogTitle>Registrar Consulta</DialogTitle>
          <DialogDescription>Registre as consultas diárias</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateAppointment)}>
          <div className="grid gap-2 py-2">
            <div className="w-full">
              <Label htmlFor="patient">Selecionar Paciente</Label>
              <Select
                {...register("patientId")}
                onValueChange={(e: any) => setValue("patientId", e)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Felipe Santana</SelectItem>
                    <SelectItem value="2">Ana Flavia Barbosa</SelectItem>
                    <SelectItem value="3">Rubens</SelectItem>
                    <SelectItem value="4">Josefina</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <Label htmlFor="name">Data</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>dd/mm/yyyy</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center  gap-3 w-full justify-between">
              <div className="w-[50%]">
                <Label htmlFor="name">Tempo de Início</Label>
                <Input className="" type="time" {...register("startsAt")} />
              </div>
              <div className="w-[50%]">
                <Label htmlFor="username">Tempo Final</Label>
                <Input
                  className="flex flex-1"
                  type="time"
                  {...register("endsAt")}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-2 py-2">
            <Label htmlFor="patient">Descrição</Label>
            <textarea
              className="w-full h-20 border text-sm rounded-md p-2"
              {...register("description")}
            ></textarea>
          </div>
          <DialogFooter>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
