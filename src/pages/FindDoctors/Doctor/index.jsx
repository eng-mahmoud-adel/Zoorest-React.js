import React, { useState } from 'react';
import { connect } from 'react-redux';
import Info from './Info';
import Questions from './Questions';
import Articles from './Articles';
import { Tab, Tabs } from 'react-bootstrap';
import Avatar from '../../../components/Avatars/Avatar';
import RateBar from '../../../components';

const DoctorProfile = (props) => {
    const {provider}= props;
    const [key, setKey] = useState('doctor-information');
    const id= props.match.params.id;

    return (
        <div className= "container profile my-5 pt-5">
            {provider.map(provider => provider.id == id ? <div className= "row">
                <div className= "col-md-1">
                    <Avatar className= "avatar-four" image= {provider.image} radius={70} />
                </div>
                
                <div className= "col-md-11">
                    <h2>{provider ? provider.name : "DR.Leo Nash"}</h2>

                    <div className= "d-flex">
                        <div>
                            <RateBar rate= "3" />
                        </div>
                        <div className= "views ml-5">
                            <i className="fa fa-eye icon-two mr-2" aria-hidden="true"></i>
                            <span>{provider ? provider.account_views + "Views" : 0}</span>
                        </div>
                    </div>

                    <div className= "d-flex">
                        <div className= "contact">
                            <i className="fa fa-phone fa-lg mr-2" aria-hidden="true"></i>
                            <span>{provider ? provider.phone : "010"}</span>
                        </div>
                        <div className= "contact ml-5">
                            <i className="fa fa-phone fa-lg mr-2" aria-hidden="true"></i>
                            <span>{provider ? provider.phone : "010"}</span>
                        </div>
                    </div>

                    <div className= "address mt-2">
                        {provider ? <span>{provider.provider_data.address}</span> : null} | <a href= {provider ? `https://www.google.com/maps/@${provider.provider_data.geo_lat},${provider.provider_data.geo_lng},15z` : "#"} className= "font-weight-bold" target= "_blank">Show on Maps</a>
                    </div>

                </div>
            </div> : null)}
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
