import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="body">
      <Routes>
        <Route path ='/' element ={
        <Login/>
        } 
        />
         <Route path ='/register' element ={ 
         <Register/> 
         } />
         
       </Routes>
      </div>
    </Router>
  );
}

export default App;
