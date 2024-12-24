import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Events</h1>
      <div className="menuList">
        {MenuList.map((menuItem, url, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name} 
              to={url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
