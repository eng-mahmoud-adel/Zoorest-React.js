import React from 'react'
import Button from '../../components/Buttons/Button/Button';
import Provider from '../../components/Cards/Profiles/Provider';
import { Link } from 'react-router-dom';

const SponsoredProviderSection = (props) => {
    return (
        <div className="row p-3">
            <div className="col-lg-5 mb-4 mb-md-4">
                <h1 className="title mb-5 mt-0 font-weight-bold">Find the Nearest Doctor for your Pets in Seconds</h1>
                <div className="wrapper mb-4">
                    <h3 className="font-weight-bold">Book your appointment now through our website</h3>
                    <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal
                        rights are</p>
                </div>
                <div className="wrapper mb-4">
                    <h3 className="font-weight-bold">Find out about the nearest clinics and see their evaluation before
                        you visit</h3>
                    <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal
                        rights are</p>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-5 col-sm-6 pl-0">
                    <Link to= "/doctor"><Button text="Find the Nearest Doctors Now" color="btn btn-info" size="btn-sm"/></Link>
                </div>
            </div>
            <div className="col-lg-7 section-two">
                <div className="row">

                    {props.providers && props.providers.map((provider, index) => (
                        <div className="col-md-6 col-sm-12 mt-sm-4" key={index}>
                            <Provider provider={provider} className="shadow-lg" cardTitle="Helen Figueroa"
                                      cardText="Here, I focus on a range of items and features that we use in life without giving them"
                                      icon="fa fa-eye" number="2312 Views"/>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default SponsoredProviderSection;
