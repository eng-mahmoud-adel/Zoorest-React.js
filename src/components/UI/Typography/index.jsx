import React from 'react'

//todo apply font
//todo convert inline style to sass classes
const Text = ({fontFamily, className, children, size, line}) => {
    return <span className={`${className || "text-dark"}`}
                 style={{fontSize: `${size}px`, lineHeight: `${line}px`, fontFamily: fontFamily}}>
        {children}
    </span>;
};

const Text64 = (props) => (<Text {...props} size={64} line={80} fontFamily={"Roboto Bold"}>{props.children}</Text>)
const Text48 = (props) => (<Text {...props} size={48} line={64} fontFamily={"Roboto Bold"}>{props.children}</Text>)
const Text32 = (props) => (<Text {...props} size={32} line={48} fontFamily={"Roboto Medium"}>{props.children}</Text>)
const Text24 = (props) => (<Text {...props} size={24} line={36} fontFamily={"Roboto Medium"}>{props.children}</Text>)
const Text18Bold = (props) => (
    <Text {...props} size={18} line={28} fontFamily={"Roboto Bold"}>{props.children}</Text>);
const Text18Medium = (props) => (
    <Text {...props} size={18} line={28} fontFamily={"Roboto Medium"}>{props.children}</Text>)
const Text18Regular = (props) => (
    <Text {...props} size={18} line={28} fontFamily={"Roboto Regular"}>{props.children}</Text>)
const Text16Black = (props) => (
    <Text {...props} size={16} line={24} fontFamily={"Roboto Black"}>{props.children}</Text>)
const Text16Medium = (props) => (
    <Text {...props} size={16} line={24} fontFamily={"Roboto Medium"}>{props.children}</Text>)
const Text16Regular = (props) => (
    <Text {...props} size={16} line={24} fontFamily={"Roboto Regular"}>{props.children}</Text>)
const Text14Medium = (props) => (
    <Text {...props} size={14} line={22} fontFamily={"Roboto Medium"}>{props.children}</Text>)
const Text14Regular = (props) => (
    <Text {...props} size={14} line={22} fontFamily={"Roboto Regular"}>{props.children}</Text>)
const Text12 = (props) => (<Text {...props} size={12} line={18} fontFamily={"Roboto Regular"}>{props.children}</Text>)
const Text10 = (props) => (<Text {...props} size={10} line={14} fontFamily={"Roboto Regular"}>{props.children}</Text>)
const Text08 = (props) => (<Text {...props} size={8} line={12} fontFamily={"Roboto Regular"}>{props.children}</Text>)

export {
    Text64,
    Text48,
    Text32,
    Text24,
    Text18Medium,
    Text18Regular,
    Text18Bold,
    Text16Black,
    Text16Medium,
    Text16Regular,
    Text14Medium,
    Text14Regular,
    Text12,
    Text10,
    Text08
};
