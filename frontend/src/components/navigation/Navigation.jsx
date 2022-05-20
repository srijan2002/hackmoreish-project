import "./navigation.css";
import {Link} from "react-router-dom"
import { FiPieChart } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
// import { useState } from "react";
import IMG from "../../assets/srijan.jpg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigationWrapper">
        <div className="title">
          {" "}
          <div className="black">AGRI</div> <div className="green">FARM</div>
        </div>
        <ul className="navbarlist">
        <Link to="/" style={{textDecoration:"none"}}>
        <li
            className= 'navbarListItem'
          >
            <FiHome className="navbarIcon" />
            <span className="navbarListItemText">Home</span>
          </li>
          </Link>
          <Link to='/dashboard' style={{textDecoration:"none"}}>
          <li
            className= 'navbarListItem'
          >
            <FiPieChart className="navbarIcon" />

            <span className="navbarListItemText">Dashboard</span>
          </li>
          </Link>
          <Link to="/edit" style={{textDecoration:"none"}}>
          <li
            className= 'navbarListItem'
          >
            <FiEdit className="navbarIcon" />
            <span className="navbarListItemText">Edit Profile</span>
          </li>
          </Link>
          <Link to="/testimonials" style={{textDecoration:"none"}}>
          <li
            className= 'navbarListItem'
          >
            <BsPeople className="navbarIcon" />
            <span className="navbarListItemText">Testimonials</span>
          </li>
          </Link>
        </ul>
        <div className="profile">
          <img src={IMG} alt="" className="profileImg" />
          <div className="profile__text">
            <div className="profileName">Srijan Majumdar</div>
            <div className="logout">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
