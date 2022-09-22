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
import { BsMessenger } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";
// import { AiFillStar } from "react-icons/im";
import { MdEventAvailable } from "react-icons/md";
import { AiFillSave } from "react-icons/ai";
import "./index.css";









let Leftbar = () => (

    <div className='lb'>

        <div className='fs'>
            <img src='https://tinyurl.com/euy4hh84' className='pspc' /> <div className='tx'>Shariq Siddiqui</div>
        </div>
        <div className='lebr'>
            <FaUserFriends />   Friends
        </div>
        <div className='lebr'>
            <HiUserGroup />   Groups
        </div>
        <div className='lebr'>
            <AiFillShop />   MarketPlace
        </div>
        <div className='lebr'>
            <AiFillVideoCamera />   Watch
        </div>
        <div className='lebr'>
            <BsStopwatchFill />   Memories
        </div>
        <div className='lebr'>
            <HiSpeakerphone />   Ad center
        </div>
        <div className='lebr'>
            <BsGraphUp />   Ads manager
        </div>
        <div className='lebr'>
            <ImDroplet/>   Blood Donation
        </div>
        <div className='lebr'>
            <MdEventAvailable />   Events
        </div>
        <div className='lebr'>
            <AiFillSave />   Saved
        </div>
        <div className='lebr'>
            <MdVideogameAsset />   Gaming
        </div>
        <div className='lebr'>
            <BsMessenger />   Messenger
        </div>


    </div>

)
export default Leftbar;