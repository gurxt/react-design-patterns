import React from 'react';
import { CurrentUserLoader } from './components/CurrentUserLoader';
import { UserLoader } from './components/UserLoader';
import { UserInfo } from './components/UserInfo';
import { ResourceLoader } from './components/ResourceLoader';
import { BookInfo } from './components/BookInfo';
import { DataSource } from './components/DataSource';
import axios from 'axios';
import { DataSourceRender } from './components/DataSourceRender';

const fetchData = async (url) => {
  const res = await axios.get(`/api/${url}`);
  return res.data;
};

const getDataFromStorage = (key) => {
  return localStorage.getItem(key);
};

export const App = () => {
  return (
    <>
      <DataSourceRender
        getData={() => fetchData('/users/1')}
        render={(resource) => <UserInfo user={resource} />}
      />
      <DataSourceRender
        getData={() => fetchData('/books/1')}
        render={(resource) => <BookInfo book={resource} />}
      />
      <DataSourceRender
        getData={() => getDataFromStorage('timothy')}
        render={(resource) => <h2>{resource}</h2>}
      />
      {/* <ResourceLoader resourceUrl={'/users/3'} resourceName={'user'}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={'/books/3'} resourceName={'book'}>
        <BookInfo />
      </ResourceLoader> */}
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader> */}
      {/* urrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
    </>
  );
};
