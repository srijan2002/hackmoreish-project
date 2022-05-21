import Navigation from "../../components/navigation/Navigation";
import AddItem from "../../components/add_item/add_item";
import './restaurant_details.css';
import { useState } from "react";

const Restaurant_Details = ({type}) => {
  
  const [menu] = useState([
    {'name':"Chilli Chicken", 'quantity':'99','desc':' This is a description of the food available.', 'id':'1'},
    {'name':"Chilli Chicken", 'quantity':'99','desc':' This is a description of the food available.','id':'2'},
    {'name':"Chilli Chicken", 'quantity':'99','desc':' This is a description of the food available.','id':'3'}
  ]);
    return (<>
        <div className="dashContainer">
        <Navigation type={type} />
        <div className="menu">
         <div className="menuWrapper">
         <div className="menu-title">
            Your Items
          </div>
           {
             menu.map(
               (item)=>(
                <div className="menu-item" key={item.id}>
                <div className="menu-name">
                  Fried Rice & Chilli Chicken
                </div>
                <div className="menu-quantity">
                  Quantity: 99
                </div>
                <div className="menu-desc">
                  This is a description of the food available.
                  This is a description of the food available. This is a description of the food available. This is a description of the food available. This is a description of the food available.
                </div>
              </div> 
               ))}   
          </div>
          </div>
        <AddItem></AddItem>
        </div>
        </>  );
}
 
export default Restaurant_Details;