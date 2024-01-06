import React, { useState } from 'react';

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currIdx, setCurrIdx] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[currIdx];

  const goNext = (dataFromStep) => {
    const nextStepIndex = currIdx + 1;

    const newData = {
      ...data,
      ...dataFromStep,
    };

    if (nextStepIndex < children.length) {
      setCurrIdx(currIdx + 1);
    } else {
      onDone(newData);
    }
    setData(newData);
  };

  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });
  return currentChild;
};
