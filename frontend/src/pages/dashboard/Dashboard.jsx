import Navigation from "../../components/navigation/Navigation";
import Menu from "../../components/hotels_menu/Hotels_menu";
import Map from "../../components/map/Map";
import "./dashboard.css"


const Dashboard = () => {
    return ( 
        <>
        <div className="dashContainer">
        <Navigation />
        <Menu />
        <Map/>
        </div>
        </>
     );
}
 
export default Dashboard;