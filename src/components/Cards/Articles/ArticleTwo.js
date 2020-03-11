import React from 'react';
import img from '../../../images/article-cover.png';

const ArticleTwo = (props) => {
    return (
        <div className={props.className + " card"}>
            <h5 className="card-title">{props.cardTitle}</h5>
            <small className="small-text">{props.smallText}</small>
            <div className= "icons">
                <i className={props.icon_one + " icon-one"} aria-hidden="true"><span className= {props.number_one}>{props.number_one}</span></i>
                <i className={props.icon_two + " icon-two"} aria-hidden="true"><span className= {props.number_two}>{props.number_two}</span></i>
            </div>
            <div className= "img-container-one">
                <img src= {img} className="card-image" alt="" />
            </div>
            <div className="card-body">
                <p className="card-text">{props.cardText}</p>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text">{props.cardText}</p>
                <div className= "img-container-two">
                    <img src= {img} className="card-image" alt="" />
                    <small className="small-text">{props.smallTextTwo}</small>
                </div>
                <p className="card-text">{props.cardText}</p>
            </div>
            <div className="card-footer">
                <div className= "row">
                    <div className= "col-7 hashtag">
                        <div className= "row">
                            <div className= "col-3">
                                <span className= "hash-text">{props.hashText}</span>
                            </div>
                            <div className= "col-3">
                                <span className= "hash-text">{props.hashText}</span>
                            </div>
                            <div className= "col-3">
                                <span className= "hash-text">{props.hashText}</span>
                            </div>
                            <div className= "col-3">
                                <span className= "hash-text">{props.hashText}</span>
                            </div>
                        </div>
                    </div>

                    <div className= "col-12 share">
                        <div className= "row">
                            <div className= "col-9">Share Article on :</div>
                            <div className= "col-3">shares</div>
                        </div>
                    </div>
                    
                        
                </div>
            </div>
        </div>
    )
}

export default ArticleTwo;
