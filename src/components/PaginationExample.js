import { useState } from 'react';

const itemsPerPage = 5; // Кількість елементів на сторінці

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = Array.from({ length: 20 }, (_, index) => index + 1); // Приклад даних

  // Розрахунок індексів для відображення на поточній сторінці
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Зміна поточної сторінки
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Виведення елементів на поточній сторінці */}
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Створення кнопок для перемикання між сторінками */}
      <div>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationExample;
