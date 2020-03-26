import {dummyPosts} from "../DummyData/posts";

const initialState = {
    sell: dummyPosts.filter(post => post.post_type === "sell"),
    adopt: dummyPosts.filter(post => post.post_type === "adopt"),
    mate: dummyPosts.filter(post => post.post_type === "mate"),
    lost: dummyPosts.filter(post => post.post_type === "lost"),
    product: dummyPosts.filter(post => post.post_type === "product"),
    // all: dummyPosts,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            break;
    }

    return state;
};

export default postsReducer
