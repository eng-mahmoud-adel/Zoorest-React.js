import React from 'react';
import img from '../../../images/article-cover.png';

const Article = (props) => {
    return (
        <div className={props.className + " card"}>
            <h5 className="card-title">{props.cardTitle}</h5>
            <small className="small-text">{props.cardTime}</small>
            <div className= "img-container">
                <img src= {img} className="card-image" alt="" />
            </div>
            <div className="card-body">
                {props.cardText && <p className="card-text">{props.cardText}</p>}
            </div>
            <div className="card-footer">
                <div className= "row">
                    <div className= {props.link_size}>
                        <a href="#" className="card-link">Read More</a>
                    </div>
                    <div className= {props.icons_size}>
                        <div className= "icons">
                            <i className={props.icon_one + " icon-one"} aria-hidden="true"><span className= {props.number_one}>2</span></i>
                            <i className={props.icon_two + " icon-two"} aria-hidden="true"><span className= {props.number_two}>3</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;
