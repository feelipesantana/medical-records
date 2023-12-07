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
      <Timeline className=" w-full h-full flex flex-col gap-8">
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-slate-200 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[8rem]  "
          >
            <span>09:30 </span>
            <span>am</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-base p-6 border bg-white flex flex-1 items-center justify-center  w-full min-h-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-slate-200 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[8rem]  "
          >
            <span>09:30 </span>
            <span>am</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector className="h-20" />
          </TimelineSeparator>
          <TimelineContent className="text-base p-6 border bg-white flex flex-1 items-center justify-center  w-full min-h-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex gap-4">
          <TimelineOppositeContent
            color="textSecondary"
            className="text-xl font-semibold bg-slate-200 h-16 rounded-[4px] flex items-center justify-center flex-col max-w-[8rem]  "
          >
            <span>09:30 </span>
            <span>am</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent className="text-base p-6 border bg-white flex flex-1 items-center justify-center  w-full min-h-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
