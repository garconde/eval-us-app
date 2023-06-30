import React from "react";
import { useState } from "react";

const Sidebar = () => {
    const [isExpanded, setExpanded] = useState(true);
  
    const toggleSidebar = () => {
      setExpanded(!isExpanded);
    };
  
    return (
      <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h3 className="text-center">Sidebar Title</h3>
          <button className="btn btn-primary toggle-button" onClick={toggleSidebar}>
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
        <ul className="list-group sidebar-menu">
          <li className="list-group-item">Menu 1</li>
          <li className="list-group-item">Menu 2</li>
          <li className="list-group-item">Menu 3</li>
          <li className="list-group-item">Menu 4</li>
        </ul>
        <div className="sidebar-footer">
          <p>Footer content</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;