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


const SingleArticleContainer = (props) => {

    const {stateData, getSingleArticle, match, getArticleComments, getMoreArticleComments, authUser, showModal, currentLocale} = props;
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
        <div className="row container mx-auto mt-5 py-5">
            <div className="col-md-9">
                {stateData.loading === true && <ArticleDetails model={stateData.model} currentLocale={currentLocale}/>}

                <h5 className="my-4 font-weight-bold">{stateData.model.comments_count} Comments</h5>

                <LeaveCommentForm onSubmit={handleCommentSubmitted}/>


                <div className="">
                    {stateData.loadingComments === true ?
                        <LazyList
                            data={stateData.comments}
                            component={Comment}
                            placeholderComponent={Comment}
                            fetchMoreData={getMoreArticleComments}
                            refresh={getArticleComments}
                        /> : <h2>No Comments</h2>}
                </div>

            </div>

            <div className= "col-md-3">
                <div className="row mb-3 d-none d-lg-block">

                    <RelatedArticles/>

                    <TopArticles/>

                    <BillBoard/>
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
