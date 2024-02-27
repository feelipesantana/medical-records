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
import { useEventModal } from "@/hook/useEventModal";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
  AllDayContentArg
} from '@fullcalendar/core'


interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}


export function Schedule() {
  const calendarRef = useRef<FullCalendar | null>(null)
  const { openModal, setOpenModal, setEventId } = useEventModal()
  const [value, setValue] = useState<Date>();

  const { appointments } = useAppointments();
  const { chosenDate } = useChosenDate();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {

    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(chosenDate); // Atualiza para a data selecionada

    }

    if (appointments && chosenDate) {
      const newEvents = appointments.map((res, index) => ({
        id: res.id,
        title: res.patientId,
        start: new Date(res.startsAt),
        end: new Date(res.endsAt),
        resourceId: index,
      }));

      setEvents(newEvents);
      // calendarRef.current?

    }
  }, [appointments, chosenDate]);

  const eventClickValue = (e) => {
    setOpenModal(true)
    setEventId(e.event._def.publicId)
  }
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
  // Função para atualizar a data no calendário

  return (
    <div className=" calendar-container mt-2  p-10 overflow-y-auto w-full h-full text-base border-none">
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
          eventClick={(e) => eventClickValue(e)} // Attach event click handler
          dateClick={handleDateClick}
          eventContent={(eventInfo) => {
            return (
              <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
              </>
            );
          }}
        />
      )}
      <EventClickModal />

    </div>
  );
}
