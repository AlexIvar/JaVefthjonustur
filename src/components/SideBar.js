/*
    Component sem birtir og hleður inn gögnum fyrir sideBar 
 */
import React from "react";
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideBar.css";
import { IconContext } from "react-icons/lib";

const SideBar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#02D986" }}>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="nav-text">
              <Link to="/">
                <FaIcons.FaCar />
                <span>Bíla fyrirtæki</span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
