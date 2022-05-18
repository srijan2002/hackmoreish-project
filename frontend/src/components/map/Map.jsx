import "./map.css"
import pic from'../../assets/pic.png'
const Map = () => {
    return (  
        <div className="map">
           <div className="navigationWrapper">
            
         <div className="image-center">
         <img className='pic' src={pic} alt="" />
         </div>
           </div>
        </div>
    );
}
 
export default Map;