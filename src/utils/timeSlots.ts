/**
 * Date & Time Utilities for tvwieczor.pl
 * Timezone: Europe/Warsaw (CET/CEST auto-handled)
 */

export function getTodayInPoland(): string {
  const d = new Date();
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return formatter.format(d); // YYYY-MM-DD
}

export function getTomorrowInPoland(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return formatter.format(d);
}

export function formatDatePL(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const formatted = new Intl.DateTimeFormat('pl-PL', {
    timeZone: 'Europe/Warsaw',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(d);
  // Capitalize first letter of weekday
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatTimePL(isoString: string): string {
  if (!isoString) return '--:--';
  const d = new Date(isoString);
  return new Intl.DateTimeFormat('pl-PL', {
    timeZone: 'Europe/Warsaw',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(d);
}

export function getPolandHour(isoString: string): number {
  const d = new Date(isoString);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    hour: 'numeric',
    hourCycle: 'h23'
  });
  return parseInt(formatter.format(d), 10);
}

export function isPrimeTimePL(isoString: string): boolean {
  const hour = getPolandHour(isoString);
  // Polish Prime Time starts strictly at 20:00 through 23:30
  return (hour >= 20 && hour <= 23) || hour === 0;
}

export function isCurrentBroadcastDay(isoString: string, targetDate: string): boolean {
  if (!isoString || !targetDate) return false;
  const d = new Date(isoString);
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return formatter.format(d) === targetDate;
}
