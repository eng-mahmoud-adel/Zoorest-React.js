import React from 'react';
import HeroImage from '../../images/assets/Group 12@3x.png';
import SmallButton from '../../components/Buttons/SmallButtons/SmallButton';

const HeroSection = (props) => {
    const {data}= props;
    return (
        <div className= "row">
            <div className= "col-md-6">
                <h1 className= "title font-weight-bold">{data.title}</h1>
                <div className= "wrapper">
                    <p className= "desc">{data.description}</p>
                    <img src= {data.image} alt="" />
                </div>
                <div className= "w-50">
                    <SmallButton text= "Find the Nearest Doctors Now" color= "btn btn-info" size= "btn-sm" />
                </div>
            </div>

            <div className= "col-md-6">
                <img src= {HeroImage} alt= "" className= "img-fluid" />
            </div>
        </div>
    );
};

export default HeroSection;
