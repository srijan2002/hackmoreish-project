import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/Home';
import Dashboard from "./pages/dashboard/Dashboard";
import Edit from './pages/edit/Edit';
import Testimonials from './pages/testimonials/Testimonials';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
const user = true;
  return (
      <Router>
      <Routes>
        <Route path="/" exact element={user ? <Home/> : <Login/> }/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/> }/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/> } />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
      </Routes>
    </Router>
  );
}

export default App;





