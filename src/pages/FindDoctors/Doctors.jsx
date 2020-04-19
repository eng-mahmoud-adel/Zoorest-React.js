import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import LazyList from "../../components/DataList";
import Provider from '../../components/Cards/Profiles/Provider';
import CheckBox from '../../components/Buttons/CheckBoxes/CheckBox';
import BasicInput from '../../components/Inputs/BasicInput';
import BillBoard from '../../components/Cards/BillBoard/BillBoard';
import {showModal} from "../../store/actions/modal";
import {getProviders, getMoreProviders} from '../../store/actions/providers';

const Doctors = (props) => {
    const {providers, getProviders, getMoreProviders}= props;

    useEffect(() => {
        getProviders();
        getMoreProviders();
    }, [getProviders, getMoreProviders]);

    return (
        <div className= "container mt-5">
            <section className= "title">
                <h1 className= "font-weight-bold">Doctors and Clinics</h1>
                <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction.</p>
            </section>

            <section className= "pro-doctors">
                <div className= "mb-3">(213) Doctor</div>
                <div className= "row mb-3">
                    <div className= "col-lg-2 col-md-3 mb-3 mb-lg-0">
                        <span>Country:</span>
                    </div>
                    <div className= "col-lg-2 col-md-3 mb-3 mb-lg-0">
                        <span>Governrate:</span>
                    </div>
                    <div className= "col-lg-2 col-md-3 mb-3 mb-lg-0">
                        <span>Rating:</span>
                    </div>
                    <div className= "col-lg-3 col-sm-6 col-8 mb-3 mb-lg-0">
                        <CheckBox text= "Show only nearby doctors" id= "customCheck1" />
                    </div>
                    <div className= "col-lg-3 col-sm-6 col-8">
                        <BasicInput className= "basic-input" type= "text" right_icon= "fa fa-search fa-lg" placeholder= "Start searching for anything" />
                    </div>
                </div>
                <div className="row">
                    {/* {providers && providers.map((provider, index) => (
                        <div className="col-lg-4 col-md-6 mb-3 mb-lg-0" key={index}>
                            <Provider provider={provider} showModal={props.showModal} className="shadow-lg" cardTitle="Helen Figueroa"
                                cardText="Here, I focus on a range of items and features that we use in life without giving them"
                                icon="fa fa-eye" number="2312 Views"/>
                        </div>
                    ))} */}
                    <LazyList
                        data={providers}
                        loadMoreMessage={"Load More Questions"}
                        component={Provider}
                        placeholderComponent={Provider}
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
                    />                    
                </div>
            </section>

            <section className= "col-md-10 mx-auto my-5">
                <BillBoard />
            </section>

            <section className= "normal-doctors">
                <div className="row">
                    {/* {providers && providers.map((provider, index) => (
                        <div className="col-lg-4 col-md-6 mb-3 mb-lg-0" key={index}>
                            <Provider provider={provider} showModal={props.showModal} className="shadow-lg my-3" cardTitle="Helen Figueroa"
                                cardText="Here, I focus on a range of items and features that we use in life without giving them"
                                icon="fa fa-eye" number="2312 Views"/>
                        </div>
                    ))} */}
                    <LazyList
                        data={providers}
                        loadMoreMessage={"Load More Questions"}
                        component={Provider}
                        placeholderComponent={Provider}
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
                    />  
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    providers: state.providers.sponsored
});

const mapDispatchToProps = (dispatch) => ({
    
    showModal: (component) => {
        dispatch(showModal(component));
    },

    getProviders: () => {
        dispatch(getProviders());
    },

    getMoreProviders: (url) => {
        dispatch(getMoreProviders(url));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
