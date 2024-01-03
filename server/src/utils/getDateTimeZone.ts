import { DateTime } from 'luxon';

export function formatTimeZone(value: Date) {
  const dateTimeZone = DateTime.fromJSDate(value, { zone: 'America/Sao_Paulo' });

  
  const formattedDate = dateTimeZone.setLocale('pt-BR').toFormat('yyyy-MM-dd'); // Formatting the date
  return formattedDate;
}