import React, {useEffect, useReducer, useState} from 'react'
import PropTypes from 'prop-types';

import Tag from "../Tags/Tag";
import LazyLoad from 'react-lazyload';
import InfiniteScroll from "react-infinite-scroll-component";

const LazyList = props => {

    const RenderItem = props.component;
    // const RenderItemPlaceholder = props.placeholderComponent;
    const {data, links} = props.data;
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        if(links){
            setHasMore(links.hasMoreData());
        }
    }, [links]);

    const fetchMore = () => {
        console.log("fetchMore");
        //dispatch a load more action that fetches new items and  appends to ro previous state
        if (props.fetchMoreData)
            props.fetchMoreData(links.getNextLink());
    };

    const refresh = () => {
        console.log("refreshing");
        //dispatch a refresh action that clears the items and re-fetches them
        if (props.refresh)
            props.refresh();
    };

    return (
        <InfiniteScroll
            {...props}
            dataLength={data.length} //This is important field to render the next data
            next={fetchMore}
            hasMore={hasMore}

            refreshFunction={refresh}
            loader={<h4>Getting More Loading...</h4>}
            pullDownToRefreshThreshold={100}>

            {data.map((item) => (
                <LazyLoad key={props.component.name + "_" + item.id} unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <RenderItem model={item} tag={Tag}/>
                </LazyLoad>
            ))}

        </InfiniteScroll>
    );
};

LazyList.propTypes = {
    data: PropTypes.object.isRequired,
    emptyMessage: PropTypes.string,
    // component: PropTypes.node.isRequired,
};

export default LazyList;
