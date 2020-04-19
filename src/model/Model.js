class Model {

    constructor(name) {
        this._fallback_locale = "ar"
    }

    getKey() {
        return this.id;
    }

    get fallback_locale() {
        return this._fallback_locale;
    }

    set fallback_locale(value) {
        this._fallback_locale = value;
    }

    _getLocalizedField(field_name, locale) {

        switch (typeof this[field_name]) {
            //if the field is string, return the field as is
            default:
                return this[field_name]

                 case null:
                    return "";

            case "object":
                //if the field doesnt have the selected locale, return the fallback locale
                if ("undefined" === typeof (this[field_name][locale])) {
                    const first_available_locale = Object.keys(this[field_name])[0];
                    //if the fallback_locale doesnt exist try and find any available local or empty string


                    if ("undefined" !== typeof (this[field_name][this.fallback_locale])) {
                        return this[field_name][this.fallback_locale]
                    } else if ("undefined" !== typeof (this[field_name][first_available_locale])) {
                        return this[field_name][first_available_locale];
                    } else {
                        return "";
                    }

                } else {
                    //("undefined" == typeof (this[field_name][locale])
                    //return the selected field localized
                    return this[field_name][locale]
                }

            //if for some reason the field is undefined return empty string
            case "undefined":
                return ""
        }
    }
}

export default Model;
