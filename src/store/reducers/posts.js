import {dummyPosts} from "../DummyData/posts";
import {RECENT_POSTS} from '../actions/home';
import Post from "../../model/Post";

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
        case RECENT_POSTS:
            return {
                ...state,
                sell: action.payload.sell.map(item => new Post(item)),
                adopt: action.payload.adopt.map(item => new Post(item)),
                mate: action.payload.mate.map(item => new Post(item)),
                lost: action.payload.lost.map(item => new Post(item)),
                product: action.payload.product.map(item => new Post(item)),
            }

        default:
            break;
    }

    return state;
};

export default postsReducer
