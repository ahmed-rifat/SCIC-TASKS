import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import TaskAdded from './Component/TaskAdded/TaskAdded';
import Login from './Component/Login/Login';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Tasks from './Component/Tasks/Tasks';

function App() {

  return (
    <div className="App">
      <Header></Header>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/todolist' element={
       <RequireAuth>
            <TaskAdded></TaskAdded>
       </RequireAuth>}
       ></Route>
       <Route path='/tasks' element={
       <RequireAuth>
            <Tasks></Tasks>
       </RequireAuth>}
       ></Route>
     </Routes>
    </div>
  );
}

export default App;
