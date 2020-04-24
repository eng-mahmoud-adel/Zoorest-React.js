import {GLOBAL_DATA} from "../actions/globals";
import Country from "../../model/Country";
import ProviderPlane from "../../model/ProviderPlane";
import Category from "../../model/Category";
import City from "../../model/City";
import District from "../../model/District";

const initialState = {
    locations: [],
    countries: [],
    cities: [],
    districts: [],
    provider_planes: [],
    categories: [],
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBAL_DATA:
            return {
                ...state,
                locations: action.payload.locations.map(country => new Country(country)),
                countries: action.payload.countries.map(country => new Country(country)),
                cities: action.payload.cities.map(city => new City(city)),
                districts: action.payload.districts.map(district => new District(district)),
                provider_planes: action.payload.provider_planes.map(plane => new ProviderPlane(plane)),
                categories: action.payload.categories.map(category => new Category(category)),
            }

        default:
            break;
    }

    return state;
};

export default globalReducer
