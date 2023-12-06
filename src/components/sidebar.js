import React, { useState, useEffect } from 'react';
import { BiFolderOpen , BiLogOut, BiUser } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaRegChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "TASKS",
            icon: <AiFillHome />
        },
        {
            path: "/",
            name: "Completed",
            icon: <BiFolderOpen />
        },
        {
            path: "/",
            name: "Incomplete",
            icon: <BiUser />
        },
        {
            path: "/",
            name: "Logout",
            icon: <BiLogOut />
        }
    ];

    // Update isOpen state based on screen width
    const handleResize = () => {
        setIsOpen(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Add and remove event listener on component mount and unmount

    return (
        <div>
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
