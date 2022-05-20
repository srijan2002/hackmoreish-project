import './App.css';
import Login from './pages/login/login';
import Dashboard from "./pages/dashboard/Dashboard";
import Register from './pages/register/register';
import Profile from './pages/profile/profile';
import RestaurantDetails from './pages/restaurant_details/restaurant_detail';

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
        <Route path="/menu" exact element={user ? <RestaurantDetails/> : <Login/> }/>
        <Route path="/" exact element={user ? <Dashboard/> : <Login/> }/>
        <Route path="/editprofile" exact element={user ? <Profile/> : <Login/> }/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/> }/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/> } />

      </Routes>
    </Router>
  );
}

export default App;





