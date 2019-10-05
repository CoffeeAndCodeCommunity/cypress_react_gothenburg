import React from 'react';
import EmployeeList from './EmployeeList'
import { Container } from 'semantic-ui-react'


const App = () => {
  return (
    <>
      <Container>
        <h1>Employee list</h1>
        <section id="main">
          <EmployeeList />
        </section>
      </Container>

    </>
  );
}

export default App;
