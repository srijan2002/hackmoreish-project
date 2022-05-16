const Form = () => {
    return ( <div class="container">
    <form action="/action_page.php">
      <div class="row">
        <div class="col-25">
          <label for="fname">User Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="firstname" placeholder="Your Username Here"/>
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
       
      <div className="row">
      <div className="col-75">
      <div class="submit">
        <input type="submit" value="Login"/>
      </div>
      </div>
      </div>
       
      
    </form>
  </div> );
}
 
export default Form;