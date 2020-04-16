import Model from "./Model";

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

    // get type() {
    //     return this._type;
    // }
    //
    // set type(value) {
    //     this._type = value;
    // }

    getLocalizedField(field_name, locale) {
        return super._getLocalizedField(field_name, locale);
    }
}

export default Field;
