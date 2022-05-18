import "./navigation.css"
import {FiPieChart} from 'react-icons/fi';
import {FiHome} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {BsPeople} from 'react-icons/bs';
import {BsPerson} from 'react-icons/bs';
import { useState } from "react";
import IMG from '../../assets/srijan.jpg'

const Navigation = () => {
    
    const [tab,setTab] = useState(["active","idle","idle","idle","idle"]);
    
    const handleTab = (index)=>{
        var newArr = ["idle","idle","idle","idle","idle"];
        newArr[index]="active";
         setTab(newArr);
    }
    

    return (  
        <div className="navigation">
           <div className="navigationWrapper">
               <div className="title"> <div className="black">AGRI</div> <div className="green">FARM</div></div>
               <ul className="navbarlist">
                   <li className={`navbarListItem ${tab[0]}`} onClick={()=> handleTab(0)}>
                       <FiHome className='navbarIcon'/>
                       <span className="navbarListItemText">Home</span>
                   </li>
                   <li className={`navbarListItem ${tab[1]}`} onClick={()=> handleTab(1)}>
                       <BsPerson className='navbarIcon'/>
                       <span className="navbarListItemText">About Us</span>
                   </li>
                   <li className={`navbarListItem ${tab[2]}`} onClick={()=> handleTab(2)}>
                        <FiPieChart className='navbarIcon'/>
                        
                       <span className="navbarListItemText">Dashboard</span>
                   </li>
                   <li className={`navbarListItem ${tab[3]}`} onClick={()=> handleTab(3)}>
                       <FiEdit className='navbarIcon'/>
                       <span className="navbarListItemText">Edit Profile</span>
                   </li>
                   <li className={`navbarListItem ${tab[4]}`} onClick={()=> handleTab(4)}>
                       <BsPeople className='navbarIcon'/>
                       <span className="navbarListItemText">Testimonials</span>
                   </li>
               </ul>
               <div className="profile">
               <img src={IMG} alt="" className="profileImg"/>
               <div className="profile__text">
               <div className="profileName">Srijan Majumdar</div>
               <div className="logout">Logout</div>
               </div>
               </div>
           </div>
        </div>
    );
}
 
export default Navigation;