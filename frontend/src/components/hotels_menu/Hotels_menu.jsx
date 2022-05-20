import "./hotels_menu.css";
import MenuList from "../menu_list/menu_list";
import EditProfile from '../edit_profile/edit_profile'
const Menu = ({edit}) => {
  return (
    <div className="menu">
      <div className="menuWrapper">
        {edit ? <EditProfile/> : <MenuList />}
        
      </div>
    </div>
  );
};

export default Menu;
