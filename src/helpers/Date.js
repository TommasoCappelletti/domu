export function getDate(year, month, date) {
  return new Date(year, month, date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function getCurrentDate() {
  return new Date(Date.now()).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
