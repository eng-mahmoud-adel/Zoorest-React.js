import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getRelatedArticles} from "../../../store/actions/articles";

const RelatedArticles = ({className, getRelatedArticles, related_articles}) => {

    useEffect(() => {
        getRelatedArticles()
    }, [getRelatedArticles]);

    return (
        <Fragment>
            {(related_articles && related_articles.data.length > 0) &&
            <div className={`top-membes-card card ${className || ""}`}>
                <h5 className="card-title">Related Articles</h5>
                <div className="card-body">
                    {
                        related_articles.data.map(article => <p key={"related_articles" + article.getKey()}
                                                                className="card-text">

                            <Link to={`/article/${article.getKey()}`}>
                                <p className="label">{article.getLocalizedTitle()}</p>
                            </Link>

                            <br/>
                            <p className="micro text-muted">By {article.author.name}</p>
                        </p>)
                    }
                </div>
            </div>
            }
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    related_articles: state.singleArticlePage.related,
});

const mapDispatchToProps = dispatch => ({
    getRelatedArticles: (article_id) => {
        dispatch(getRelatedArticles(article_id));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedArticles);
