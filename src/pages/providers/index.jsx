import React, {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux';
import LazyList from "../../components/DataList";
import Provider from '../../components/Cards/Profiles/Provider';
import CheckBox from '../../components/Buttons/CheckBoxes/CheckBox';
// import {MultiSelect} from '../../components/Inputs/MultiSelect';
import {showModal} from "../../store/actions/modal";
import {getMoreProviders, getProviders} from '../../store/actions/providers';
import {getProviderPage} from "../../store/actions/pages";
import {Helmet} from "react-helmet";
import SearchInput from "../../components/SearchInput";
import {SelectField} from "../../components/Inputs/Select2";
import {Field, Formik} from "formik";

const Doctors = ({
                     providers, getProviders, getMoreProviders, getPage,
                     countries, cities, districts, page,
                     currentLocale
                 }) => {

    const [selectedCountry, setSelectCountry] = useState(null);

    useEffect(() => {
        getPage();
        getProviders();
    }, [getPage, getProviders]);

    const handleFormSubmit = (values, resetForm) => {
        console.log(values);
        // register({
        //     apiErrors: {},
        //     name: values.name,
        //     email: values.email,
        //     phone: values.phone,
        //
        //     additional_phone_number: values.additional_phone_number,
        //     password: values.password,
        //     password_confirmation: values.password_confirmation,
        //     country_id: values.country_id,
        //     city_id: values.city_id,
        //     district_id: values.district_id,
        // }, handleSubmissionSuccess.bind(this, resetForm), () => {
        // }, () => {
        //     // debugger
        //     // actions.setSubmitting(false);
        //
        // });
    }


    const getCountries = () => {
        if (!countries) {
            return [];
        }

        return countries.map(country => ({
            value: country.id,
            label: country.getLocalizedName(currentLocale),
        }));
    }

    const getCities = () => {
        if (!cities || !selectedCountry) {
            return [];
        }

        return cities.filter(city => city.country_id === selectedCountry.value)
            .map(city => ({
                value: city.id,
                label: city.getLocalizedName(currentLocale),
            }));
    }

    // const getDistricts = () => {
    //     if (!districts || !selectedCity) {
    //         return [];
    //     }
    //
    //     return districts.filter(district => district.city_id === selectedCity.value)
    //         .map(district => ({
    //             value: district.id,
    //             label: district.getLocalizedName(currentLocale),
    //         }));
    // }


    return (
        <Fragment>
            {
                <Helmet>
                    {page.seo.title && <title>{page.seo.getLocalizedTitle(currentLocale)}</title>}

                    {page.seo.meta_keywords &&
                    <meta name="keywords" content={page.seo.getLocalizedKeywords(currentLocale)}/>}

                    {page.seo.meta_description &&
                    <meta name="description" content={page.seo.getLocalizedDescription(currentLocale)}/>}

                    {page.seo.updated_at && <meta name="og:updated_time" content={page.seo.updated_at}/>}
                </Helmet>
            }
            <div className="container mt-5">
                <section className="title">
                    <h1 className="font-weight-bold">{page.bannerSection.getFiledValueByName("title", currentLocale)}</h1>
                    <p>{page.bannerSection.getFiledValueByName("description", currentLocale)}</p>
                </section>

                <section className="pro-doctors">
                    <div className="mb-3">({providers.all.meta.total}) Doctor</div>


                    <Formik
                        initialValues={{
                            country_id: null,
                            city_id: null,
                            district_id: null,
                        }}
                        onSubmit={async (values, {setStatus, resetForm}) => {
                            handleFormSubmit(values, resetForm)
                        }
                        }

                        render={({
                                     handleSubmit
                                 }) =>
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="row mb-3">
                                    <div className="col-lg-2 col-md-3 mb-3 mb-lg-0">
                                        <div>Country:

                                            <Field
                                                as={SelectField}
                                                name={"country_id"}
                                                placeholder={"Select Country"}
                                                className={"w-100"}
                                                options={getCountries()}
                                                onChange={(selected_option) => {
                                                    setSelectCountry(selected_option)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 mb-3 mb-lg-0">
                                        <div>Cities:
                                            <Field
                                                as={SelectField}
                                                name={"city_id"}
                                                placeholder={"Select City"}
                                                className={"w-100"}
                                                options={getCities()}
                                                // onChange={(selected_option) => {
                                                //     setSelectCity(selected_option)
                                                // }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 mb-3 mb-lg-0">
                                        <div>Rating: {/*<MultiSelect />*/}</div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-8 mb-3 mb-lg-0">
                                        <CheckBox text="Show only nearby doctors" id="customCheck1"/>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-8">
                                        <SearchInput/>
                                    </div>
                                </div>
                            </form>
                        }
                    >
                    </Formik>
                </section>

                {/*<section className= "col-md-10 mx-auto my-5">*/}
                {/*    <BillBoard />*/}
                {/*</section>*/}

                <section className="normal-doctors">
                    <LazyList
                        data={providers.all}
                        itemCols={"col-4"}
                        loadMoreMessage={"Load More question"}
                        component={Provider}
                        //todo placeholderComponent={Provider}
                        fetchMoreData={getMoreProviders}
                        refresh={getProviders}

                    />
                </section>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    page: state.pages.providers,
    providers: state.providers,
    authUser: state.authUser,
    // locations: state.globals.locations,
    countries: state.globals.countries,
    cities: state.globals.cities,
    districts: state.globals.districts,
    currentLocale: state.i18n.value,

});

const mapDispatchToProps = (dispatch) => ({

    showModal: (component) => {
        dispatch(showModal(component));
    },
    getPage: () => {
        dispatch(getProviderPage());
    },

    getProviders: () => {
        dispatch(getProviders());
    },

    getMoreProviders: (url) => {
        dispatch(getMoreProviders(url));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
