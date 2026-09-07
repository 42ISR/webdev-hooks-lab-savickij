import { useState } from 'react';
import './BookForm.css';

const BookForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

  const handleSubmit = () => {
    const trimmed = title.trim();
    if (trimmed) {
      onAdd(trimmed);
      setTitle('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="add-book-row">
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Название книги..."
      />
      <button className="btn" onClick={handleSubmit}>Добавить на полку</button>
    </div>
  );
};

export default BookForm;