import './App.css';
import Login from './pages/login/login';
import Dashboard from "./pages/dashboard/Dashboard";
import Register from './pages/register/register';

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
        <Route path="/" exact element={user ? <Dashboard/> : <Login/> }/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/> }/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/> } />
      </Routes>
    </Router>
  );
}

export default App;





