import React from "react"
import { useEffect, useState } from "react";
import { BsFillSunFill } from 'react-icons/bs';
import "./index.css";



let Toggle = () => {
    const [theme , setTheme] = useState("dark");


    const lightTheme =() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };




    useEffect(() => {
        document.body.className = theme;
    } ,[theme]);


    return <div><button onClick={lightTheme} className="btn"><BsFillSunFill className="but"/></button></div>
};
export default Toggle;