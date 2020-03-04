import React from 'react';
import Size from '../../components/Buttons/CombinedButtons/Size';
import SocialBtn from '../../components/Buttons/CombinedButtons/SocialBtn';

function RenderCombinedButtons() {
    return (
        <div>
            <hr />
                <h1 className= "font-weight-bold">Combined Buttons</h1>
                <hr />
                <div className="row">
                    <div className= "col-4 mb-2">
                        <Size size= "btn-group-lg" textOne= "S" textTwo= "M" textThree= "L" />
                    </div>
                    <div className= "col-6">
                        <Size size= "btn-group-sm" textOne= "S" textTwo= "M" textThree= "L" />
                    </div>
                    <div className= "col-4">
                        <Size size= "btn-group-lg mb-4" textOne= "Daily" textTwo= "Monthly" textThree= "Yearly" />
                    </div>
                    <div className= "col-6">
                        <Size size= "btn-group-sm" textOne= "Daily" textTwo= "Monthly" textThree= "Yearly" />
                    </div>
                    <div className= "col-3">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text = "Login with Facebook" social_icon= "fa fa-facebook-official fa-lg" />
                    </div>
                    <div className= "col-3">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text = "Login with Google" social_icon= "fa fa-google fa-lg" />
                    </div>
                    <div className= "col-3">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text = "Login with Instagram" social_icon= "fa fa-instagram fa-lg" />
                    </div>
                    <div className= "col-3">
                        <SocialBtn size= "btn-sm" color= "btn btn-light" text = "Login with Twitter" social_icon= "fa fa-twitter fa-lg" />
                    </div>
                </div>
        </div>
    )
}

export default RenderCombinedButtons;
