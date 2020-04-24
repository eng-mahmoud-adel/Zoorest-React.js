import Model from "./Base/Model";
import District from "./District";

class City extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._name = object.name
        this._latitude = object.latitude
        this._longitude = object.longitude

        this._districts = object.districts ? object.districts.map(district => new District(district)) : [];
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

    get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        this._latitude = value;
    }

    get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        this._longitude = value;
    }

    get districts() {
        return this._districts;
    }

    set districts(value) {
        this._districts = value;
    }

    getLocalizedName(locale = "ar") {
        return this._getLocalizedField("name", locale)
    }
}

export default City;
