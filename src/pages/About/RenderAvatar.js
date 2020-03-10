import React from 'react';
import AvatarOne from '../../components/Avatars/AvatarOne';
import AvatarTwo from '../../components/Avatars/AvatarTwo';

function RenderAvatar() {
    return (
        <div>
            <hr />
            <h1>Avatars</h1>
            <hr />
            <div className= "row">
                <div className= "col-1">
                    <AvatarOne className= "avatar-one" text= "MA" />
                </div>
                <div className= "col-1">
                    <AvatarOne className= "avatar-two" text= "MA" />
                </div>
                <div className= "col-1">
                    <AvatarOne className= "avatar-three" text= "MA" />
                </div>
                <div className= " offset-2 col-3">
                    <AvatarTwo className= "avatar-four" name = "Ashton Martin" />
                </div>
                <div className= "col-3">
                    <AvatarTwo className= "avatar-four" name = "Terry Williams" span= "Manager" />
                </div>
            </div>
            
        </div>
    )
}

export default RenderAvatar;
