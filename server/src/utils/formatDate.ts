import { format } from "date-fns";
import moment from "moment-timezone";

export function formatGetJustDate(value: Date){


  const dataMoment = moment(value)
  const dataFormatada = dataMoment.tz('UTC').format('YYYY-MM-DD');

  return dataFormatada
}