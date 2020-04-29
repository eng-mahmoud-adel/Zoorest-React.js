import React from 'react'
import Button from '../../components/Buttons/Button/Button';
import Provider from '../../components/Cards/Profiles/Provider';
import {Link} from 'react-router-dom';
import {Text16Black, Text18Regular, Text32} from "../../components/UI/Typography";

const SponsoredProviderSection = ({providers, section, currentLocale}) => {

    return (
        <div className="row p-3">
            <div className="col-lg-5 mb-4 mb-md-4">
                <div className="title mb-5 mt-0">
                    <Text32>
                        {section.getFiledValueByName("header", currentLocale)}
                    </Text32>
                </div>
                <div className="wrapper mb-4">
                    <Text16Black>
                        {section.getFiledValueByName("title", currentLocale)}
                    </Text16Black>
                    <Text18Regular className=""
                                   style={{text: "#778699"}}>{section.getFiledValueByName("description", currentLocale)}</Text18Regular>
                </div>
                <div className="wrapper mb-4">
                    <h3>
                        <Text16Black>
                            {section.getFiledValueByName("title", currentLocale)}
                        </Text16Black>
                    </h3>
                    <Text18Regular className=""
                                   style={{text: "#778699"}}>{section.getFiledValueByName("description", currentLocale)}</Text18Regular>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-5 col-sm-6 pl-0">
                    <Link to={section.getFiledValueByName("button_actions", currentLocale)}><Button
                        text={section.getFiledValueByName("button_text", currentLocale)} color="btn btn-info"
                        size="btn-sm"/></Link>
                </div>
            </div>
            <div className="col-lg-7 section-two">
                <div className="row">

                    {(providers && providers.data) && providers.data.map((provider, index) => (
                        <div className="col-md-6 col-sm-12 mt-sm-4" key={index}>
                            <Provider model={provider} className="shadow-lg"/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default SponsoredProviderSection;
