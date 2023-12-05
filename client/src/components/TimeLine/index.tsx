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
  return (
    <div className="w-full h-full">
      <Timeline className=" w-full h-full">
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-green-500 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[10rem]  "
          >
            <span>09:30 </span>
            <span>am</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-2xl border bg-white flex flex-1 items-center justify-center  w-full h-16">
            Consulta 1
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-green-500 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[10rem] "
          >
            <span>10:00 </span>
            <span>am</span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-2xl border bg-white flex w-full items-center justify-center  h-16">
            Consulta 2
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-green-500 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[10rem] "
          >
            <span>10:00 </span>
            <span>am</span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-2xl border bg-white flex w-full items-center justify-center  h-16">
            Consulta 2
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-green-500 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[10rem] "
          >
            <span>10:00 </span>
            <span>am</span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-2xl border bg-white flex w-full items-center justify-center  h-16">
            Consulta 2
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-green-500 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[10rem] "
          >
            <span>10:00 </span>
            <span>am</span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-2xl border bg-white flex w-full items-center justify-center  h-16">
            Consulta 2
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
