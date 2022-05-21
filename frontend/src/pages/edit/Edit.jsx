import Navigation from "../../components/navigation/Navigation";
import Menu from "../../components/hotels_menu/Hotels_menu";
import "./edit.css"
import Map from "../../components/map/Map";


const Edit = ({type}) => {
    return ( 
        <>
        <div className="dashContainer">
        <Navigation type={type}/>
        <Menu edit="true"/>
        <Map/>
        </div>
        
        </>
     );
}
 
export default Edit;