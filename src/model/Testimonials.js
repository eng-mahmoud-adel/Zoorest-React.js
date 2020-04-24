import Model from "./Base/Model";

class Testimonials extends Model {

    constructor(object = {}) {
        super();

        this._id = object.id
        this._text = object.text
        this._client_name = object.client_name
        this._date = object.date
        this._created_at = object.created_at
        this._updated_at = object.updated_at
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get client_name() {
        return this._client_name;
    }

    set client_name(value) {
        this._client_name = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }


    get created_at() {
        return this._created_at;
    }

    set created_at(value) {
        this._created_at = value;
    }

    get updated_at() {
        return this._updated_at;
    }

    set updated_at(value) {
        this._updated_at = value;
    }

    getLocalizedText(locale = "ar") {
        return this._getLocalizedField("text", locale)
    }

    getLocalizedClientName(locale = "ar") {
        return this._getLocalizedField("client_name", locale)
    }
}

export default Testimonials;
