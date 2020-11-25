function renderDate(date) {
  const timestamp = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(timestamp);
  return formattedDate;
}
export default renderDate;
