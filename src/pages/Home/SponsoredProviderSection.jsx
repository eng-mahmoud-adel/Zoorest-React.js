import React from 'react'
import SmallButton from '../../components/Buttons/SmallButtons/SmallButton';
import Provider from '../../components/Cards/Profiles/Provider';

const SponsoredProviderSection = (props) => {
    return (
        <div className= "row">
            <div className= "col-md-5">
                <h1 className= "title mb-5 font-weight-bold">Find the Nearest Doctor for your Pets in Seconds</h1>
                <div className= "wrapper">
                    <h3 className= "font-weight-bold">Book your appointment now through our website</h3>
                    <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are</p>
                </div>
                <div className= "wrapper">
                    <h3 className= "font-weight-bold">Find out about the nearest clinics and see their evaluation before you visit</h3>
                    <p>Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are</p>
                </div>
                <div className= "w-50">
                    <SmallButton text= "Find the Nearest Doctors Now" color= "btn btn-info" size= "btn-sm" />
                </div>
            </div>
            <div className= "col-md-7 section-two">
                <div className= "row">

                    {props.providers && props.providers.map((provider,index)=>(
                        <div className= "col-md-6 mb-3" key={index}>
                            <Provider provider={provider} className= "card-twelve shadow-lg" cardTitle= "Helen Figueroa" cardText= "Here, I focus on a range of items and features that we use in life without giving them" icon= "fa fa-eye" number= "2312 Views" />
                        </div>
                    )) }


                </div>
            </div>
        </div>
    );
};

export default SponsoredProviderSection;
