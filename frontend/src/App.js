import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import RestaurantDetails from './pages/restaurant_details/restaurant_detail';
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
const type = 1;
  return (
      <Router>
      <Routes>
        <Route path="/menu" exact element={user ? <RestaurantDetails type={type}/> : <Login/> }/> 
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/> } />
        <Route path="/" exact element={user ? <Home type={type}/> : <Login/> }/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/> }/>
        <Route path="/dashboard" element={<Dashboard type={type}/>} />
        <Route path="/edit" element={user?<Edit type={type}/>:<Login/>} />
        <Route path="/testimonials" element={<Testimonials type={type}/>} />
      </Routes>
    </Router>
  );
}

export default App;





