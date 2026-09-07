import { useState, useRef } from 'react';
import ViewSwitch from './components/ViewSwitch/ViewSwitch';
import ShelfScreen from './pages/ShelfScreen/ShelfScreen';
import StatsScreen from './pages/StatsScreen/StatsScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('shelf');
  const [books, setBooks] = useState([
    { id: 1, title: 'Крёстный отец', author: 'Марио Пьюзо', read: true },
    { id: 2, title: 'Дом на краю ночи', author: 'Кэтрин Бэннер', read: false },
    { id: 3, title: 'Тяжёлый песок', author: 'Анатолий Рыбаков', read: false },
  ]);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const [pagesToday, setPagesToday] = useState(0);
  const nextId = useRef(4);

  const addBook = (title) => {
    const newBook = {
      id: nextId.current++,
      title,
      author: 'Автор не указан',
      read: false,
    };
    setBooks([...books, newBook]);
  };

  const toggleRead = (id) => {
    setBooks(books.map(b => b.id === id ? { ...b, read: !b.read } : b));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  const incrementPages = () => setPagesToday(pagesToday + 1);
  const decrementPages = () => setPagesToday(Math.max(0, pagesToday - 1));
  const resetPages = () => setPagesToday(0);

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
        <ViewSwitch currentScreen={currentScreen} onChange={setCurrentScreen} />
      </div>

      {currentScreen === 'shelf' ? (
        <ShelfScreen
          books={books}
          showOnlyUnread={showOnlyUnread}
          onAddBook={addBook}
          onToggleRead={toggleRead}
          onDeleteBook={deleteBook}
          onFilterChange={setShowOnlyUnread}
        />
      ) : (
        <StatsScreen
          books={books}
          pagesToday={pagesToday}
          onIncrement={incrementPages}
          onDecrement={decrementPages}
          onReset={resetPages}
        />
      )}
    </div>
  );
};

export default App;