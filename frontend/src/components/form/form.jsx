import { useState } from "react";

const Form = ({type}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

    return ( <div className="container">
    <form action="/action_page.php">
    {
        (type==="Register" ) &&  <div className="row">
        <div className="col-25">
          <label for="lname">Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="name" name="lastname" placeholder="Your Name" className="input"/>
        </div>
      </div>
      }
      <div className="row">
        <div className="col-25">
          <label for="fname">Email</label>
        </div>
        <div className="col-75">
          <input type="text" id="email" name="firstname" placeholder="Your Email ID Here" className="input"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="lname">Password</label>
        </div>
        <div className="col-75">
          <input type="password" id="pass" name="lastname" placeholder="Your Password" className="input"/>
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
          onChange={handleOnChange}/>
           <label for="ngo"> {type} as NGO</label>

           <input type="checkbox" id="rest" name="rest" value="rest" checked={isChecked}
          onChange={handleOnChange}/>
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