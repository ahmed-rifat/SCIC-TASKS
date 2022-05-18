import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Tasks = () => {
    const [tasks, setTasks]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/task')
        .then(res=>res.json())
        .then(data=> setTasks(data));
    },[])

    const handleDelete=(id)=>{
       const proceed = window.confirm('want to delete this task?');
       fetch(`http://localhost:5000/task/${id}`,{
           method: "DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
           const remaining = tasks.filter(task=>task._id!==id)
           setTasks(remaining);
       })
    }
    return (
        <div>
           {
               tasks.map(task=>
                <Table striped bordered hover>
                <thead>
                  <tr>
                    
                    <th>id</th>
                    <th>Name</th>
                    <th>Details</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{task._id}</td>
                    <td>{task.name}</td>
                    <td>{task.details}</td>
                    <Button onClick={()=>handleDelete(task._id)}><td>DELETE</td></Button>
                  </tr>
                </tbody>
              </Table>
              )
           }
        </div>
    );
};

export default Tasks;