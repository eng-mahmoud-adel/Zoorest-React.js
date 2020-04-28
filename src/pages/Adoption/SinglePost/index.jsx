import React, {useEffect} from 'react';
import {connect} from "react-redux";
import LeaveCommentForm from "../../../components/Cards/Comments/LeaveComment";
import LazyList from "../../../components/DataList";
import Comment from "../../../components/Cards/Comments/Comment";
import LoginForm from "../../../components/Forms/Auth/LoginForm";
import {getMorePostComments, getPostComments, getSinglePost} from '../../../store/actions/posts';
import SinglePost from '../../../components/Cards/Posts/SinglePost';
import {showModal} from "../../../store/actions/modal";
import RelatedPosts from '../../../components/Cards/Posts/RelatedPosts';

const SinglePostContainer = ({stateData, getSinglePost, match, getPostComments, getMorePostComments, authUser, showModal, currentLocale}) => {

    const {id} = match.params;

    useEffect(() => {
        getSinglePost(id);
        getPostComments(id);
    }, [getSinglePost, getPostComments, getMorePostComments, id]);

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
                {stateData.loading === false && <SinglePost model={stateData.model} currentLocale={currentLocale}/>}

                <h5 className="my-4 font-weight-bold">{stateData.model.comments_count} Comments</h5>

                <LeaveCommentForm onSubmit={handleCommentSubmitted}/>


                <div className="">
                    {!stateData.loadingComments ?
                        <LazyList
                            data={stateData.comments}
                            component={Comment}
                            placeholderComponent={Comment}
                            fetchMoreData={getMorePostComments}
                            refresh={getPostComments}
                        /> : <h2>No Comments</h2>}
                </div>

            </div>

            <div className= "col-md-3">
                <div className="row mb-3 d-none d-lg-block">

                    <RelatedPosts/>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stateData: state.singlePostReducer,
    authUser: state.authUser,
    currentLocale: state.i18n.value,
})

const mapDispatchToProps = (dispatch) => ({
    getSinglePost: (id) => {
        dispatch(getSinglePost(id));
    },

    getPostComments: (id) => {
        dispatch(getPostComments(id));
    },

    getMorePostComments: (url) => {
        dispatch(getMorePostComments(url));
    },

    showModal: (component) => {
        dispatch(showModal(component));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);

