import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import "./index.css"

let Post = ( { name , profilepicture , date , posttext , postimage } ) => (
     <div className='main'>

        <div className='mainpf'>
            <img src={profilepicture} className="profilepic" />

            <div className='pf'>{name}
                <br />
                <div className='pdate'>{moment(date).fromNow()}</div>
            </div>
        </div>
        <div className='mainpost'>
            <div className='ptext'>{posttext}</div>

            <div><img src={postimage} className="postimage" /></div>

        </div>

        <hr className='hr' />

        <div className='comm'>

            <div className='hv'><AiFillLike />Like</div>

            <div className='hv'><MdInsertComment />Comment</div>

            <div className='hv'><FaShare />Share</div>

        </div>

        <hr />



    </div>
)
export default Post; 