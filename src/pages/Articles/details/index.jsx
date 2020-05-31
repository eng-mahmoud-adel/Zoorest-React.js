import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ArticleDetails, {ArticleDetailsLoadingAnimation} from '../../../components/Cards/Articles/ArticleDetails';
import LeaveCommentForm from "../../../components/Cards/Comments/LeaveComment";
import LazyList from "../../../components/DataList";
import Comment, {CommentLoadingAnimation} from "../../../components/Cards/Comments/Comment";
import {showModal} from "../../../store/actions/modal";
import LoginForm from "../../../components/Forms/Auth/LoginForm";
import {
    addComment,
    getArticleComments,
    getMoreArticleComments,
    getSingleArticle,
    likeArticle,
    shareArticle,
    unlikeArticle,
    viewArticle
} from '../../../store/actions/articles';
import RelatedArticles from "../../../components/Cards/Articles/RelatedArticles";
import TopArticles from "../../../components/Cards/Articles/TopArticles";
import {Helmet} from "react-helmet";


const SingleArticleContainer = ({
                                    stateData, getSingleArticle, match,
                                    getArticleComments, getMoreArticleComments, authUser,
                                    showModal, currentLocale = "ar", like, unlike, share, view,
                                    leaveComment
                                }) => {

    const {id} = match.params;

    useEffect(() => {
        getSingleArticle(id);

        //prevent submitting view if id is null
        if (null !== id) {
            view(id);
        }
        getArticleComments(id);
    }, [view, getSingleArticle, getArticleComments, getMoreArticleComments, id]);

    const handleCommentSubmitted = (values, {setSubmitting}) => {
        console.log(authUser);
        if ("undefined" === typeof authUser.accessToken || null === authUser.accessToken) {

            setSubmitting(false)
            showModal(LoginForm);

        } else {

            leaveComment(id, values, () => {
                setSubmitting(false)
            });

        }

    };

    const handleShare = () => {
        console.log("sharing")
        share(id)
    }
    const handleLike = (is_liked, setIsLiked) => {
        if (is_liked) {
            unlike(id);
        } else {
            like(id);
        }
    }

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

            <div className="col-md-9 px-4">
                {
                    stateData.loading === true ?
                        <ArticleDetails model={stateData.model}
                                        currentLocale={currentLocale}
                                        handleShare={handleShare}
                                        handleLike={handleLike}
                        /> :
                        <ArticleDetailsLoadingAnimation/>
                }

                <h5 className="my-4 font-weight-bold">{stateData.model.comments_count} Comments</h5>

                <LeaveCommentForm onSubmit={handleCommentSubmitted}/>


                <div className="mt-4">
                    {stateData.loadingComments === true ?
                        <LazyList
                            data={stateData.comments}
                            itemCols="col-12"
                            component={Comment}
                            placeholderComponent={CommentLoadingAnimation}
                            fetchMoreData={getMoreArticleComments}
                            refresh={getArticleComments}
                        /> : <CommentLoadingAnimation/>}
                </div>

            </div>

            <div className="col-md-3 px-3">
                <div className="row mb-3 d-none d-lg-block">

                    <div className="row px-2">
                        <RelatedArticles/>
                    </div>
                    <div className="row py-1 px-2">
                        <TopArticles/>
                    </div>

                    {/*todo add ads here*/}
                    {/*<div className="row py-1 px-2">*/}
                    {/*    <BillBoard/>*/}

                    {/*</div>*/}
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

    view: (id) => {
        dispatch(viewArticle(id));
    },

    share: (id) => {
        dispatch(shareArticle(id));
    },

    like: (id) => {
        dispatch(likeArticle(id));
    },
    unlike: (id) => {
        dispatch(unlikeArticle(id));
    },

    leaveComment: (article_id, data, callback) => {
        dispatch(addComment(article_id, data, callback));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer);
