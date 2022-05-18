import './register.css';
import pic from '../../assets/pic.png';

import LoginForm from '../../components/form/form-components';
const Register = () => {
    return ( 
    <div className="main-body" >
       <div className="centre-form">
        <div className="form">
            <LoginForm title={"AGRIFARM"} greet={""} welcome={""} msg = {"Sign up to your Agrifarm account"} type={"Register"}/>
        </div>
        <div className="image">
         <div className="image-center">
         <img className='pic' src={pic} alt="" />
         </div>
        </div>
       </div>  
    </div> );
}
 
export default Register;