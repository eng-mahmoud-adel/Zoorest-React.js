import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getTopArticles} from "../../../store/actions/articles";

const TopArticles = ({className, getTopArticles, top_articles, currentLocale}) => {

    useEffect(() => {
        getTopArticles()
    }, [getTopArticles]);

    return (
        <Fragment>
            {top_articles.data.length > 0 && <div className={`top-membes-card card ${className || ""}`}>
                <h5 className="card-title">Top Articles</h5>
                <div className="card-body">
                    {
                        top_articles.data.map(article => <div key={"top_question" + article.getKey()}
                                                              className="card-text">

                            <Link to={article.getPageRoute(currentLocale)}>
                                <p className="label">
                                    {article.getLocalizedTitle()}
                                </p>
                            </Link>

                            <br/>
                            <p className="micro text-muted">By {article.author.name}</p>
                        </div>)
                    }
                </div>
            </div>}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    top_articles: state.articles.top,
    currentLocale: state.i18n,

});

const mapDispatchToProps = dispatch => ({
    getTopArticles: () => {
        dispatch(getTopArticles());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(TopArticles);
