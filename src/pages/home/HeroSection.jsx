import React from 'react';
import HeroImage from '../../images/assets/images/Group 12@3x.png';
import Button from '../../components/Buttons/Button/Button';
import LazyLoad from "react-lazyload";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const HeroSection = ({section, currentLocale}) => {

    return (
        <div className="row">
            {section && <div className="col-lg-6 text-center text-md-left">
                <h1 className="title mt-0 text-dark">
                    {section.getFiledValueByName("title", currentLocale)}
                </h1>
                <div className="wrapper">
                    <p className="header-5 font-regular">{section.getFiledValueByName("description", currentLocale)}</p>
                    <img src={section.image} alt=""/>
                </div>
                {
                    /*Dont Show the button if it has no text*/
                    section.getFiledValueByName("button_text", currentLocale) &&
                    <div className="col-xl-6 col-lg-7 col-md-5 col-12 pl-0 mb-5 align-self-center">
                        <Link to={section.getFiledValueByName("button_action", currentLocale)}>
                            <Button text={section.getFiledValueByName("button_text", currentLocale)}
                                    variant="info"
                                    size="sm"/>
                        </Link>
                    </div>
                }
            </div>}

            <div className="col-lg-6">
                <LazyLoad unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <img src={HeroImage} alt="" className="img-fluid"/>
                </LazyLoad>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentLocale: state.i18n.value,
    section: state.pages.homepage.heroSection,

});
export default connect(mapStateToProps)(HeroSection);