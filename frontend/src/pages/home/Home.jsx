import Navigation from "../../components/navigation/Navigation";
import Main from "../../components/main/Main";
import "./home.css"


const Home = ({type}) => {
    return ( 
        <>
        <div className="homeContainer">
        <Navigation type={type}/>
        <Main/>
        </div>
        </>
     );
}
 
export default Home;