import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
      if (loading) {
        return <p>Loading...</p>;
      }
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">SCIC TASK</Navbar.Brand>
        <Nav className="ms-auto">
          <Link className='me-4 text-decoration-none' to="/home">Home</Link>
          <Link className='text-decoration-none' to="/tasks">Tasks</Link>
          {(user?.email)?
          <Button onClick={logout} className='ms-4 text-decoration-none' >Logout</Button>
          :
          <Link className='ms-4 text-decoration-none' to="/login">login</Link>

          }
          
          
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;