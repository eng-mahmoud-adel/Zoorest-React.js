import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

import Tag from "../Tags/Tag";
import Button from "../Buttons/Button/Button";

const LazyList = ({
                      data,
                      emptyMessage = "No Data",
                      loadMoreMessage = "Load More",
                      component
                  }) => {

    const RenderItem = component;
    const items = data;
    return (
        <Fragment>
            {(items && items.length > 0) ?
                items.map((item, index) => (
                    <RenderItem key={index} model={item} tag={Tag}/>
                )) :

                //if there are no data, render empty Message prop
                //todo stylize message
                <h4>{emptyMessage}</h4>}

            {/* show load more button if there is more data to load*/}
            {/*todo implement show/hide button functionality*/}

            {items && items.length > 0 && <div className="row mt-4">
                <div className="col-6 mx-auto">
                    <Button
                        text={loadMoreMessage}
                        className={"w-50"}
                        variant={"light"}
                        onClick={() => {
                            /*todo implement load more*/
                        }}
                        size={"lg"}/>

                </div>
            </div>
            }
        </Fragment>
    );
};

LazyList.propTypes = {
    data: PropTypes.array.isRequired,
    emptyMessage: PropTypes.string,
    component: PropTypes.object.isRequired,
};

export default LazyList;
