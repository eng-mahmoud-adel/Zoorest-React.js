import React, {useState} from 'react';
import {connect} from 'react-redux';
import Info from './Info';
import {Tab, Tabs} from 'react-bootstrap';
import Avatar from '../../../components/Avatars/Avatar';
import RateBar from '../../../components';
import {CallIcon, ViewsIcon} from "../../../components/Icons";

const DoctorProfile = (props) => {
    const {provider} = props;
    const [key, setKey] = useState('doctor-information');
    const id = props.match.params.id;

    return (
        <div className="container profile my-5 pt-5">
            {provider.map(provider => provider.id === id ? <div className= "row" key= {provider.id}>
                <div className= "provider-image col-xl-2 col-md-3 col-sm-3 col-12">
                    <Avatar className="avatar-four" image={provider.image} radius={70}/>
                </div>

                <div className= "col-xl-10 col-md-9 col-sm-9 col-12">
                    <h2 className= "mt-xl-0 mt-lg-2">{provider ? provider.name : "DR.Leo Nash"}</h2>

                    <div className="d-flex">
                        <div>
                            <RateBar rate="3"/>
                        </div>
                        <div className="views ml-5">
                            <ViewsIcon
                                text={"Views"}
                                className={"mr-2"}
                                value={provider ? provider.account_views : 0}/>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="contact">
                            <CallIcon className={"mr-2"} value={provider ? provider.phone : ""}/>
                        </div>
                        <div className="contact ml-5">
                            <CallIcon className={"mr-2"} value={provider ? provider.phone : ""}/>
                        </div>
                    </div>

                    <div className="address mt-2">
                        {provider ? <span>{provider.provider_data.address}</span> : null} | <a
                        href={provider ? `https://www.google.com/maps/@${provider.provider_data.geo_lat},${provider.provider_data.geo_lng},15z` : "#"}
                        className="font-weight-bold" target="_blank" rel="noopener noreferrer">Show on Maps</a>
                    </div>

                </div>
            </div> : null)}
            <Tabs
                className="my-5"
                id="doctor-profile"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="doctor-information" title="Doctor Information">
                    <Info provider={provider} id={id}/>
                </Tab>
                <Tab eventKey="recent-questions" title="Recent Questions">
                    {/* <LazyList
                        data={provider.all}
                        itemCols={"col-4"}
                        loadMoreMessage={"Load More Questions"}
                        component={Question}
                        placeholderComponent={Question}
                        fetchMoreData={getMoreProviders}
                        refresh={getProviders}
                        endMessage={
                            <p style={{textAlign: 'center'}}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        pullDownToRefresh
                        pullDownToRefreshContent={
                            <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                        }
                        releaseToRefreshContent={
                            <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                        }
                        /> */}
                </Tab>
                <Tab eventKey="doctor-articles" title="Doctor's Articles">
                    {/* <Articles id={id}/> */}
                </Tab>
            </Tabs>
        </div>
    )
}

const mapStateToProps = (state) => ({
    provider: state.providers.all
})

export default connect(mapStateToProps)(DoctorProfile);
