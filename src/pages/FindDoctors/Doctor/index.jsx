import React, { useState } from 'react';
import { connect } from 'react-redux';
import Info from './Info';
import Questions from './Questions';
import Articles from './Articles';
import { Tab, Tabs } from 'react-bootstrap';

const DoctorProfile = (props) => {
    const {provider}= props;
    const [key, setKey] = useState('doctor-information');
    const id= props.match.params.id;

    return (
        <div className= "container">
            <div>Hello</div>
            <Tabs
                className= "my-5"
                id="doctor-profile"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab eventKey="doctor-information" title="Doctor Information">
                    <Info provider= {provider} id= {id} />
                </Tab>
                <Tab eventKey="recent-questions" title="Recent Questions">
                    <Questions id= {id} />
                </Tab>
                <Tab eventKey="doctor-articles" title="Doctor's Articles">
                    <Articles id= {id} />
                </Tab>
            </Tabs>
        </div>
    )
}

const mapStateToProps = (state) => ({
    provider: state.providers.all
})

export default connect(mapStateToProps)(DoctorProfile);
