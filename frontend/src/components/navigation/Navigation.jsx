import "./navigation.css"
import {FiPieChart} from 'react-icons/fi'
import {FiHome} from 'react-icons/fi'
import {FiEdit} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'


const Navigation = () => {
    return (  
        <div className="navigation">
           <div className="navigationWrapper">
           <div className="title">AGRIFARM</div>
               <ul className="navbarlist">
                   <li className="navbarListItem active">
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
           </div>
        </div>
    );
}
 
export default Navigation;