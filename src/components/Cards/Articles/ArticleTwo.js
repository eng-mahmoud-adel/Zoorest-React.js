import React from 'react';
import img from '../../../images/article-cover.png';

import {CommentsIcon, ViewsIcon, ShareIcon, FacebookIcon, TwitterIcon} from '../../Icons/index';

const ArticleTwo = (props) => {
    const {model}= props;
    return (
        <div className={"article-details-card card"}>
            <h5 className="card-title mb-0 font-weight-bold">{model ? model.getLocalizedTitle() : ""}</h5>
            <small className="small-text">{model ? model.author.name : ""}</small>
            <div className= "icons">
                <span className= "icon-one"><CommentsIcon value={model.likes_count} text= "comments"/></span>
                <span className= "icon-one"><ViewsIcon value={model.views_count} text= "views"/></span>
            </div>
            <div className= "img-container-one">
                <img src= {img} className="img-fluid h-100 w-100" alt="" />
            </div>
            <div className="card-body">
                <p className="card-text">{model ? model.getLocalizedCleanedBody().slice(0, 200) : ""}</p>
                <p className="card-text">{model ? model.getLocalizedCleanedBody().slice(0, 200) : ""}</p>
                <p className="card-text">{model ? model.getLocalizedCleanedBody().slice(0, 200) : ""}</p>
                <div className= "img-container-two">
                    <div>
                        <img src= {img} className="img-fluid h-100" alt="" />
                    </div>
                <small className="small-text">{model ? model.author.description : ""}</small>
                </div>
                <p className="card-text">{model ? model.getLocalizedCleanedBody().slice(0, 200) : ""}</p>
            </div>
            <div className="card-footer">
                <div className= "row">
                    <div className= "col-7 hashtag">
                        <div className= "row">
                            <div className= "col-3">
                                <span className= "hash-text">#photooftheday</span>
                            </div>
                            <div className= "col-3">
                                <span className= "hash-text">#photooftheday</span>
                            </div>
                            <div className= "col-3">
                                <span className= "hash-text">#photooftheday</span>
                            </div>
                            <div className= "col-3">
                                <span className= "hash-text">#photooftheday</span>
                            </div>
                        </div>
                    </div>
                    <div className= "col-12 share">
                        <div className= "row">
                            <div className= "col-10">Share Article on :
                                <span className= "ml-2 mr-4"><FacebookIcon color= "#4267B2" /></span>
                                <span><TwitterIcon color= "#1DA1F2" /></span>
                            </div>
                            <div className= "col-2 share-icon">
                                <ShareIcon value={model.shares_count} text= "shares"/>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default ArticleTwo;
