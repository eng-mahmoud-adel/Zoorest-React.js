import {dummyPosts} from "../DummyData/posts";
import {HOMEPAGE_RECENT_POSTS} from '../actions/pages';
import {
    GET_SELL_POSTS, 
    GET_MORE_SELL_POSTS, 
    GET_ADOPT_POSTS,
    GET_MORE_ADOPT_POSTS,
    GET_MATE_POSTS,
    GET_MORE_MATE_POSTS,
    GET_LOST_POSTS,
    GET_MORE_LOST_POSTS,
    GET_PRODUCT_POSTS,
    GET_MORE_PRODUCT_POSTS
} from '../actions/posts';
import Post from "../../model/Post";
import ModelPaginatedResource from "../../model/ModelPaginatedResource";

const initialState = {
    sell: [new Post()],
    adopt: [new Post()],
    mate: [new Post()],
    lost: [new Post()],
    product: [new Post()],
    // all: new ModelPaginatedResource(),
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_RECENT_POSTS:
            return {
                ...state,
                sell: action.payload.sell.map(item => new Post(item)),
                adopt: action.payload.adopt.map(item => new Post(item)),
                mate: action.payload.mate.map(item => new Post(item)),
                lost: action.payload.lost.map(item => new Post(item)),
                product: action.payload.product.map(item => new Post(item)),
            };

        case GET_SELL_POSTS:
            return {
                ...state,
                sell: new ModelPaginatedResource(action.payload)
            };

        case GET_MORE_SELL_POSTS:
            return {
                ...state,
                sell: new ModelPaginatedResource({
                    data: state.sell.concat(action.payload.data.map(item => new Post(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                })
            };

        case GET_ADOPT_POSTS:
            return {
                ...state,
                adopt: new ModelPaginatedResource(action.payload)
            };

        case GET_MORE_ADOPT_POSTS:
            return {
                ...state,
                adopt: new ModelPaginatedResource({
                    data: state.adopt.concat(action.payload.data.map(item => new Post(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                })
            };

        case GET_MATE_POSTS:
            return {
                ...state,
                mate: new ModelPaginatedResource(action.payload)
            };

        case GET_MORE_MATE_POSTS:
            return {
                ...state,
                mate: new ModelPaginatedResource({
                    data: state.mate.concat(action.payload.data.map(item => new Post(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                })
            };

        case GET_LOST_POSTS:
            return {
                ...state,
                lost: new ModelPaginatedResource(action.payload)
            };

        case GET_MORE_LOST_POSTS:
            return {
                ...state,
                lost: new ModelPaginatedResource({
                    data: state.lost.concat(action.payload.data.map(item => new Post(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                })
            };

        case GET_PRODUCT_POSTS:
            return {
                ...state,
                product: new ModelPaginatedResource(action.payload)
            };

        case GET_MORE_PRODUCT_POSTS:
            return {
                ...state,
                product: new ModelPaginatedResource({
                    data: state.product.concat(action.payload.data.map(item => new Post(item))),
                    links: action.payload.links,
                    meta: action.payload.meta,
                })
            };


        default:
            break;
    }

    return state;
};

export default postsReducer;
