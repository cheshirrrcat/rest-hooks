import React from 'react';
import {useFetcher} from 'rest-hooks';
import EmployeeResource from '../resources/employee';

const EmployeeCreate = () => {
  const create = useFetcher(EmployeeResource.createShape())
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const object = {};
    
    formData.forEach((value, key) => {object[key] = value});
    
    const response = create({}, object);
    console.log(response);
  }
  
  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="first_name">First Name</label>
      <input type="text" id="first_name" name="first_name" defaultValue="123"/>
      <br />
      <label htmlFor="last_name">Last Name</label>
      <input type="text" id="last_name" name="last_name" defaultValue="123"/>
      <br />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" defaultValue="123"/>
      <br />
      <label htmlFor="avatar">Avatar</label>
      <input type="text" id="avatar" name="avatar" defaultValue="123"/>
      <br />
      <button type="submit">Create</button>
    </form>
  );
};

export default EmployeeCreate;
