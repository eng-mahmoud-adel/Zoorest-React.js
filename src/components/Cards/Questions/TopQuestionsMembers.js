import React, {Fragment} from 'react';
import Avatar from '../../Avatars/Avatar';


const TopQuestionsMembers = ({className}) => {
    return (
        <div className={`top-membes-card card ${className || ""}`}>
            <h5 className="card-title">Top Members</h5>
            <Fragment>
                <div className="pb-4"><Avatar className="avatar-two" text="MA" name="Terry Williams" span="Manager"/>
                </div>
                <div className="pb-4"><Avatar className="avatar-two" text="MA" name="Terry Williams" span="Manager"/>
                </div>
                <div className="pb-4"><Avatar className="avatar-two" text="MA" name="Terry Williams" span="Manager"/>
                </div>
                <div className="pb-4"><Avatar className="avatar-two" text="MA" name="Terry Williams" span="Manager"/>
                </div>
            </Fragment>
        </div>
    )
}

export default TopQuestionsMembers;
