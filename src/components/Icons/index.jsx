import React, {useState} from 'react'
import {IoMdHeart, IoMdHeartEmpty, IoMdStar} from "react-icons/io";
import {MdComment, MdPhone, MdRemoveRedEye, MdShare} from "react-icons/md";
import {FaEllipsisV, FaFacebookSquare, FaGoogle, FaInstagram, FaSearch, FaTwitter} from "react-icons/fa";
// import {FcGoogle} from "react-icons/fc";


export const StarIcon = ({onClick, is_active, value}) => {
    const [selected, setSelected] = useState(is_active || false);

    const handleClick = () => {
        setSelected(true);
        if (onClick) {
            onClick(selected, setSelected);
        }
    }

    return (
        <span className="icon-group">
            <IoMdStar onClick={handleClick}
                      color={selected ? "#12B0C6" : "#778699"}
                      size={"1.5em"}
            /> <small> {value} </small>  </span>
    );
};

export const HeartIcon = ({onClick, is_active, value, text}) => {
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
            <Component onClick={handleClick} color={selected ? "red" : ""}/><small> {value} {text}</small>
        </span>
    );
};

export const CommentsIcon = (props) => (
    <span className="icon-group"> <MdComment  {...props} /> <small>{props.value} {props.text}</small> </span>
);

export const ViewsIcon = (props) => (
    <span className="icon-group"> <MdRemoveRedEye {...props}/> <small>{props.value} {props.text}</small> </span>
);
export const SearchIcon = (props) => (
    <span className="icon-group"> <FaSearch {...props}/> <small>{props.value} {props.text}</small> </span>
);
export const CallIcon = (props) => (
    <span className="icon-group"> <MdPhone {...props}/> <p className="header-5">{props.value} {props.text}</p> </span>
);
export const ShareIcon = (props) => (
    <span className="icon-group"> <MdShare {...props}/> <small>{props.value} {props.text}</small> </span>
);

export const FacebookIcon = (props) => (<FaFacebookSquare color={"blue"} {...props}/>);
export const GoogleIcon = (props) => (<FaGoogle {...props}/>);
export const InstagramIcon = (props) => (<FaInstagram {...props}/>);
export const TwitterIcon = (props) => (<FaTwitter {...props}/>);
export const EllipsisIcon = (props) => (<FaEllipsisV color={"#6c757d"} {...props}/>);



