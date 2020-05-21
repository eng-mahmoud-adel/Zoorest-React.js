import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {getArticles, getMoreArticles} from '../../store/actions/articles';
import LazyLoad from "react-lazyload";
import Tag from "../../components/Tags/Tag";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../../components/Cards/Articles/Article";
import {SearchIcon} from "../../components/Icons";
import ArticleLoadingAnimation from "../../components/Cards/Articles/LoadingAnimations/Article";
import {Helmet} from "react-helmet";

const AllArticlesContainer = ({page, articles, getArticles, getMoreArticles, currentLocale}) => {

    const hasMore = true;

    useEffect(() => {
        getArticles();
    }, [getArticles]);

    return (
        <Fragment>
            {
                <Helmet>
                    {page.seo.title && <title>{page.seo.getLocalizedTitle(currentLocale)}</title>}

                    {page.seo.meta_keywords &&
                    <meta name="keywords" content={page.seo.getLocalizedKeywords(currentLocale)}/>}

                    {page.seo.meta_description &&
                    <meta name="description" content={page.seo.getLocalizedDescription(currentLocale)}/>}

                    {page.seo.updated_at && <meta name="og:updated_time" content={page.seo.updated_at}/>}
                </Helmet>
            }
            <div className="all-articles container mt-5 pb-5">
                {/* {page.bannerSection.getFiledValueByName("title", currentLocale)} */}
                <h2>Articles</h2>

                <div className="wrapper d-flex mt-5 mb-3">
                    <h5 className="second-title col-md-2 pl-1 mb-0 font-bold text-info">
                        Trending Topics:
                    </h5>
                    <ul className="list-unstyled d-flex col-10 justify-content-between mb-0">

                        {/*todo make topics clickable*/}
                        {page.trending_topics.map(topic => (<li>#{topic}</li>))}
                    </ul>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <label className="font-medium">
                            {articles.all.getTotalItems()} articles sorted by
                        </label>
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
                        loader={(<Fragment>
                            <div className="row">
                                {[...Array(3)].map((n, index) => (
                                    <div key={`loader_${index}`} className="col-lg-4">
                                        <ArticleLoadingAnimation/>
                                    </div>
                                ))}
                            </div>
                        </Fragment>)}>

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
        </Fragment>
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
