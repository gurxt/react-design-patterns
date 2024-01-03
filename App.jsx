import React from 'react';
import { RegularList } from './components/lists/Regular';
import { authors } from './data/author';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { books } from './data/books';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { NumberedList } from './components/lists/Numbered';

export const App = () => {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
};
