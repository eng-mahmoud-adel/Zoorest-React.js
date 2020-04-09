import Model from "./Model";

class Image extends Model {
    default_image = "";

    constructor(object = {}) {
        super();
        this.id = object.id
        this._path = object.path
        this._path_large = object.path_large
        this._path_medium = object.path_medium
        this._path_small = object.path_small
        this._path_icon = object.path_icon
    }

    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    get path_large() {
        return this._path_large;
    }

    set path_large(value) {
        this._path_large = value;
    }

    get path_medium() {
        return this._path_medium;
    }

    set path_medium(value) {
        this._path_medium = value;
    }

    get path_small() {
        return this._path_small;
    }

    set path_small(value) {
        this._path_small = value;
    }

    get path_icon() {
        return this._path_icon;
    }

    set path_icon(value) {
        this._path_icon = value;
    }
}

export default Image;
