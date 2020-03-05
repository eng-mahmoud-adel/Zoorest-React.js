import React from 'react';
import Tag from '../../components/Tags/Tag';

function RenderTags() {
    return (
        <div>
            <hr />
            <h1>Tags</h1>
            <hr />
            <div className= "row">
                <div className= "col-2">
                    <Tag className= "tag-one" text= "Tag" />
                </div>
                <div className= "col-2">
                    <Tag className= "tag-two" text= "Tag" />
                </div>
            </div>
        </div>
    )
}

export default RenderTags;
