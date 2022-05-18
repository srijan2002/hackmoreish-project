import Form from "./form";
const Login_Form = ({title,greet,welcome,msg,type}) => {
    return ( 
      <div>
           {title!=="" && <div className="title">{title}</div>}
           {greet !=="" && <p className="greet">{greet}</p>}
          { welcome!=="" && <div className="welcome">{welcome}</div>}
          { msg!=="" && <div className="msg">{msg}</div>}
           <Form type={type} />
           
      </div>
     );
}
 
export default Login_Form;