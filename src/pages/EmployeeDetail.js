import React from 'react';
import { useResource } from 'rest-hooks';
import { useParams } from 'react-router-dom';
import EmployeeResource from '../resources/employee';

const EmployeeDetail = () => {
  const { id } = useParams();
  const { data: employee } = useResource(EmployeeResource.detailShape(), {id: id});
  
  console.log(employee);
  
  return (
    <>
      <h1>{employee.first_name} {employee.last_name}</h1>
      <img src={employee.avatar} />
      <div>email: <a href={`mailto:${employee.email}`}>{employee.email}</a></div>
    </>
  );
}

export default EmployeeDetail;
