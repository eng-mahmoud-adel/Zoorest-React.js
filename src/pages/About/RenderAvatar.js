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
                    <AvatarTwo className= "avatar-one" text= "MA" />
                </div>
                <div className= "col-1">
                    <AvatarTwo className= "avatar-two" text= "MA" />
                </div>
                <div className= "col-1">
                    <AvatarTwo className= "avatar-three" text= "MA" />
                </div>
                <div className= " offset-2 col-3">
                    <AvatarTwo className= "avatar-four" name = "Ashton Martin" image= "../../images/placeholders/100X100.png" />
                </div>
                <div className= "col-3">
                    <AvatarTwo className= "avatar-four" name = "Terry Williams" span= "Manager" image= "../../images/placeholders/100X100.png" />
                </div>
            </div>
            
        </div>
    )
}

export default RenderAvatar;
