import './add_item.css';
import {AiFillPlusCircle} from 'react-icons/ai';
const Add_Item = () => {
    return ( 
        <div className="map">
            <div className="head">
                <AiFillPlusCircle className='icon'/>
                <div className="title-item">Add New Item</div>
                </div>
            <div className="greet-item">Add a new item in your available menu</div>
            <div className="name">
                <div className="name-title"> Name of Item</div>
                <div className="name-greet"> Give a name to your item</div>
                <input type='text' id="name" name="title" placeholder="Food Name" className='name-food'/>
            </div>
            <div className="name">
                <div className="name-title"> Quantity</div>
                <div className="name-greet"> Specify the amount available</div>
                <input type='text' id="quantity" name="title" placeholder="Quantity" className='name-food'/>
            </div>
            
        </div>
     );
}
 
export default Add_Item;