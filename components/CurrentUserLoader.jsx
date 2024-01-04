import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/current-user`);
      setUser(res.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(children)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
