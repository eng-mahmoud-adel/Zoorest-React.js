import Model from "./Base/Model";

class District extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._name = object.name
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

    getLocalizedName(locale = "ar") {
        return this._getLocalizedField("name", locale)
    }
}

export default District;
