import { parseDate } from "./parseDate";

export function checkGameState(date: string, time: string, result: string) {
  const parsedDate = parseDate(date, time);
  const actualDate = new Date();

  if (parsedDate > actualDate) return "VS";
  if (parsedDate < actualDate && !result) return "-";
  if (parsedDate < actualDate) return result;
}
