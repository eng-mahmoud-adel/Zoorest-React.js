import React from 'react';
import img from '../../../images/article-cover.png';

const Article = (props) => {
    const model = props.article;
    return (
        <div className={"card article-card"}>
            <h5 className="card-title">{model ? model.title : props.cardTitle}</h5>
            <small className="small-text">{model ? model.human_created_at : props.cardTime}</small>
            <div className="img-container">
                <img src={model ? model.image_url : img} className="img-fluid h-100 w-100" alt=""/>
            </div>
            <div className="card-body">
                <p className="card-text">{model ? model.cleaned_body.substring(0, 200) : props.cardText}...</p>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-8">
                        {/*TODO: Redirect to Article Page and pass the model object/id*/}
                        <a href="/" className="card-link">Read More</a>
                    </div>

                    <div className="col-4">
                        <div className="icons">

                            <i className="fa fa-commenting-o icon-one" aria-hidden="true">
                                <span>{(model && model.comments_count) ? model.comments_count : 0}</span>
                            </i>

                            {/*Todo: add hover and favorite action when clicked*/}
                            <i className="fa fa-heart-o icon-two" aria-hidden="true">
                                <span>{(model && model.favorites) ? model.favorites : 0}</span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Article;
