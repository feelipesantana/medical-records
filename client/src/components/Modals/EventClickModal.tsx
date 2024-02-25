"use client";

import { CalendarIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { api } from "@/services/api";
import { format } from "date-fns-tz";
import { Button } from "../ui/button";

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



import { useEventModal } from "@/hook/useEventModal";
import { deleteAppointment } from "@/api/delete-appointment";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";

interface CreateAppointmentProps {
  children: ReactNode;
}

export function EventClickModal() {
  const { openModal, setOpenModal, eventId } = useEventModal()

  const queryClient = useQueryClient()
  async function handleDeleteAppointment() {
    const response = await deleteAppointment({ eventId })
    if (response?.status === 202) {
      queryClient.invalidateQueries({ queryKey: ['appointments'] })

      toast({
        title: "Consulta deletada com sucesso!",
        description: `A consulta com o id ${eventId} foi deletada com sucesso`
      })

    }
  }


  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="sm:max-w-[28rem]">
        <DialogHeader>
          <DialogTitle>ID: {eventId}</DialogTitle>

        </DialogHeader>
        <Button variant={"destructive"} onClick={handleDeleteAppointment}>Excluir Apontamento</Button>
      </DialogContent>
    </Dialog>
  );
}
