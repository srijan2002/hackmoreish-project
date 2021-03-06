import './edit_profile.css'
import pic from '../../assets/profile.jpeg'
import '../../pages/login/login.css'
import { useState } from 'react'
import axios from 'axios'
const Edit_Profile = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [veri, setVeri] = useState("");
  const [add,setAdd] = useState("");
  const [city,setCity] = useState("");
  const [state,setStat] = useState("");
  const [post,setPost] = useState();


  const editprofile = (e)=>{
    e.preventDefault();
    const body = {
       name:name,
       number:number,
       verificationid:veri,
       add:{
        address_line_1:add,
        city:city,
        state:state,
        postal_code:post
       }
    };
    try{
      
     
     console.log(body);
     axios.post("https://hackmoreish-backend.herokuapp.com/profile/donor",
     body
     ).then(response=>{
       if(response.status===200)
       {console.log("Completed Profile");}
     })
    }catch (err) {
     console.log(err);
   }
 
   }

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
              <input type="text" id="name" name="firstname" placeholder="New Name "className="input"
               onChange={(e) => setName(e.target.value)}
              />  
            
               <h5 for="fname">Email</h5> 
              <input type="text" id="email" name="firstname" placeholder="New Email ID "className="input"
              />  
            
           
             <h5 for="fname">Password</h5> 
             <input type="password" id="pass" name="firstname" placeholder="New Password "className="input"/>  
          
           
              <h5 for="fname">Address</h5> 
             <input type="text" id="address" name="firstname" placeholder="New Address "className="input"
              onChange={(e) => setAdd(e.target.value)}
             /> 

             <h5 for="fname">City</h5> 
             <input type="text" id="city" name="firstname" placeholder="New City "className="input"
              onChange={(e) => setCity(e.target.value)}/> 

             <h5 for="fname">State</h5> 
             <input type="text" id="state" name="firstname" placeholder="New State "className="input"
              onChange={(e) => setStat(e.target.value)}/> 

             <h5 for="fname">Postal Code</h5> 
             <input type="text" id="postal" name="firstname" placeholder="New Postal Code "className="input"
              onChange={(e) => setPost(e.target.value)}/>  
            
            
              <h5 for="fname">Contact</h5> 
              <input type="text" id="contact" name="firstname" placeholder="New Contact "className="input"
               onChange={(e) => setNumber(e.target.value)}/> 

              <h5 for="fname">Verification ID</h5> 
              <input type="text" id="verification" name="firstname" placeholder="New Verification ID"className="input"
               onChange={(e) => setVeri(e.target.value)}/> 
            
           </div>

           </div>
           </div>
         </div>
         <div className='update' onClick={editprofile}>
               Update Profile
           </div>
         </div>
     );
}
export default Edit_Profile;