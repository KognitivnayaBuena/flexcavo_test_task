const padDigit = (num: number) => (num < 10 ? `0${num}` : num);

const WEEKDAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const formatDate = (date: Date) => {
  const currentDate = new Date(date);

  const dayOfWeek = WEEKDAY[currentDate.getDay()];

  const year = currentDate.getFullYear();
  const month = padDigit(currentDate.getMonth() + 1);
  const day = padDigit(currentDate.getDate());

  return `${day}/${month}/${year} ${dayOfWeek}`;
};

export { formatDate };
