import { dayOne, dayTwo } from '../data/content';

export function Schedule() {
  return <div className="daily-schedule"><div className="daily-title"><div><h3>Sample Two-Day Program</h3><p>A balanced program of prayer, lessons, reading, reflection, and activities.</p></div><a href="/daily-program.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a></div><div className="schedule-days">{[['Day 1', dayOne], ['Day 2', dayTwo]].map(([label, rows]) => <article key={label as string}><h4>{label as string}</h4>{(rows as readonly (readonly [string, string])[]).map(([time, item]) => <div className="schedule-row" key={`${time}-${item}`}><time>{time}</time><span>{item}</span></div>)}</article>)}</div></div>;
}
