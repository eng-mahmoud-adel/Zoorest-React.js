import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ArticleDetails from '../../../components/Cards/Articles/ArticleDetails';
import LeaveCommentForm from "../../../components/Cards/Comments/LeaveComment";
import LazyList from "../../../components/DataList";
import Comment from "../../../components/Cards/Comments/Comment";
import {showModal} from "../../../store/actions/modal";
import LoginForm from "../../../components/Forms/Auth/LoginForm";
import {getArticleComments, getMoreArticleComments, getSingleArticle} from '../../../store/actions/articles';
import BillBoard from '../../../components/Cards/BillBoard/BillBoard';
import RelatedArticles from "../../../components/Cards/Articles/RelatedArticles";
import TopArticles from "../../../components/Cards/Articles/TopArticles";
import {Helmet} from "react-helmet";


const SingleArticleContainer = ({stateData, getSingleArticle, match, getArticleComments, getMoreArticleComments, authUser, showModal, currentLocale}) => {

    const {id} = match.params;

    useEffect(() => {
        getSingleArticle(id);
        getArticleComments(id);
    }, [getSingleArticle, getArticleComments, getMoreArticleComments, id]);

    const handleCommentSubmitted = (values, {setSubmitting}) => {
        console.log(authUser);
        if ("undefined" === typeof authUser.accessToken) {

            setSubmitting(false)
            showModal(LoginForm);

        } else {

            LeaveCommentForm(id, values, () => {
                setSubmitting(false)
            });

        }

    };

    return (
        <div className="row container mx-auto mt-5 pb-5">
            <Helmet>
                <title>{stateData.model.getLocalizedTitle(currentLocale)}</title>

                <meta content={stateData.model.getLocalizedTitle(currentLocale)} property="og:site_name"/>
                <meta content={window.location.href} property="og:url"/>

                <meta property="og:title" content={stateData.model.getLocalizedTitle(currentLocale)}/>
                <meta name="description" content={stateData.model.getLocalizedTitle(currentLocale)}/>
                <meta name="og:description" content={stateData.model.getLocalizedTitle(currentLocale)}/>

                <link itemProp="thumbnailUrl"
                      href={stateData.model.getImageForSeo()}/>

                <meta content={stateData.model.getImageForSeo()}
                      property="og:image"/>

                <meta content={stateData.model.getImageForSeo()}
                      property="og:image:secure_url"/>

                <meta property="og:updated_time" content={stateData.model.updated_at}/>
            </Helmet>

            <div className="col-md-9">
                {stateData.loading === true && <ArticleDetails model={stateData.model} currentLocale={currentLocale}/>}

                <h5 className="my-4 font-weight-bold">{stateData.model.comments_count} Comments</h5>

                <LeaveCommentForm onSubmit={handleCommentSubmitted}/>


                <div className="">
                    {stateData.loadingComments === true ?
                        <LazyList
                            data={stateData.comments}
                            itemCols="col-12"
                            component={Comment}
                            placeholderComponent={Comment}
                            fetchMoreData={getMoreArticleComments}
                            refresh={getArticleComments}
                        /> : <h2>No Comments</h2>}
                </div>

            </div>

            <div className= "col-md-3">
                <div className="row mb-3 d-none d-lg-block">

                    <div className="row px-2">
                        <RelatedArticles/>
                    </div>
                    <div className="row py-1 px-2">
                        <TopArticles/>
                    </div>

                    <div className="row py-1 px-2">
                        <BillBoard/>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stateData: state.singleArticlePage,
    authUser: state.authUser,
    currentLocale: state.i18n.value,
})

const mapDispatchToProps = (dispatch) => ({
    getSingleArticle: (id) => {
        dispatch(getSingleArticle(id));
    },

    getArticleComments: (id) => {
        dispatch(getArticleComments(id));
    },

    getMoreArticleComments: (url) => {
        dispatch(getMoreArticleComments(url));
    },

    showModal: (component) => {
        dispatch(showModal(component));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer);
