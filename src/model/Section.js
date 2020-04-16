import Model from "./Model";
import Field from "./Field";

class Section extends Model {
    constructor(object = {}) {
        super();
        this._name = object.name;
        this._fields = [];

        if (object.fields) {
            this._fields = object.fields.map(field => new Field(field));
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get fields() {
        return this._fields;
    }

    set fields(value) {
        this._fields = value;
    }

    getFiledValueByName(field_name, locale = "ar") {
        //get the field using its label
        let field = this.fields.filter(field => field.label === field_name)[0];

        if (null === field || "undefined" === typeof (field)) {
            return "";
        }
        return field.getLocalizedField("value", locale);
    }
}

export default Section;
