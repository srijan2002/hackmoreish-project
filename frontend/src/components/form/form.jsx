import { useState } from "react";
import axios from 'axios';
const Form = ({type}) => {

  const [isChecked, setIsChecked] = useState(false);

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   

  const register = (e)=>{
   e.preventDefault();
   const body = {
     username: email
    ,password:password};
   try{
     
    
    console.log(body);
    axios.post("https://hackmoreish-backend.herokuapp.com/users/signup",
    body
    ).then(response=>{
      if(response.status===200)
      {console.log("Registered");}
    })
   }catch (err) {
    console.log(err);
  }

  }

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

    return ( <div className="container">
    <form onSubmit={register}>
    {
        (type==="Register" ) &&  <div className="row">
        <div className="col-25">
          <label for="lname">Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="name" name="lastname" placeholder="Your Name" className="input"
          // onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      }
      <div className="row">
        <div className="col-25">
          <label for="fname">Email</label>
        </div>
        <div className="col-75">
          <input type="text" id="email" name="firstname" placeholder="Your Email ID Here" className="input"
          onChange={(e)=> { setEmail(e.target.value); console.log(e.target.value);}}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="lname">Password</label>
        </div>
        <div className="col-75">
          <input type="password" id="pass" name="lastname" placeholder="Your Password" className="input"
           onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {
        (type==="Register") &&  <div className="row">
        <div className="col-25">
          <label for="lname">Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="address" name="lastname" placeholder="Your Address" className="input"/>
        </div>
      </div>
      }
        {
        (type==="Register") &&  <div className="row">
        <div className="col-25">
          <label for="lname">Contact No.</label>
        </div>
        <div className="col-75">
          <input type="text" id="contact" name="lastname" placeholder="Your Contact No." className="input"/>
        </div>
      </div>
      }
       {
        (type==="Register" ) &&  <div className="row">
        <div className="col-25">
          <label for="lname">Verification ID</label>
        </div>
        <div className="col-75">
          <input type="text" id="verify" name="lastname" placeholder="Your Verification ID" className="input"/>
        </div>
      </div>
      }
      <input type="checkbox" id="ngo" name="ngo" value="ngo"checked={!isChecked}
          onChange={handleOnChange} className="check"/>
           <label for="ngo"> {type} as NGO</label>

           <input type="checkbox" id="rest" name="rest" value="rest" checked={isChecked}
          onChange={handleOnChange} className="check"/>
           <label for="rest"> {type} as Restaurant</label> 
           
      <div className="row">
      <div className="col-75">
      <div className="submit">
        <input type="submit" value={type}/>
      </div>
      </div>
      </div>
       
      
    </form>
  </div> );
}
 
export default Form;