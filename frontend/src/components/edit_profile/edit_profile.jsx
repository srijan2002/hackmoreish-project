import './edit_profile.css'
import pic from '../../assets/profile.jpeg'
import '../../pages/login/login.css'
const Edit_Profile = () => {
    return ( 
         <div>
            
             {/* <div className="header">Update your Profile</div>
             <h5 className='photo'>Update Profile Photo</h5> */}
         <div className="edit">
           <div className="editWrapper">
             <div className="header-top">
             <div className="title-name">Edit Profile</div>
             <div className="header">Update your Profile</div>
             <div className="title-name">Update Profile Photo</div>
             <div className="profile"><img className='profile-pic' src={pic} alt="Avatar"/>
             <div className="change">Change Photo</div>
             </div>
             </div>

           <div className="profile-wrapper">
           <div className="container">

           <h5 for="fname">Name</h5> 
              <input type="text" id="name" name="firstname" placeholder="New Name "className="input"/>  
            
               <h5 for="fname">Email</h5> 
              <input type="text" id="email" name="firstname" placeholder="New Email ID "className="input"/>  
            
           
             <h5 for="fname">Password</h5> 
             <input type="password" id="pass" name="firstname" placeholder="New Password "className="input"/>  
          
           
              <h5 for="fname">Address</h5> 
             <input type="text" id="address" name="firstname" placeholder="New Address "className="input"/>  
            
            
              <h5 for="fname">Contact</h5> 
              <input type="text" id="contact" name="firstname" placeholder="New Contact "className="input"/> 

              <h5 for="fname">Verification ID</h5> 
              <input type="text" id="verification" name="firstname" placeholder="New Verification ID"className="input"/> 
            
           </div>

           </div>
           </div>
         </div>
         <div className='update'>
               Update Profile
           </div>
         </div>
     );
}
export default Edit_Profile;