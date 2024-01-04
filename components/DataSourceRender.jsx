import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const DataSourceRender = ({ getData = async () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return render(resource);
};
