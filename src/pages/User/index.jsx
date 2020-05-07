import React, {useState} from 'react';
import {connect} from 'react-redux';
import ProfileAvatar from "../../components/Avatars/ProfileAvatar";
import {Text18Regular, Text48} from "../../components/UI/Typography";
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
                        <Text48>{stateData.model.name}</Text48>
                    </h2>
                    <h2 className="mt-xl-0 mt-lg-2">
                        <Text18Regular>{stateData.model.created_at}</Text18Regular>
                    </h2>
                    <h2 className="mt-xl-0 mt-lg-2">
                        <Text18Regular>{stateData.model.description}</Text18Regular>
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
