import React from 'react';
import DownloadImage from '../../images/assets/Group 18@3x.png';
import googlePlayImage from '../../images/play-store.png';
import appStoreImage from '../../images/app-store.png';

const DownloadAppSection = (props) => {
    const {downloadData}= props;
    return (
        <div className= "row">
            <div className= "col-md-6">
                {/*todo mock-up image needs to be smaller little smaller maxWidth: "80%" masalan*/}
                <img src= {DownloadImage} alt= "" className= "img-fluid"/>
            </div>
            <div className= "col-md-6 wrap-section">
                <h1 className= "title font-weight-bold">{downloadData.title}</h1>
                <div className= "wrapper">
                    <p className= "desc">{downloadData.description}</p>
                    <div className= "row">
                        <div className= "w-50">
                            <img src= {googlePlayImage} alt="" className= "img-fluid" />
                        </div>
                        <div className= "w-50">
                            <img src= {appStoreImage} alt="" className= "img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadAppSection;
