import React from 'react';
import img from '../../../images/article-cover.png';

import {CommentsIcon, FacebookIcon, ShareIcon, TwitterIcon, ViewsIcon} from '../../Icons/index';
import ReactPlayer from "react-player";

const ArticleDetails = (props) => {
    const {model, currentLocale} = props;

    const pageURL = () => {
        return window.location.href;
    }

    return (
        <div className={"article-details-card card"}>
            <h5 className="card-title mb-0 font-weight-bold">{model.getLocalizedTitle(currentLocale)}</h5>
            <small className="small-text">{model.author.name}</small>
            <div className="icons">
                <span className="icon-one"><CommentsIcon value={model.likes_count} text="comments"/></span>
                <span className="icon-one"><ViewsIcon value={model.views_count} text="views"/></span>
            </div>
            <div className="img-container-one">

                {model.video ?
                    <ReactPlayer
                        url={model.video}
                        loop={false}
                        light={true}
                        // width='100%'
                        playing
                        // playIcon={}
                    />

                    :
                    <img src={model.photo ? model.photo.path_large : img} className="img-fluid h-100 w-100" alt=""/>
                }


            </div>
            <div className="card-body">
                <p className="card-text" dangerouslySetInnerHTML={{
                    __html: model.getLocalizedBody(currentLocale)
                }}/>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-7 hashtag">
                        <div className="row">
                            {model.tags && model.tags.map(tag => <div className="col-3">
                                <span className="hash-text">{tag}</span>
                            </div>)}
                        </div>
                    </div>
                    <div className="col-12 share">
                        <div className="row">
                            <div className="col-10">Share Article on :
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${pageURL()}`} target="_blank"
                                   rel="noopener noreferrer"
                                   className="ml-2 mr-4"><FacebookIcon color="#4267B2"/></a>
                                <a href={`https://twitter.com/intent/tweet?text=${pageURL()}`}
                                   rel="noopener noreferrer" target="_blank"><TwitterIcon color="#1DA1F2"/></a>
                            </div>
                            <div className="col-2 share-icon">
                                <ShareIcon value={model.shares_count} text="shares"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails;
