import React, {useState} from 'react'
import {IoMdHeart, IoMdHeartEmpty} from "react-icons/io";
import {MdComment, MdPhone, MdRemoveRedEye, MdShare} from "react-icons/md";
import {FaFacebookSquare, FaInstagram, FaSearch, FaTwitter} from "react-icons/fa";


export const HeartIcon = ({onClick, is_active, value}) => {
    const [selected, setSelected] = useState(is_active || false);
    const Component = selected ? IoMdHeart : IoMdHeartEmpty;

    const handleClick = () => {
        setSelected(true);
        if (onClick) {
            onClick(selected, setSelected);
        }
    }

    return (
        <span className="icon-group">
            <Component onClick={handleClick} color={selected ? "red" : ""}/> {value}  </span>
    );
};

export const CommentsIcon = (props) => (
    <span className="icon-group"> <MdComment  {...props} /> {props.value} {props.text} </span>
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
export const ShareIcon = (props) => (
    <span className="icon-group"> <MdShare {...props}/> {props.value} {props.text} </span>
);


export const FacebookIcon = (props) => (<FaFacebookSquare {...props}/>);
export const InstagramIcon = (props) => (<FaInstagram {...props}/>);
export const TwitterIcon = (props) => (<FaTwitter {...props}/>);



