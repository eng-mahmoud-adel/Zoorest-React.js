import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getArticles, getMoreArticles} from '../../store/actions/articles';
import LazyLoad from "react-lazyload";
import Tag from "../../components/Tags/Tag";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../../components/Cards/Articles/Article";
import {SearchIcon} from "../../components/Icons";
import {Text14Medium, Text18Bold, Text48} from "../../components/UI/Typography";

const AllArticlesContainer = ({page, articles, getArticles, getMoreArticles}) => {

    const hasMore = true;

    useEffect(() => {
        getArticles();
        getMoreArticles();
    }, [getArticles, getMoreArticles]);

    return (
        <div className="all-articles container mt-5 pb-5">
            <h1 className="title mt-0 pt-0 font-weight-bold">

                <Text48>Articles</Text48>
            </h1>
            <div className="wrapper d-flex mt-5 mb-3">
                <h5 className="second-title font-weight-bold col-md-2 pl-1 mb-0">
                    <Text18Bold className="text-info">Trending Topics:</Text18Bold>
                </h5>
                <ul className="list-unstyled d-flex col-10 justify-content-between mb-0">

                    {/*todo make topics clickable*/}
                    {page.trending_topics.map(topic => (<li>#{topic}</li>))}
                </ul>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <Text14Medium>
                        {articles.all.getTotalItems()} articles sorted by
                    </Text14Medium>
                </div>
                <div className="col-md-4">
                    {/*<BasicInput className="basic-input" type="text" right_icon="fa fa-search fa-lg"*/}
                    {/*            placeholder="Start searching for anything"/>*/}

                    <div className="input-group w-100">
                        <input type="text" name="search" className="basic-input"
                               placeholder="Start searching for anything"/>
                        <div className="input-group-append">
                            <span className="input-group-text icon">
                                <SearchIcon/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-2">
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
                        {articles.all.data.map((item, index) => (
                            <div className={`col-12 my-1 ${item.hasVideo() ? "col-lg-8" : "col-md-6 col-lg-4"}`}
                                 key={"articles_item_" + index}>
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
    page: state.pages.articles,
    articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => {
        dispatch(getArticles(6))
    },

    getMoreArticles: (url) => {
        dispatch(getMoreArticles(url))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllArticlesContainer);
