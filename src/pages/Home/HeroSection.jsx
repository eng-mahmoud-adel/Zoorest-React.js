import React from 'react';
import HeroImage from '../../images/assets/images/Group 12@3x.png';
import Button from '../../components/Buttons/Button/Button';
import LazyLoad from "react-lazyload";
import {Link} from 'react-router-dom';

const HeroSection = (props) => {
    const {data: section} = props;
    const locale = "en";
    return (
        <div className="row">
            <div className="col-lg-6">
                <h1 className="title font-weight-bold mt-0">{section.getFiledValueByName("title", locale)}</h1>
                <div className="wrapper">
                    <p className="desc">{section.getFiledValueByName("description", locale)}</p>
                    <img src={section.image} alt=""/>
                </div>
                {
                    /*Dont Show the button if it has no text*/
                    section.getFiledValueByName("button_text", locale) &&
                    <div className="col-xl-6 col-lg-7 col-md-5 col-9 pl-0 mb-5">
                        <Link to={section.getFiledValueByName("button_action", locale)}>
                            <Button text={section.getFiledValueByName("button_text", locale)} color="btn btn-info"
                                    size="btn-sm"/>
                        </Link>
                    </div>
                }
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
