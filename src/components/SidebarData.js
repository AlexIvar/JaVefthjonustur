/*
    Gögn fyrir linka á sideBar
 */
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Heim",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Fyrirtæki",
    path: "/products",
    icon: <FaIcons.FaBuilding />,
    cName: "nav-text",
  },
  {
    title: "Hafðu samband!",
    path: "/contact",
    icon: <IoIcons.IoMdPhoneLandscape />,
    cName: "nav-text",
  },
];
