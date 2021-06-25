import { parseDate } from "./parseDate";

export function renderDate(date: string) {
  const parsedDate = parseDate(date);

  const newDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  }).format(parsedDate);

  return newDate;
}
