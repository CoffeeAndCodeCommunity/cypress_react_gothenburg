import React, { Component } from 'react';
import axios from 'axios'
import { List, Image } from 'semantic-ui-react'

class EmployeeList extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users').then((response)=>{
      this.setState({ employees: response.data.data})
    })
  }
  
  render() {
    let employeeListDisplay = this.state.employees.map((employee) => {
      return (
        // <li key={employee.id}>{employee.email}</li>
        <List.Item key={employee.id}>
          <Image avatar src={employee.avatar} />
          <List.Content>
            <List.Header as='p'>
              {`${employee.first_name} ${employee.last_name}`}
            </List.Header>
            <List.Description>
              {employee.email}
            </List.Description>
          </List.Content>
        </List.Item>
      )
    })
    return (
      <>
        <List>
          {employeeListDisplay}
        </List>
      </>
    );
  }
}

export default EmployeeList;