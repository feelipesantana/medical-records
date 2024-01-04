import { format } from "date-fns-tz";

export function formatDateWithTime(date: Date, time:string){
  const targetTimeZone = "America/Sao_Paulo"; // Specify the target time zone

  const [hour, minute] = time.split(":");
  date.setHours(Number(hour));
  date.setMinutes(Number(minute));
  
  const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS", {timeZone: targetTimeZone });
  console.log(formattedDate )
  return formattedDate
}