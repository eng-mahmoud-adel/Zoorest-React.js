import React from 'react';
import HeroImage from '../../images/assets/images/Group 12@3x.png';
import Button from '../../components/Buttons/Button/Button';
import LazyLoad from "react-lazyload";
import { Link } from 'react-router-dom';

const HeroSection = (props) => {
    const {data} = props;
    return (
        <div className="row">
            <div className="col-lg-6">
                <h1 className="title font-weight-bold mt-0">{data.title}</h1>
                <div className="wrapper">
                    <p className="desc">{data.description}</p>
                    <img src={data.image} alt=""/>
                </div>
                <div className="col-xl-6 col-lg-7 col-md-5 col-9 pl-0 mb-5">
                    <Link to= "/doctor"><Button text="Find the Nearest Doctors Now" color="btn btn-info" size="btn-sm" /></Link>
                </div>
            </div>

            <div className="col-lg-6">
                <LazyLoad unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <img src={HeroImage} alt="" className="img-fluid"/>
                </LazyLoad>
            </div>
        </div>
    );
};

export default HeroSection;
