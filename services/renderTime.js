function renderTime(date) {
  const timestamp = new Date(date);
  const formattedTime = new Intl.DateTimeFormat("de-DE", {
    hour: "numeric",
    minute: "numeric",
  }).format(timestamp);
  return formattedTime;
}
export default renderTime;
