"use client";
import { useAppointmentFiltered } from "@/hook/useAppointmentsFiltered";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";

export function TimeLine() {
  const { appointmentsFiltered } = useAppointmentFiltered();

  console.log(appointmentsFiltered);
  return (
    <div className="w-full h-full ">
      <Timeline className=" w-full h-full flex flex-col gap-8">
        {appointmentsFiltered.map((res) => {
          return (
            <TimelineItem className="flex gap-4 w-full" key={res.id}>
              <TimelineOppositeContent
                color="textSecondary"
                className="text-xl font-semibold bg-slate-200 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[8rem]  "
              >
                <span>{res.date} </span>
                <span>am</span>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="h-20" />
              </TimelineSeparator>
              <TimelineContent className="text-base p-6 border bg-white flex flex-1 items-center justify-center  w-full min-h-16">
                {res.description}
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
