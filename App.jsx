import React, { useState } from 'react';
import { UncontrolledForm } from './components/UncontrolledForm';
import { ControlledForm } from './components/ControlledForm';
import { UncontrolledModal } from './components/UncontrolledModal';
import { ControlledModal } from './components/ControlledModal';

export const App = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal.</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button>
    </>
  );
};
