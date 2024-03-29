import React from 'react';
import '../NavBar.css'

import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

class NavBar extends React.Component {
  render() {


    return (

      <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
            
          );
        })}
      </ul>

      
  
    </nav>


    )
  }

}

export default NavBar