import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getRelatedArticles} from "../../../store/actions/articles";
import {Text10, Text14Regular, Text18Bold} from "../../UI/Typography";

const RelatedArticles = ({className, getRelatedArticles, related_articles}) => {

    useEffect(() => {
        getRelatedArticles()
    }, [getRelatedArticles]);

    return (
        <Fragment>
            {(related_articles && related_articles.data.length > 0) &&
            <div className={`top-membes-card card ${className || ""}`}>
                <h5 className="card-title"><Text18Bold>Related Articles</Text18Bold></h5>
                <div className="card-body">
                    {
                        related_articles.data.map(article => <p key={"related_articles" + article.getKey()}
                                                                className="card-text">

                            <Link to={`/article/${article.getKey()}`}>
                                <Text14Regular>{article.getLocalizedTitle()}</Text14Regular>
                            </Link>

                            <br/>
                            <Text10 className="text-muted">By {article.author.name}</Text10>
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
