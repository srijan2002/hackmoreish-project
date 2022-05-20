import './login.css'
import pic from '../../assets/pic.png';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/form/form-components';
const Login = () => {
    return ( 
    <div className="main-body" >
       <div className="centre-form">
        <div className="form">
        <LoginForm title={"AGRIFARM"} greet={"Hello There!"} welcome={"Welcome Back"} msg = {"Log in to your Agrifarm account"} type={"Login"} />
            
           <div className="signup-here">
           <div className="row">
            <div className="col-75">
            <div className="signup">
             Don't have an account? Sign up <Link className='here' to='/register'>here</Link>
         </div>
           </div>
      </div>
      </div> 
        </div>
        <div className="image">
         <div className="image-middle">
         <img className='picture' src={pic} alt="" />
         </div>
        </div>
       </div>  
    </div> );
}
 
export default Login;