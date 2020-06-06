import Model from "./Base/Model";

class District extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._name = object.name
        this._city_id = object.city_id
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


    get city_id() {
        return this._city_id;
    }

    set city_id(value) {
        this._city_id = value;
    }

    getLocalizedName(locale = "ar") {
        return this._getLocalizedField("name", locale)
    }
}

export default District;
