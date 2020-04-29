import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import LazyList from "../../components/DataList";
import Provider from '../../components/Cards/Profiles/Provider';
import CheckBox from '../../components/Buttons/CheckBoxes/CheckBox';
import BasicInput from '../../components/Inputs/BasicInput';
import {MultiSelect} from '../../components/Inputs/MultiSelect';
import {showModal} from "../../store/actions/modal";
import {getMoreProviders, getProviders} from '../../store/actions/providers';
import {getProviderPage} from "../../store/actions/pages";

const Doctors = ({
                     providers, getProviders, getMoreProviders, getPage,
                     countries, cities, districts, page,
                     currentLocale
                 }) => {

    useEffect(() => {
        getPage();
        getProviders();
    }, [getPage, getProviders]);

    const getCountries = () => {
        // if(data[0])
        //     setSelectedCountry(data[0].value)
        return countries.map(country => ({
            value: country.id,
            label: country.getLocalizedName(currentLocale),
        }));
    }

    const getCities = () => {
        // if(data[0])
        //     setSelectedCountry(data[0].value)
        return cities.map(city => ({
            value: city.id,
            label: city.getLocalizedName(currentLocale),
        }));
    }

    // const getDistricts = () => {
    //     // if(data[0])
    //     //     setSelectedCountry(data[0].value)
    //     return districts.map(district => ({
    //         value: district.id,
    //         label: district.getLocalizedName(currentLocale),
    //     }));
    // }


    return (
        <div className="container mt-5">
            <section className="title">
                <h1 className="font-weight-bold">{page.bannerSection.getFiledValueByName("title", currentLocale)}</h1>
                <p>{page.bannerSection.getFiledValueByName("description", currentLocale)}</p>
            </section>

            <section className="pro-doctors">
                <div className="mb-3">({providers.all.meta.total}) Doctor</div>
                <div className="row mb-3">
                    <div className="col-lg-2 col-md-3 mb-3 mb-lg-0">
                        <div>Country:
                            <MultiSelect options={getCountries()}/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-3 mb-lg-0">
                        <div>Cities: <MultiSelect options={getCities()}/></div>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-3 mb-lg-0">
                        <div>Rating: <MultiSelect /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-8 mb-3 mb-lg-0">
                        <CheckBox text="Show only nearby doctors" id="customCheck1"/>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-8">
                        <BasicInput className="basic-input" type="text" right_icon="fa fa-search fa-lg"
                                    placeholder="Start searching for anything"/>
                    </div>
                </div>
            </section>

            {/*<section className= "col-md-10 mx-auto my-5">*/}
            {/*    <BillBoard />*/}
            {/*</section>*/}

            <section className="normal-doctors">
                <LazyList
                    data={providers.all}
                    itemCols={"col-4"}
                    loadMoreMessage={"Load More Questions"}
                    component={Provider}
                    placeholderComponent={Provider}
                    fetchMoreData={getMoreProviders}
                    refresh={getProviders}

                />
            </section>
        </div>
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
