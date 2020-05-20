import Model from "./Base/Model";
import moment from "moment";

class SEO extends Model {

    constructor(object = {}) {
        super();

        this._title = object.title
        this._meta_description = object.meta_description
        this._meta_keywords = object.meta_keywords
        this._updated_at = moment(object.updated_at)

    }


    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get meta_description() {
        return this._meta_description;
    }

    set meta_description(value) {
        this._meta_description = value;
    }

    get meta_keywords() {
        return this._meta_keywords;
    }

    set meta_keywords(value) {
        this._meta_keywords = value;
    }


    get updated_at() {
        return this._updated_at;
    }

    set updated_at(value) {
        this._updated_at = value;
    }

    getLocalizedTitle(locale = "ar") {
        return this._getLocalizedField("title", locale)
    }

    getLocalizedDescription(locale = "ar") {
        return this._getLocalizedField("meta_description", locale)
    }

    getLocalizedKeywords(locale = "ar") {
        return this._getLocalizedField("meta_keywords", locale)
    }
}

export default SEO;
