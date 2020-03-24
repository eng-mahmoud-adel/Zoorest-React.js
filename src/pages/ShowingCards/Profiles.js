import React from 'react';
import Profile from '../../components/Cards/Profiles/Profile';

const Profiles = () => {
    return (
        <div>
            <div className= "container mt-5">
                <div className= "row">
                    <div className= "col-md-4">
                        <Profile className= "card-twelve" cardTitle= "Helen Figueroa" cardText= "Here, I focus on a range of items and features that we use in life without giving them" icon= "fa fa-eye" number= "2312 Views" />
                    </div>
                    <div className= "col-md-4">
                        <Profile className= "card-twelve" cardTitle= "Helen Figueroa" cardText= "Here, I focus on a range of items and features that we use in life without giving them" icon= "fa fa-eye" number= "2312 Views" />
                    </div>
                    <div className= "col-md-4">
                        <Profile className= "card-twelve" cardTitle= "Helen Figueroa" cardText= "Here, I focus on a range of items and features that we use in life without giving them" icon= "fa fa-eye" number= "2312 Views" />
                    </div>
                    <div className= "col-md-4">
                        <Profile className= "card-twelve" cardTitle= "Helen Figueroa" cardText= "Here, I focus on a range of items and features that we use in life without giving them" icon= "fa fa-eye" number= "2312 Views" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles;
