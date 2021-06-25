export function parseDate(date: string, time?: string) {
  const splittedDate = date.split(".");
  const day = Number(splittedDate[0]);
  const month = Number(splittedDate[1]) - 1;
  const year = Number(splittedDate[2]);

  if (time) {
    const splittedTime = time?.split(":");
    const hours = Number(splittedTime[0]);
    const minutes = Number(splittedTime[1]);

    return new Date(year, month, day, hours, minutes);
  }

  return new Date(year, month, day);
}
