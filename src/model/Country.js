import Model from "./Base/Model";
import City from "./City";

class Country extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._name = object.name
        this._abbreviation_2 = object.abbreviation_2
        this._abbreviation_3 = object.abbreviation_3
        this._cities = object.cities ? object.cities.map(city => new City(city)) : [];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get abbreviation_2() {
        return this._abbreviation_2;
    }

    set abbreviation_2(value) {
        this._abbreviation_2 = value;
    }

    get abbreviation_3() {
        return this._abbreviation_3;
    }

    set abbreviation_3(value) {
        this._abbreviation_3 = value;
    }

    get cities() {
        return this._cities;
    }

    set cities(value) {
        this._cities = value;
    }

    getLocalizedName(locale = "ar") {
        return this._getLocalizedField("name", locale)
    }


}

export default Country;
