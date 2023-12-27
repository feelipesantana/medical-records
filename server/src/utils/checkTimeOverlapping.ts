import { isAfter, isBefore, isEqual } from "date-fns";

export function checkTimeOverlap(existingStart:Date, existingEnd:Date, newStart:Date, newEnd:Date) {
  return (
    (isEqual(newStart, existingStart) && isEqual(newEnd, existingEnd)) ||
    (isBefore(newStart, existingEnd) && isAfter(newStart, existingStart)) ||
    (isBefore(newEnd, existingEnd) && isAfter(newEnd, existingStart)) ||
    (isBefore(existingStart, newEnd) && isAfter(existingStart, newStart)) ||
    (isBefore(existingEnd, newEnd) && isAfter(existingEnd, newStart))
  ) 

}