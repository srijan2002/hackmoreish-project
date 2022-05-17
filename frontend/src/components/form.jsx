import { useState } from "react";

const Form = ({type}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

    return ( <div class="container">
    <form action="/action_page.php">
      <div class="row">
        <div class="col-25">
          <label for="fname">Email</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="firstname" placeholder="Your Email ID Here"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="lname">Password</label>
        </div>
        <div class="col-75">
          <input type="password" id="lname" name="lastname" placeholder="Your Password"/>
        </div>
      </div>
      {
        (type==="Register") &&  <div class="row">
        <div class="col-25">
          <label for="lname">Address</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="lastname" placeholder="Your Address"/>
        </div>
      </div>
      }
        {
        (type==="Register") &&  <div class="row">
        <div class="col-25">
          <label for="lname">Contact No.</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="lastname" placeholder="Your Contact No."/>
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
      <div class="submit">
        <input type="submit" value={type}/>
      </div>
      </div>
      </div>
       
      
    </form>
  </div> );
}
 
export default Form;