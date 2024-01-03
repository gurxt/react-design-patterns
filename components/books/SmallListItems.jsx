import React from 'react';

export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;

  return (
    <h3>
      {name} / ${price}
    </h3>
  );
};
