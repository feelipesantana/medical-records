import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CreateAppointmentModalProps {
  children: ReactNode;
}
export function CreateAppointmentModal() {
  const { handleSubmit, register } = useForm();

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
        <div className="grid gap-2 py-2">
          <div className="w-full">
            <Label htmlFor="patient">Selecionar Paciente</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Felipe Santana</SelectItem>
                <SelectItem value="2">Ana Flavia Barbosa</SelectItem>
                <SelectItem value="3">Rubens</SelectItem>
                <SelectItem value="4">Josefina</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="name">Dia</Label>
            <Input
              type="date"
              className="col-span-3"
              {...register("startsAt")}
            />
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
          <textarea className="w-full h-20 border text-sm rounded-md p-2"></textarea>
        </div>
        <DialogFooter>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
