import Navigation from "../../components/navigation/Navigation";
import Map from "../../components/map/Map";
import './profile.css';
import '../../components/edit_profile/edit_profile.css';
import EditProfile from '../../components/edit_profile/edit_profile';

const Profile = () => {
    return (
        <>
        <div className="dashContainer">
        <Navigation />
        <div className="menu">
         <div className="menuWrapper">
        <EditProfile/>
          </div>
          </div>
        <Map/>
        </div>
        </>
      );
}
 
export default Profile;