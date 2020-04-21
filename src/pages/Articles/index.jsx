import React, {useEffect} from 'react';
import {connect} from "react-redux";
import BasicInput from '../../components/Inputs/BasicInput';
import LazyList from "../../components/DataList";
import Article from '../../components/Cards/Articles/Article';
import {getArticles, getMoreArticles} from '../../store/actions/articles';

const AllArticlesContainer = (props) => {

    const {articles, getArticles, getMoreArticles}= props;

    useEffect(() => {
        getArticles();
        getMoreArticles();
    }, [getArticles, getMoreArticles]);

    return (
        <div className= "all-articles container mt-5 py-5">
            <h1 className= "title mt-0 pt-0 font-weight-bold">Articles</h1>  
            <div className= "wrapper d-flex mt-5 mb-3">
                <h5 className= "second-title font-weight-bold col-md-2 pl-1 mb-0">Trending Topics:</h5>
                <ul className= "list-unstyled d-flex col-10 justify-content-between mb-0">
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                </ul>
            </div>

            <div className= "row">
                <div className= "col-md-8">
                    3413 articles sorted by 
                </div>
                <div className= "col-md-4">
                    <BasicInput className="basic-input" type="text" right_icon="fa fa-search fa-lg" 
                        placeholder="Start searching for anything"/>
                </div>
            </div>
        
            <section>
                <LazyList
                    data={articles.all}
                    itemCols={"col-4"}
                    loadMoreMessage={"Load More Articles"}
                    component={Article}
                    placeholderComponent={Article}
                    fetchMoreData={getMoreArticles}
                    refresh={getArticles}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    pullDownToRefresh
                    pullDownToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                    }
                    />
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => {
        dispatch(getArticles())
    },

    getMoreArticles: (url) => {
        dispatch(getMoreArticles(url))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllArticlesContainer);
