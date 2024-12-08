import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  const itemDetails = {
    1: { title: 'Статья 1', content: 'Это подробная информация о статье 1.' },
    2: { title: 'Статья 2', content: 'Это подробная информация о статье 2.' },
    3: { title: 'Статья 3', content: 'Это подробная информация о статье 3.' },
  };

  const item = itemDetails[id];

  if (!item) {
    return <h2>Статья не найдена</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
};

export default DetailPage;
