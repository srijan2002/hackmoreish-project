import Navigation from "../../components/navigation/Navigation";
// import Map from "../../components/map/Map";
import AddItem from "../../components/add_item/add_item";
import './restaurant_details.css';

const Restaurant_Details = () => {
    return (<>
        <div className="dashContainer">
        <Navigation />
        <div className="menu">
         <div className="menuWrapper">
        <div>No Items to Display !</div>
          </div>
          </div>
        {/* <Map/> */}
        <AddItem></AddItem>
        </div>
        </>  );
}
 
export default Restaurant_Details;