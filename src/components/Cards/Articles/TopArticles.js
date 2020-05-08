import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getTopArticles} from "../../../store/actions/articles";

const TopArticles = ({className, getTopArticles, top_articles}) => {

    useEffect(() => {
        getTopArticles()
    }, [getTopArticles]);

    return (
        <Fragment>
            {top_articles.data.length > 0 && <div className={`top-membes-card card ${className || ""}`}>
                <h5 className="card-title">Top Articles</h5>
                <div className="card-body">
                    {
                        top_articles.data.map(article => <p key={"top_question" + article.getKey()}
                                                            className="card-text">

                            <Link to={`/article/${article.getKey()}`}>
                                <p className="label">
                                    {article.getLocalizedTitle()}
                                </p>
                            </Link>

                            <br/>
                            <p className="micro text-muted">By {article.author.name}</p>
                        </p>)
                    }
                </div>
            </div>}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    top_articles: state.articles.top,
});

const mapDispatchToProps = dispatch => ({
    getTopArticles: () => {
        dispatch(getTopArticles());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(TopArticles);
