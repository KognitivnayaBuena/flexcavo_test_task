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

const getDayOfWeek = (date: Date) => {
  const dayOfWeek = WEEKDAY[date.getDay()];

  return dayOfWeek;
};

const formatDate = (date: Date) => {
  const dayOfWeek = getDayOfWeek(date);

  const year = date.getFullYear();
  const month = padDigit(date.getMonth() + 1);
  const day = padDigit(date.getDate());

  return `${day}/${month}/${year} ${dayOfWeek}`;
};

export { formatDate, getDayOfWeek };
