import './edit_profile.css'
import pic from '../../assets/profile.jpeg'
const Edit_Profile = () => {
    return ( 
         <div className>
             <div className="title-name">Edit Profile</div>
             <div className="header">Update your Profile</div>
             <div className="title-name">Update Profile Photo</div>
             <div className="profile"><img className='profile-pic' src={pic} alt="Avatar"/>
             <div className="change">Change Photo</div>
             </div>

           <div className="profile-wrapper">
           <div className="container">
           <div class="row">
              <div class="col-25"><label for="fname">Email</label></div>
            <div class="col-75"> <input type="text" id="fname" name="firstname" placeholder="New Email ID "/> </div>
           </div>
           <div class="row">
              <div class="col-25"><label for="fname">Password</label></div>
            <div class="col-75"> <input type="password" id="fname" name="firstname" placeholder="New Password "/> </div>
           </div>
           <div class="row">
              <div class="col-25"><label for="fname">Address</label></div>
            <div class="col-75"> <input type="text" id="fname" name="firstname" placeholder="New Address "/> </div>
           </div>
           <div class="row">
              <div class="col-25"><label for="fname">Contact</label></div>
            <div class="col-75"> <input type="text" id="fname" name="firstname" placeholder="New Contact "/> </div>
           </div>
           </div>
           <div className='update'>
               Update Profile
           </div>
           </div>
         </div>
     );
}
export default Edit_Profile;