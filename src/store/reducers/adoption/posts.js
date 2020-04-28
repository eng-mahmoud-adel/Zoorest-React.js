import {HOMEPAGE_RECENT_POSTS} from '../../actions/pages';
import {
    GET_ADOPT_POSTS,
    GET_LOST_POSTS,
    GET_MATE_POSTS,
    GET_MORE_ADOPT_POSTS,
    GET_MORE_LOST_POSTS,
    GET_MORE_MATE_POSTS,
    GET_MORE_PRODUCT_POSTS,
    GET_MORE_SELL_POSTS,
    GET_PRODUCT_POSTS,
    GET_SELL_POSTS
} from '../../actions/posts';
import Post from "../../../model/Post";
import ModelPaginatedResource from "../../../model/ModelPaginatedResource";

const initialState = {
    sell: new ModelPaginatedResource(),
    adopt: new ModelPaginatedResource(),
    mate: new ModelPaginatedResource(),
    lost: new ModelPaginatedResource(),
    product: new ModelPaginatedResource(),
    // all: new ModelPaginatedResource(),
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_RECENT_POSTS:
            return {
                ...state,
                sell: new ModelPaginatedResource({data: action.payload.sell.map(item => new Post(item))}),
                adopt: new ModelPaginatedResource({data: action.payload.adopt.map(item => new Post(item))}),
                mate: new ModelPaginatedResource({data: action.payload.mate.map(item => new Post(item))}),
                lost: new ModelPaginatedResource({data: action.payload.lost.map(item => new Post(item))}),
                product: new ModelPaginatedResource({data: action.payload.product.map(item => new Post(item))}),
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
                    data: state.sell.data.concat(action.payload.data.map(item => new Post(item))),
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
                    data: state.adopt.data.concat(action.payload.data.map(item => new Post(item))),
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
                    data: state.mate.data.concat(action.payload.data.map(item => new Post(item))),
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
                    data: state.lost.data.concat(action.payload.data.map(item => new Post(item))),
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
                    data: state.product.data.concat(action.payload.data.map(item => new Post(item))),
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
