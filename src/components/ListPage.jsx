import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const items = [
    { id: 1, title: 'Статья 1' },
    { id: 2, title: 'Статья 2' },
    { id: 3, title: 'Статья 3' },
  ];

  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
