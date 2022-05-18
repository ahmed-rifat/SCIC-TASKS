import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';


const TaskAdded = () => {

const handleSubmit =(event)=>{
    event.preventDefault();
    const name = event.target.name.value;
    const details = event.target.details.value;
    const user = {name, details};


    fetch('http://localhost:5000/task',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("success", data);
      alert('Task added Successfully')
    })
}


    return (
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3 mt-5" controlId="formBasicName">
    <Form.Control type="text"name='name' placeholder="Enter name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDetails">
    <Form.Control type="text" name='details' placeholder="Details" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    COMPLETED
  </Button>
</Form>
    );
};

export default TaskAdded;