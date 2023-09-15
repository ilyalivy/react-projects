import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setUser(inputValue);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Change user</button>
    </>
  );
};

export default ChangeUser;
