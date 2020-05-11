import Model from "./Base/Model";
import Image from "./Image";

class Album extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._name = object.name

        this._images = [];
        if (object.images) {
            this._images = object.images.map(photo => new Image(photo))
        }
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


    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }

    getLocalizedName(locale = "ar") {
        return this._getLocalizedField("name", locale)
    }
}

export default Album;
