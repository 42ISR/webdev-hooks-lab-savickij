import BookItem from '../BookItem/BookItem';
import './BookList.css';

const BookList = ({ books, onToggleRead, onDeleteBook }) => {
  if (books.length === 0) {
    return <div className="empty-note">Нет книг, подходящих под фильтр</div>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onDeleteBook={onDeleteBook}/>
      ))}
    </div>
  );
};

export default BookList;