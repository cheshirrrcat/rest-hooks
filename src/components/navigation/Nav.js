import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};

export default MyComponent;
