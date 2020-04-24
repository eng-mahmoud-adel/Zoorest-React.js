import Model from "./Base/Model";

class Field extends Model {

    constructor(object = {}) {
        super();
        this._label = object.label
        this._value = object.value
        // this._type = object.type
    }


    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    getLocalizedField(field_name, locale) {
        return super._getLocalizedField(field_name, locale);
    }
}

export default Field;
