import React, {useEffect, useState, Fragment} from 'react';
import {connect} from 'react-redux';
import {Tab, Tabs} from 'react-bootstrap';
import Post from '../../components/Cards/Posts/Post';
import LazyList from "../../components/DataList";
import BasicInput from '../../components/Inputs/BasicInput';
import Button from '../../components/Buttons/Button/Button';
import {showModal} from "../../store/actions/modal";
import AddPost from '../../components/Cards/Posts/AddPost';
import AddPostForm from '../../components/Forms/AddPostForm';
import {
    getAdoptPosts,
    getLostPosts,
    getMatePosts,
    getMoreAdoptPosts,
    getMoreLostPosts,
    getMoreMatePosts,
    getMoreProductPosts,
    getMoreSellPosts,
    getProductPosts,
    getSellPosts,
} from '../../store/actions/posts';
import {getAdoptionPage} from "../../store/actions/pages";
import {Helmet} from "react-helmet";

const AllPostsContainer = ({
                               page, currentLocale, posts, getSellPosts, getMoreSellPosts, getAdoptPosts, getMoreAdoptPosts,
                               getMatePosts, getMoreMatePosts, getLostPosts, getMoreLostPosts, getProductPosts, getMoreProductPosts, getPage, showModal
                           }) => {

    const [key, setKey] = useState('sell');

    useEffect(() => {
        getPage();
        getSellPosts();
        getAdoptPosts();
        getMatePosts();
        getLostPosts();
        getProductPosts();
    }, [getPage, getSellPosts, getAdoptPosts, getMatePosts, getLostPosts, getProductPosts]);

    const addPostForm = () => {
        showModal(AddPostForm)
    }

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
            <div className= "adoption container">

                <header>
                    <h1 className= "title font-weight-bold">{page.bannerSection.getFiledValueByName("title", currentLocale)}</h1>
                    <p className= "desc">{page.bannerSection.getFiledValueByName("description", currentLocale)}</p>
                </header>

                <div className= "row">

                    <section className= "col-md-9">
                        <Tabs
                            className="my-5"
                            id="posts"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}>

                            <Tab eventKey="sell" title="Sell">
                                <div>
                                    <p className="mt-3">Price: </p>
                                    <Button text=" + Add New Post"
                                            color="btn btn-danger"
                                            size="btn-sm"
                                            onClick={addPostForm}
                                            className="mb-3"/>
                                </div>
                                {<LazyList
                                    data={posts.sell}
                                    itemCols={"col-12"}
                                    loadMoreMessage={"Load More Posts"}
                                    component={Post}
                                    //todo placeholderComponent={Post}
                                    fetchMoreData={getMoreSellPosts}
                                    refresh={getSellPosts}

                                />}
                            </Tab>

                            <Tab eventKey="adopt" title="Adopt">
                                {<LazyList
                                    data={posts.adopt}
                                    itemCols={"col-12"}
                                    loadMoreMessage={"Load More Posts"}
                                    component={Post}
                                    //todo placeholderComponent={Post}
                                    fetchMoreData={getMoreAdoptPosts}
                                    refresh={getAdoptPosts}

                                />}
                            </Tab>

                            <Tab eventKey="mate" title="Mate">
                                {<LazyList
                                    data={posts.mate}
                                    itemCols={"col-12"}
                                    loadMoreMessage={"Load More Posts"}
                                    component={Post}
                                    //todo placeholderComponent={Post}
                                    fetchMoreData={getMoreMatePosts}
                                    refresh={getMatePosts}


                                />}
                            </Tab>

                            <Tab eventKey="lost" title="Lost">
                                {<LazyList
                                    data={posts.lost}
                                    itemCols={"col-12"}
                                    loadMoreMessage={"Load More Posts"}
                                    component={Post}
                                    //todo placeholderComponent={Post}
                                    fetchMoreData={getMoreLostPosts}
                                    refresh={getLostPosts}


                                />}
                            </Tab>

                            <Tab eventKey="product" title="Product">
                                {<LazyList
                                    data={posts.product}
                                    itemCols={"col-12"}
                                    loadMoreMessage={"Load More Posts"}
                                    component={Post}
                                    //todo placeholderComponent={Post}
                                    fetchMoreData={getMoreProductPosts}
                                    refresh={getProductPosts}


                                />}
                            </Tab>
                        </Tabs>

                    </section>

                    <section className= "col-md-3">
                        <div>
                            <BasicInput className="basic-input" type="text" right_icon="fa fa-search fa-lg"
                                        placeholder="Start searching for anything"/>
                        </div>

                        <div className="mt-5">
                            <AddPost onButtonClicked={addPostForm} />
                        </div>
                    </section>

                </div>

            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    page: state.pages.adoption,
    posts: state.posts,
    currentLocale: state.i18n.value,
});

const mapDispatchToProps = (dispatch) => ({
    getPage: (component) => {
        dispatch(getAdoptionPage(component));
    },

    showModal: (component) => {
        dispatch(showModal(component));
    },

    getSellPosts: () => {
        dispatch(getSellPosts());
    },

    getMoreSellPosts: (url) => {
        dispatch(getMoreSellPosts(url));
    },

    getAdoptPosts: () => {
        dispatch(getAdoptPosts());
    },

    getMoreAdoptPosts: (url) => {
        dispatch(getMoreAdoptPosts(url));
    },

    getMatePosts: () => {
        dispatch(getMatePosts());
    },

    getMoreMatePosts: (url) => {
        dispatch(getMoreMatePosts(url));
    },

    getLostPosts: () => {
        dispatch(getLostPosts());
    },

    getMoreLostPosts: (url) => {
        dispatch(getMoreLostPosts(url));
    },

    getProductPosts: () => {
        dispatch(getProductPosts());
    },

    getMoreProductPosts: (url) => {
        dispatch(getMoreProductPosts(url));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(AllPostsContainer);
