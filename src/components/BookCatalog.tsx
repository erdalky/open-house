import { useState } from 'react';
import { books } from '../data/content';

type Grade = keyof typeof books;

export function BookCatalog() {
  const [grade, setGrade] = useState<Grade>('7th Grade');
  return <>
    <div className="tabs" role="tablist" aria-label="Book list by grade">
      {(Object.keys(books) as Grade[]).map((item) => <button key={item} className={grade === item ? 'active' : ''} role="tab" aria-selected={grade === item} onClick={() => setGrade(item)}>{item}</button>)}
    </div>
    <div className="book-grid">
      {books[grade].map(([month, title, image]) => <article className="book-card" key={title}><img src={image} alt={`${title} book cover`} /><div><span>{month}</span><h3>{title}</h3></div></article>)}
    </div>
  </>;
}
