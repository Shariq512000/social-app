import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";

function Post(props) {
  return <div className='main'>

    <div className='mainpf'>
      <img src={props.profilepicture} className="profilepic" />

      <div className='pf'>{props.name}
        <br />
        <div className='pdate'>{moment(props.date).fromNow()}</div>
      </div>
    </div>
    <div className='mainpost'>
      <div className='ptext'>{props.posttext}</div>

      <div><img src={props.postimage} className="postimage" /></div>

    </div>

    <hr className='hr'/>

    <div className='comm'>

      <div className='hv'><AiFillLike />Like</div>

      <div className='hv'><MdInsertComment />Comment</div>

      <div className='hv'><FaShare />Share</div>

    </div>

    <hr />



  </div>
}
function Page() {
  return <div className='page'>
    <Post
      name="hehe majesty"
      profilepicture="https://tinyurl.com/euy4hh84"
      date="14 sep 2022 22:32"
      posttext="ICC T20 World Cup fixture between India & Pakistan has been Sold Out! "
      postimage="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/306948469_1483609635453130_9007567140756455476_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeELxeAXRbdhxYxtdEjUXXhixxAk_YTzlR7HECT9hPOVHi8rWFl19vgwBsP6DgwrG371SEKRyAiblS4WY4j_j-HT&_nc_ohc=ivjKc8zN4JIAX_QtL8A&_nc_oc=AQmLXOV39KEMn3qaicp9amwg41sygCkMFgMPHrxzDdonR-8jb8cnw5Sw1dVQvfdYFN4&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT8GwhNNAgtYJoEGBCnzNyMii6CDjIl9dwq61BdmxNQLJQ&oe=63278F2A"
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
      postimage="https://tinyurl.com/2p62zmj4"
    />
  </div>
}
ReactDOM.render(<Page />, document.querySelector("#root"))