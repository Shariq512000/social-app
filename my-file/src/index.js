import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from 'react';
import Header from './component/Header';
import Leftbar from './component/Leftbar';



import Post from './component/Post/Post';
import Rightbar from './component/Rightbar';


let Page = () => {


  return <div className="page">

    <Header />

    <div className='lbrb'>

      <div className='leftbr'>
        <Leftbar />
      </div>


      <div>

        <Post
          name="hehe majesty"
          profilepicture="https://tinyurl.com/euy4hh84"
          date="14 sep 2022 22:32"
          posttext="ICC T20 World Cup fixture between India & Pakistan has been Sold Out! "
          postimage="https://www.insidesport.in/wp-content/uploads/2022/02/image_2022-02-07_020434.png?w=967"
        />
        <Post
          name="Farhan Sheikh"
          profilepicture="https://tinyurl.com/ycka88da"
          date="11 sep 2022 17:20"
          posttext="Memories"
          postimage="https://tinyurl.com/bdctj8ft"
        />
        <Post
          name="Sheroz Siddiqui"
          profilepicture="https://tinyurl.com/36tzud47"
          date="7 sep 2022"
          posttext=""
          postimage="https://tinyurl.com/2p8k5ma3"
        />
        <Post
          name="Ch Talha"
          profilepicture="https://tinyurl.com/2p92dvp4"
          date="15 sep 2022"
          posttext="Not everyone's cup of tea"
          postimage="https://tinyurl.com/mrybt9zs"
        />
        <Post
          name="Code Tech"
          profilepicture="https://tinyurl.com/y6u3s3j9"
          date="6 sep 2022"
          posttext="Haha"
          postimage="https://tinyurl.com/mpx5wdbm"
        />
        <Post
          name="Mohammad Hammad"
          profilepicture="https://tinyurl.com/2tuj7ed4"
          date="5 sep 2022"
          posttext="Lol"
          postimage="https://d2kspx2x29brck.cloudfront.net/1200x675/filters:format(webp)/img/iea/yrwQvLJbON/programmer-memes.jpg"
        />
      </div>

      <div>
        <Rightbar />
      </div>

    </div>
  </div>
}
ReactDOM.render(<Page />, document.querySelector("#root"))