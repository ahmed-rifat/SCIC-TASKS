import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
    <Button className='mt-4 mb-4'><Link className='text-white text-decoration-none' to='/todolist'>ADD A TASK</Link></Button>

            <h1>Welcome To The SCIC Task</h1>
        </div>
    );
};

export default Home;