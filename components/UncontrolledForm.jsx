import { createRef } from 'react';

export const UncontrolledForm = () => {
  const nameInputRef = createRef();
  const ageInputRef = createRef();

  const submitHandler = (e) => {
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input ref={nameInputRef} name="name" type="text" placeholder="Name" />
      <input ref={ageInputRef} name="age" type="number" placeholder="Age" />
      <input type="submit" value="Submit" />
    </form>
  );
};
