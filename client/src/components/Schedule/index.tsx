"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useAppointments } from "@/hook/useAppointmentsFiltered";
import { useEffect, useRef, useState } from "react";
import { useChosenDate } from "@/hook/useChosenDate";
import { Calendar } from "@fullcalendar/core";
import { EventClickModal } from "../Modals/EventClickModal";
import { useOpenModal } from "@/hook/useOpenModal";

export function Schedule() {
  const calendarRef = useRef<Calendar | null>(null);
  const { openModal, setOpenModal } = useOpenModal()
  const [value, setValue] = useState<Date>();

  const { appointments } = useAppointments();
  const { chosenDate } = useChosenDate();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(chosenDate); // Atualiza para a data selecionada
    }
  }, [chosenDate]);

  useEffect(() => {
    if (appointments && appointments.length > 0 && chosenDate) {
      const newEvents = appointments.map((res, index) => ({
        title: "nice event",
        start: new Date(res.startsAt),
        end: new Date(res.endsAt),
        resourceId: index,
      }));

      setEvents(newEvents);
    }
  }, [appointments, chosenDate]);

  const eventClickValue = (e) => {
    console.log(e)
    setOpenModal(true)
    return (
      <div>Teste</div>
    )
  }
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
  // Função para atualizar a data no calendário

  return (
    <div className="mt-2 calendar-container p-10 overflow-y-auto w-full h-full text-base border-none">
      {chosenDate && (
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          ref={calendarRef}
          initialView="timeGridDay"
          locale="pt-br"
          initialEvents={events}
          slotMinTime="07:00:00"
          slotMaxTime="22:00:00"
          initialDate={new Date()}
          allDaySlot={false}
          events={{ events }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEventRows={true}
          dayMaxEvents={true}
          eventMaxStack={2}
          moreLinkClick
          eventClick={(e) => eventClickValue(e)} // Attach event click handler
          dateClick={handleDateClick}
        />
      )}
      <EventClickModal />

    </div>
  );
}
