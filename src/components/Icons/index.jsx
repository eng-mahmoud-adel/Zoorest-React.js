import React, {useState} from 'react'
import {IoMdHeart, IoMdHeartEmpty, IoMdStar} from "react-icons/io";
import {MdComment, MdPhone, MdRemoveRedEye, MdShare} from "react-icons/md";
import {FaFacebookSquare, FaGoogle, FaInstagram, FaSearch, FaTwitter, FaEllipsisV} from "react-icons/fa";
// import {FcGoogle} from "react-icons/fc";
import {Text12, Text18Bold} from "../UI/Typography";


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
            /> <Text12> {value} </Text12>  </span>
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
            <Component onClick={handleClick} color={selected ? "red" : ""}/><Text12> {value} {text}</Text12>
        </span>
    );
};

export const CommentsIcon = (props) => (
    <span className="icon-group"> <MdComment  {...props} /> <Text12>{props.value} {props.text}</Text12> </span>
);

export const ViewsIcon = (props) => (
    <span className="icon-group"> <MdRemoveRedEye {...props}/> <Text12>{props.value} {props.text}</Text12> </span>
);
export const SearchIcon = (props) => (
    <span className="icon-group"> <FaSearch {...props}/> <Text12>{props.value} {props.text}</Text12> </span>
);
export const CallIcon = (props) => (
    <span className="icon-group"> <MdPhone {...props}/> <Text18Bold>{props.value} {props.text}</Text18Bold> </span>
);
export const ShareIcon = (props) => (
    <span className="icon-group"> <MdShare {...props}/> <Text12>{props.value} {props.text}</Text12> </span>
);

export const FacebookIcon = (props) => (<FaFacebookSquare color={"blue"} {...props}/>);
export const GoogleIcon = (props) => (<FaGoogle {...props}/>);
export const InstagramIcon = (props) => (<FaInstagram {...props}/>);
export const TwitterIcon = (props) => (<FaTwitter {...props}/>);
export const EllipsisIcon = (props) => (<FaEllipsisV color={"#6c757d"} {...props}/>);



