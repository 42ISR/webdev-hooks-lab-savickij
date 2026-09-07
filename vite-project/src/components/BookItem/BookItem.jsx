import './BookItem.css';

const coverPalette = ['#7c5a3c', '#4f6b52', '#7a3b3b', '#3f5566', '#8a6b3f', '#5c4a72'];

const BookItem = ({ book, onToggleRead, onDeleteBook }) => {
  const coverColor = coverPalette[book.id % coverPalette.length];

  return (
    <div className="book-row" data-id={book.id}>
      <div className="book-cover" style={{ background: coverColor }}>
        {book.title[0] || '?'}
      </div>
      <div className="book-info">
        <p className={`book-title ${book.read ? 'done' : ''}`}>{book.title}</p>
        <div className="book-author">{book.author}</div>
      </div>
      <div
        className={`read-check ${book.read ? 'checked' : ''}`}
        onClick={() => onToggleRead(book.id)}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button className="delete-btn" onClick={() => onDeleteBook(book.id)}>✕</button>
    </div>
  );
};

export default BookItem;