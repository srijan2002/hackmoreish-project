import "./navigation.css"
import {FiPieChart} from 'react-icons/fi'
import {FiHome} from 'react-icons/fi'
import {FiEdit} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import IMG from '../../assets/srijan.jpg'


const Navigation = () => {
    return (  
        <div className="navigation">
           <div className="navigationWrapper">
               <div className="title"> <div className="black">AGRI</div> <div className="green">FARM</div></div>
               <ul className="navbarlist">
                   <li className="navbarListItem active">
                       <div className="line"/>
                       <FiHome className='navbarIcon'/>
                       <span className="navbarListItemText">Home</span>
                   </li>
                   <li className="navbarListItem">
                       <BsPerson className='navbarIcon'/>
                       <span className="navbarListItemText">About Us</span>
                   </li>
                   <li className="navbarListItem">
                        <FiPieChart className='navbarIcon'/>
                        
                       <span className="navbarListItemText">Dashboard</span>
                   </li>
                   <li className="navbarListItem">
                       <FiEdit className='navbarIcon'/>
                       <span className="navbarListItemText">Edit Profile</span>
                   </li>
                   <li className="navbarListItem">
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