import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <p>Loading...</p>;
      }

     

    return (
        <div>
            
         <Button className='mt-5' onClick={()=> signInWithGoogle()} variant="primary">Sign In with google </Button>
         <br />
        </div>
    );
};

export default Login;