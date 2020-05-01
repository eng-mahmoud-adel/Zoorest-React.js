import React, {useEffect} from 'react'
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {getPrivacyPage} from "../../store/actions/pages";
import BannerImage from "../../images/assets/images/Bg@3x.png";
import {Text48} from "../../components/UI/Typography";

const PrivacyPage = ({page, getPage, currentLocale}) => {
    useEffect(() => {
        getPage();
    }, [getPage]);

    return (
        <div id="privacy-page">
            <Helmet>
                <meta content="Zoorest" property="og:title"/>
                <meta content="Terms And Conditions" name="description"/>
                <meta content="Terms And Conditions" name="og:description"/>
            </Helmet>

            <div className="jumbotron jumbotron-fluid " style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container text-center">
                    <h3 className="banner-title">
                        <Text48
                            className="text-white">Privacy Policy</Text48>
                    </h3>
                </div>
            </div>

            <div className="container mt-5">
                {page.content && <p dangerouslySetInnerHTML={{
                    __html: page.content.getFiledValueByName("description", currentLocale)
                }}/>}
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({
    page: state.pages.privacy,
    currentLocale: state.i18n.value,

});

const mapDispatchToProps = dispatch => ({
    getPage: () => {
        dispatch(getPrivacyPage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPage);
