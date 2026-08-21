export const CITIES = [
  { id: 'lax', name: 'Los Angeles', country: 'United States', tz: 'America/Los_Angeles', abbr: 'PT' },
  { id: 'nyc', name: 'New York', country: 'United States', tz: 'America/New_York', abbr: 'ET' },
  { id: 'lon', name: 'London', country: 'United Kingdom', tz: 'Europe/London', abbr: 'UK' },
  { id: 'par', name: 'Paris', country: 'France', tz: 'Europe/Paris', abbr: 'CET' },
  { id: 'tyo', name: 'Tokyo', country: 'Japan', tz: 'Asia/Tokyo', abbr: 'JST' },
  { id: 'syd', name: 'Sydney', country: 'Australia', tz: 'Australia/Sydney', abbr: 'AEST' },
  { id: 'mel', name: 'Melbourne', country: 'Australia', tz: 'Australia/Melbourne', abbr: 'AEST' },
  { id: 'dxb', name: 'Dubai', country: 'UAE', tz: 'Asia/Dubai', abbr: 'GST' },
  { id: 'sin', name: 'Singapore', country: 'Singapore', tz: 'Asia/Singapore', abbr: 'SGT' },
  { id: 'utc', name: 'UTC', country: 'World', tz: 'UTC', abbr: 'UTC' },
]

export function formatInTz(date, tz, options) {
  return new Intl.DateTimeFormat('en-US', { timeZone: tz, ...options }).format(date)
}

export function getTimeParts(date, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).formatToParts(date)
  const get = (t) => parseInt(parts.find((p) => p.type === t)?.value || '0', 10)
  return { h: get('hour'), m: get('minute'), s: get('second') }
}
