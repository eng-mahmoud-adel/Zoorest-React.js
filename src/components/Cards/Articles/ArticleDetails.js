import React from 'react';
import img from '../../../images/article-cover.png';

import {CommentsIcon, FacebookIcon, ShareIcon, TwitterIcon, ViewsIcon} from '../../Icons/index';
import ReactPlayer from "react-player";
import {Text18Regular, Text48} from "../../UI/Typography";

const ArticleDetails = ({model, currentLocale, handleShare}) => {

    const pageURL = () => {
        return window.location.href;
    }

    return (
        <div className="article-details-card card ">
            <div className="card-header p-3">
                <h5 className="card-title mb-0">
                    <Text48>
                        {model.getLocalizedTitle(currentLocale)}
                    </Text48>
                </h5>
                <small className="small-text">
                    <Text18Regular className="text-muted">
                        By {model.author.name}
                    </Text18Regular>
                </small>

                <div className="icons">
                    <span className="icon-one"><CommentsIcon value={model.likes_count} text="comments"/></span>
                    <span className="icon-one"><ViewsIcon value={model.views_count} text="views"/></span>
                </div>
            </div>


            <div className="card-img p-3">
                <div className="img-container-one">

                    {model.hasVideo() ?
                        <ReactPlayer
                            url={model.video}
                            loop={false}
                            light={true}
                            width='100%'
                            height="100%"
                            playing
                            // playIcon={}
                        />

                        :
                        <img src={model.photo ? model.photo.path_large : img} className="img-fluid h-100 w-100" alt=""/>
                    }
                </div>


            </div>

            <div className="card-body mt-3 p-3">
                <p className="card-text" dangerouslySetInnerHTML={{
                    __html: model.getLocalizedBody(currentLocale)
                }}/>
            </div>

            <div className="card-footer p-3">
                <div className="row">
                    {model.tags && <div className="col-7 hashtag">
                        <div className="row">
                            {model.tags.map(tag => <div className="col-3">
                                <span className="hash-text">{tag}</span>
                            </div>)}
                        </div>
                    </div>}
                    <div className="col-12 share">
                        <div className="row">
                            <div className="col-10">Share Article on :
                                <a onClick={handleShare}
                                   href={`https://www.facebook.com/sharer/sharer.php?u=${pageURL()}`} target="_blank"
                                   rel="noopener noreferrer"
                                   className="ml-2 mr-4"><FacebookIcon size="1.5em" color="#4267B2"/></a>
                                <a onClick={handleShare} href={`https://twitter.com/intent/tweet?text=${pageURL()}`}
                                   rel="noopener noreferrer" target="_blank"><TwitterIcon size="1.5em" color="#1DA1F2"/></a>
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
