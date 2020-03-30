import React from 'react';
import DownloadImage from '../../images/assets/images/Group 18@3x.png';
import googlePlayImage from '../../images/assets/images/Google Play Badge US@3x.png';
import appStoreImage from '../../images/assets/images/Group 27@3x.png';
import LazyLoad from "react-lazyload";

const DownloadAppSection = (props) => {
    const {downloadData} = props;
    return (
        <div className="row">
            <div className="col-md-6">
                {/*todo mock-up image needs to be smaller little smaller maxWidth: "80%" masalan*/}
                <LazyLoad unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <img src={DownloadImage} alt="" className="img-fluid"/>
                </LazyLoad>
            </div>
            <div className="col-md-6 wrap-section">
                <h1 className="title font-weight-bold">{downloadData.title}</h1>
                <div className="wrapper">
                    <p className="desc">{downloadData.description}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <a href="https://play.google.com/store/apps/details?id=com.zoorest.zoorestapp"
                               target="_blank">
                                <LazyLoad unmountIfInvisible={true} once={true}
                                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                                    <img src={googlePlayImage} alt="" className="img-fluid"/>
                                </LazyLoad>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="#" target="_blank">
                                <LazyLoad unmountIfInvisible={true} once={true}
                                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                                    <img src={appStoreImage} alt="" className="img-fluid"/>
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
