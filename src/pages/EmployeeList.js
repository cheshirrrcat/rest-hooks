import React, {Fragment} from 'react';
import { useResource } from 'rest-hooks';
import EmployeeResource from '../resources/employee';
import {Link} from 'react-router-dom';

const EmployeeList = () => {
  const {data: employees} = useResource(EmployeeResource.listShape(), {});
  
  return (
    <>
      <h1>Employee List</h1>
      <section>
        {employees.map(employee => (
          <Employee key={employee.pk()} employee={employee} />
        ))}
      </section>
    </>
  );
}

const Employee = ({ employee }) => (
  <article>
      <Link to={`/employee/${employee.id}`}>
        {employee.first_name}
        {employee.last_name}
      </Link>
  </article>
);



export default EmployeeList;
