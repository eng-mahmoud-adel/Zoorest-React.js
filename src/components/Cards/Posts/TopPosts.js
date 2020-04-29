import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getTopPosts} from "../../../store/actions/posts";
import ProfileAvatar from "../../Avatars/ProfileAvatar";

const TopPosts = ({className, getTopPosts, top_posts}) => {

    useEffect(() => {
        getTopPosts()
    }, [getTopPosts]);

    return (
        <Fragment>
            {top_posts.data.length > 0 && <div className={`top-membes-card card ${className || ""}`}>
                <h5 className="card-title">More By</h5>
                <div className="card-body">
                    {
                        top_posts.data.map(post => <div key={"top_question" + post.getKey()} className="card-text">
                            <Link to={`/post/${post.getKey()}`}>{post.getLocalizedTitle()}</Link>
                            <ProfileAvatar model={post.user}/>

                        </div>)
                    }
                </div>
            </div>}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    top_posts: state.posts.top,
});

const mapDispatchToProps = dispatch => ({
    getTopPosts: () => {
        dispatch(getTopPosts());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(TopPosts);
