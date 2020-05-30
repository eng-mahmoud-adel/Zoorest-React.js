import React from 'react'
import Button from '../../components/Buttons/Button/Button';
import Provider from '../../components/Cards/Profiles/Provider';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

const SponsoredProviderSection = ({providers, section, currentLocale}) => {

    return (
        <div className="row p-3">
            <div className="col-lg-5 mb-4 mb-md-4">
                <h3 className="title mb-5 mt-0">
                    {section.getFiledValueByName("header", currentLocale)}
                </h3>
                <div className="wrapper mb-4">
                    <h6 className="font-black">
                        {section.getFiledValueByName("title", currentLocale)}
                    </h6>
                    <h5 className="font-regular"
                        style={{text: "#778699"}}>{section.getFiledValueByName("description", currentLocale)}</h5>
                </div>
                <div className="wrapper mb-4">
                    <h6 className="font-black">
                        {section.getFiledValueByName("title", currentLocale)}
                    </h6>
                    <h5 className="font-regular"
                        style={{text: "#778699"}}>{section.getFiledValueByName("description", currentLocale)}</h5>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-5 col-sm-6 pl-0">
                    <Link to={section.getFiledValueByName("button_actions", currentLocale)}><Button
                        text={section.getFiledValueByName("button_text", currentLocale)} variant="info"
                        size="sm"/></Link>
                </div>
            </div>
            <div className="col-lg-7 section-two">
                <div className="row">

                    {(providers && providers.data) && providers.data.map((provider, index) => (
                        <div className="col-md-6 col-sm-12 mt-4" key={index}>
                            <Provider model={provider} className="shadow-lg"/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    providers: state.providers.sponsored,
    currentLocale: state.i18n.value,
    section: state.pages.homepage.sponsoredProvidersSection,

});

export default connect(mapStateToProps)(SponsoredProviderSection);
