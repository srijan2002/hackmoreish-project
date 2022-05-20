import Navigation from "../../components/navigation/Navigation";
import Menu from "../../components/hotels_menu/Hotels_menu";
import "./edit.css"


const Edit = () => {
    return ( 
        <>
        <div className="editContainer">
        <Navigation />
        <Menu edit="true"/>
        </div>
        </>
     );
}
 
export default Edit;