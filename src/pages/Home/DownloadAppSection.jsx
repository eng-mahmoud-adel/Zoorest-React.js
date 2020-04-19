import React from 'react';
import DownloadImage from '../../images/assets/images/Group 18@3x.png';
import googlePlayImage from '../../images/assets/images/Google Play Badge US@3x.png';
import appStoreImage from '../../images/assets/images/Group 27@3x.png';
import LazyLoad from "react-lazyload";

const DownloadAppSection = (props) => {
    const {downloadData, currentLocale} = props;
    return (
        <div className="row">
            <div className="image-section col-md-6 order-md-1 order-2">
                {/*todo mock-up image needs to be smaller little smaller maxWidth: "80%" masalan*/}
                <LazyLoad unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <img src={DownloadImage} alt="" className="img-fluid"/>
                </LazyLoad>
            </div>
            <div className="col-md-6 wrap-section order-md-2 order-1 text-center text-md-left mb-5">
                <h1 className="title font-weight-bold mt-0 mt-md-5 pt-0 pt-md-5">{downloadData.getFiledValueByName("title", currentLocale)}</h1>
                <div className="wrapper">
                    <p className="desc">{downloadData.getFiledValueByName("description", currentLocale)}</p>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6 col-4 ml-1 ml-sm-0">

                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href= {downloadData.getFiledValueByName("android_button_action", currentLocale)}
                               target="_blank">
                                <LazyLoad unmountIfInvisible={true} once={true}
                                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                                    <img src={googlePlayImage} alt="" className="img-fluid"/>
                                </LazyLoad>
                            </a>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 col-4">
                            <a href= {downloadData.getFiledValueByName("ios_button_action", currentLocale)} target="_blank">
                                <LazyLoad unmountIfInvisible={true} once={true}
                                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                                    <img src={appStoreImage} alt="" className="img-fluid app-store-image"/>
                                </LazyLoad>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadAppSection;
