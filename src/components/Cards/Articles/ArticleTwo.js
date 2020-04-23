import React from 'react';
import img from '../../../images/article-cover.png';

import {CommentsIcon, ViewsIcon, ShareIcon, FacebookIcon, TwitterIcon} from '../../Icons/index';

const ArticleTwo = (props) => {
    const {model, currentLocale}= props;

    const pageURL = () => {
        return window.location.href;
    }

    return (
        <div className={"article-details-card card"}>
            <h5 className="card-title mb-0 font-weight-bold">{model ? model.getLocalizedTitle(currentLocale) : ""}</h5>
            <small className="small-text">{model ? model.author.name : ""}</small>
            <div className= "icons">
                <span className= "icon-one"><CommentsIcon value={model.likes_count} text= "comments"/></span>
                <span className= "icon-one"><ViewsIcon value={model.views_count} text= "views"/></span>
            </div>
            <div className= "img-container-one">
                <img src= {model ? model._photo._path_large : img} className="img-fluid h-100 w-100" alt="" />
            </div>
            <div className="card-body">
                <p className="card-text">{model ? model.getLocalizedBody(currentLocale) : ""}</p>
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
                                <a href= {`https://www.facebook.com/sharer/sharer.php?u=${pageURL()}`} target= "_blank" className= "ml-2 mr-4"><FacebookIcon color= "#4267B2" /></a>
                                <a href= {`https://twitter.com/intent/tweet?text=${pageURL()}`} target= "_blank"><TwitterIcon color= "#1DA1F2" /></a>
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
