import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import BasicInput from '../../components/Inputs/BasicInput';
import {getArticles, getMoreArticles} from '../../store/actions/articles';
import LazyLoad from "react-lazyload";
import Tag from "../../components/Tags/Tag";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../../components/Cards/Articles/Article";

const AllArticlesContainer = (props) => {

    const {articles, getArticles, getMoreArticles} = props;
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getArticles();
        getMoreArticles();
    }, [getArticles, getMoreArticles]);

    return (
        <div className="all-articles container mt-5 py-5">
            <h1 className="title mt-0 pt-0 font-weight-bold">Articles</h1>
            <div className="wrapper d-flex mt-5 mb-3">
                <h5 className="second-title font-weight-bold col-md-2 pl-1 mb-0">Trending Topics:</h5>
                <ul className="list-unstyled d-flex col-10 justify-content-between mb-0">
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                    <li>#photooftheday</li>
                </ul>
            </div>

            <div className="row">
                <div className="col-md-8">
                    {articles.all.getTotalItems()} articles sorted by
                </div>
                <div className="col-md-4">
                    <BasicInput className="basic-input" type="text" right_icon="fa fa-search fa-lg"
                                placeholder="Start searching for anything"/>
                </div>
            </div>

            <section>
                {articles.all && <InfiniteScroll
                    dataLength={articles.all.data.length} //This is important field to render the next data
                    style={{overflow: "none"}}
                    next={() => {
                        console.log("fetchMore");
                        //dispatch a load more action that fetches new items and  appends to ro previous state
                        getMoreArticles(articles.all.links.getNextLink());
                    }}
                    hasMore={hasMore}
                    loadMoreMessage={"Load More Articles"}

                    refreshFunction={() => {
                        console.log("refreshing");
                        //dispatch a refresh action that clears the items and re-fetches them
                        getArticles();
                    }}
                    loader={<h4>Getting More Loading...</h4>}>

                    <div className="row">
                        {articles.all.data.map(item => (
                            <div className={(item.hasVideo() ? "col-8" : "col-4") + ` my-1`}
                                 key={"articles_" + item.id}>
                                <LazyLoad unmountIfInvisible={true} once={true}
                                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                                    <Article model={item} tag={Tag}/>
                                </LazyLoad>
                            </div>
                        ))}
                    </div>

                </InfiniteScroll>}
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
