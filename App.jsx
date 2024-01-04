import React from 'react';
import { Modal } from './components/Modal';
import { LargeBookListItem } from './components/books/LargeListItems';
import { books } from './data/books';

export const App = () => {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
};
