import Navigation from "../../components/navigation/Navigation";
import Main from "../../components/main/Main";
import "./home.css"


const Home = () => {
    return ( 
        <>
        <div className="homeContainer">
        <Navigation />
        <Main/>
        </div>
        </>
     );
}
 
export default Home;