import React, { useState } from 'react';

export const ControlledFlow = ({ children, onDone, currIdx, onNext }) => {
  const goNext = (dataFromStep) => onNext(dataFromStep);
  const currentChild = React.Children.toArray(children)[currIdx];

  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });
  return currentChild;
};
