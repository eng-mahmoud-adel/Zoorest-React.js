import React, {useState} from 'react';
import {connect} from 'react-redux';
import ProfileAvatar from "../../components/Avatars/ProfileAvatar";

import {Tab, Tabs} from 'react-bootstrap';

const User = ({stateData}) => {

    const [key, setKey] = useState('photos-albums');

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="provider-image col-xl-2 col-md-3 col-sm-3 col-12">
                    <ProfileAvatar model={stateData.model} withName={false} withJoiningDate={false}/>
                </div>

                <div>
                    <h2 className="mt-xl-0 mt-lg-2">
                        <h2>{stateData.model.name}</h2>
                    </h2>
                    <h2 className="mt-xl-0 mt-lg-2">
                        <h5 className="font-regular">{stateData.model.created_at}</h5>
                    </h2>
                    <h2 className="mt-xl-0 mt-lg-2">
                        <h5 className="font-regular">{stateData.model.description}</h5>
                    </h2>
                </div>

                <Tabs
                    className="my-5"
                    id="user-profile"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="photos-albums" title="photos & albums">

                    </Tab>
                    <Tab eventKey="animals" title="Animals">

                    </Tab>
                    <Tab eventKey="reminder" title="Reminder">

                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stateData: state.singleProviderPage
})

export default connect(mapStateToProps)(User);
