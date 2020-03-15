import React from 'react';
import Avatar from '../../components/Avatars/Avatar';
import image from "../../images/placeholders/100X100.png";

function RenderAvatar() {
    return (
        <div>
            <hr />
            <h1>Avatars</h1>
            <hr />
            <div className= "row">
                <div className= "col-1">
                    <Avatar className= "avatar-one" text= "MA" />
                </div>
                <div className= "col-1">
                    <Avatar className= "avatar-two" text= "MA" />
                </div>
                <div className= "col-1">
                    <Avatar className= "avatar-three" text= "MA" />
                </div>
                <div className= " offset-2 col-3">
                    <Avatar className= "avatar-four" name= "Ashton Martin" image= {image} />
                </div>
                <div className= "col-3">
                    <Avatar className= "avatar-four" name= "Terry Williams" span= "Manager" image= {image} />
                </div>
            </div>
            
        </div>
    )
}

export default RenderAvatar;
