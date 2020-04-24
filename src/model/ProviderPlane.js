import Model from "./Base/Model";

class ProviderPlane extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._title = object.title

    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    getLocalizedTitle(locale = "ar") {
        return this._getLocalizedField("title", locale)
    }
}

export default ProviderPlane;
