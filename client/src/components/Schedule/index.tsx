"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useAppointments } from "@/hook/useAppointmentsFiltered";

export default function Schedule() {
  const { appointments } = useAppointments();

  const datas = appointments.map((res, _index) => {
    return {
      title: "nice event",
      start: new Date(res.startsAt),
      end: new Date(res.endsAt),
      resourceId: _index,
    };
  });

  console.log(datas);
  return (
    <div className="mt-2 calendar-container p-10 overflow-y-auto w-full h-full text-base border-none">
      {datas && datas.length !== 0 && (
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridDay"
          locale="pt-br"
          editable={true}
          selectable={true}
          initialEvents={datas}
          slotMinTime="07:00:00"
          slotMaxTime="22:00:00"
        />
      )}
    </div>
  );
}
