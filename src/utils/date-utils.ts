const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };

export function displayDate(date: Date) {
  return date.toLocaleDateString("en-US", options);
}
