import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdVideogameAsset } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger} from "react-icons/bs";
import { MdNotifications} from "react-icons/md";
import Toggle from '../toggle';



import "./index.css"

let Header = () => (
    <div className='mai'>

        <div className='fir'>
            <img src='./facebook-logo.png' alt='fb-logo' className='fblo'/>
            <input type="text" className='sear' placeholder='Search Facebook'/>
        </div>
        <div className='sec'> 
            <div className='sebo'><AiFillHome /></div>
            <div className='sebo'> <AiFillVideoCamera /> </div>
            <div className='sebo'> <AiFillShop /> </div>
            <div className='sebo'> <HiUserGroup /> </div>
            <div className='sebo'> <MdVideogameAsset /> </div>
        </div>
        <div className='thi'>
        <div className='sebu'> <Toggle /> </div>
            <div className='sebo'> <CgMenuGridO /> </div>
            <div className='sebi'> <BsMessenger /> </div>
            <div className='sebo'> <MdNotifications /> </div>
            <img src='https://tinyurl.com/euy4hh84' className='pspc' alt='pc'/>
        </div>

    </div>
)
export default Header; 