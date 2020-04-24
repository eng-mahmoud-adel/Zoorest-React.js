import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';

import Tag from "../Tags/Tag";
import LazyLoad from 'react-lazyload';
import InfiniteScroll from "react-infinite-scroll-component";

const LazyList = props => {

    const RenderItem = props.component;
    const itemCols = props.itemCols;
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
            style={{overflow: "none"}}

            dataLength={data.length} //This is important field to render the next data
            next={fetchMore}
            hasMore={hasMore}

            refreshFunction={refresh}
            loader={<h4>Getting More Loading...</h4>}
            pullDownToRefreshThreshold={100}>

            <div className="row">
                {data.map((item) => (
                    <div className={`${itemCols} my-1`} key={props.component.name + "_" + item.id}>
                        <LazyLoad unmountIfInvisible={true} once={true}
                                  placeholder={<h5 className="lazy loading">loading...</h5>}>
                            <RenderItem model={item} tag={Tag}/>
                        </LazyLoad>
                    </div>
                ))}
            </div>

        </InfiniteScroll>
    );
};

LazyList.propTypes = {
    data: PropTypes.object.isRequired,
    itemCols: PropTypes.object.isRequired,
    emptyMessage: PropTypes.string,
    // component: PropTypes.node.isRequired,
};
LazyList.defaultProps = {
    itemCols: "col-12"
}

export default LazyList;
