import '../styles/login.css';
import LoginForm from '../components/form-components';
const Login = () => {
    return ( 
    <div className="main-body" >
       <div className="centre-form">
        <div className="form">
            <LoginForm/>
        </div>
        <div className="image">
        </div>
       </div>  
    </div> );
}
 
export default Login;