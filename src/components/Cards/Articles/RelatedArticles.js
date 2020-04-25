import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
                        related_articles.data.map(article => <p key={"top_articles" + article.getKey()}
                                                                className="card-text">

                            <Link to={`/article/${article.getKey()}`}>
                                {article.getLocalizedTitle()}
                            </Link>

                            <p>BY {article.author.name}</p>
                        </p>)
                    }
                </div>
            </div>
            }
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    related_articles: state.articles.related,
});

const mapDispatchToProps = dispatch => ({
    getRelatedArticles: (article_id) => {
        //todo dispatch(getRelatedArticles(article_id));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedArticles);
