import React from 'react'
import {IoMdHeart, IoMdHeartEmpty} from "react-icons/io";
import {MdComment, MdRemoveRedEye, MdPhone} from "react-icons/md";
import {FaFacebookSquare, FaInstagram, FaTwitter, FaSearch} from "react-icons/fa";


export const HeartIcon = (props) => {
    const Component = props.is_active ? IoMdHeart : IoMdHeartEmpty;
    return (
        <span className="icon-group"> <Component {...props} /> {props.value}  </span>
    );
};

export const CommentsIcon = (props) => (
    <span className="icon-group"> <MdComment  {...props} /> {props.value}        </span>
);

export const ViewsIcon = (props) => (
    <span className="icon-group"> <MdRemoveRedEye {...props}/> {props.value} {props.text} </span>
);
export const SearchIcon = (props) => (
    <span className="icon-group"> <FaSearch {...props}/> {props.value} {props.text} </span>
);
export const CallIcon = (props) => (
    <span className="icon-group"> <MdPhone {...props}/> {props.value} {props.text} </span>
);


export const FacebookIcon = (props) => (<FaFacebookSquare {...props}/>);
export const InstagramIcon = (props) => (<FaInstagram {...props}/>);
export const TwitterIcon = (props) => (<FaTwitter {...props}/>);



