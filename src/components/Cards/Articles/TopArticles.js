import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getTopArticles} from "../../../store/actions/articles";
import {Text10, Text14Regular, Text18Bold} from "../../UI/Typography";

const TopArticles = ({className, getTopArticles, top_articles}) => {

    useEffect(() => {
        getTopArticles()
    }, [getTopArticles]);

    return (
        <Fragment>
            {top_articles.data.length > 0 && <div className={`top-membes-card card ${className || ""}`}>
                <h5 className="card-title"><Text18Bold>Top Articles</Text18Bold></h5>
                <div className="card-body">
                    {
                        top_articles.data.map(article => <p key={"top_question" + article.getKey()}
                                                            className="card-text">

                            <Link to={`/article/${article.getKey()}`}>
                                <Text14Regular>{article.getLocalizedTitle()}</Text14Regular>
                            </Link>

                            <br/>
                            <Text10 className="text-muted">By {article.author.name}</Text10>
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
