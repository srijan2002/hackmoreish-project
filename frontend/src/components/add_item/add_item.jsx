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
            <div className="wrap-item">
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
            <br></br><br />
            <div className="wrap-item">
            <div className="name">
                <div className="name-title"> Description</div>
                <div className="name-greet"> Describe your item</div>
                <input type='text' id="desc" name="title" placeholder="Food Description" className='desc-food'/>
            </div>
            {/* <div className="name">
                <div className="name-title"> Quantity</div>
                <div className="name-greet"> Specify the amount available</div>
                <input type='text' id="quantity" name="title" placeholder="Quantity" className='name-food'/>
            </div> */}
            </div>
            <div className="add-item">
                Add
            </div>
            
        </div>
     );
}
 
export default Add_Item;