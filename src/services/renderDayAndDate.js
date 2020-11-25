function renderDayAndDate(date) {
  const timestamp = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  }).format(timestamp);
  return formattedDate;
}
export default renderDayAndDate;
