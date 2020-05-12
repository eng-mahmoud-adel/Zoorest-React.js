import Model from "./Base/Model";
import User from "./User";
import Image from "./Image";

class Pet extends Model {
    constructor(object = {}) {
        super();

        this._id = object.id
        this._name = object.name
        this._slug = object.slug
        this._birth_date = object.birth_date
        this._user_id = object.user_id
        this._owner = new User(object.owner);
        this._image = object.image

        this._images = [];
        if (object.images) {
            this._images = object.images.map(photo => new Image(photo))
        }

        this._certificates = [];
        if (object.certificates) {
            this._certificates = object.certificates.map(certificate => new Image(certificate))
        }

        this._transcriptions = [];
        if (object.transcriptions) {
            this._transcriptions = object.transcriptions.map(transcription => new Image(transcription))
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


    get slug() {
        return this._slug;
    }

    set slug(value) {
        this._slug = value;
    }

    get birth_date() {
        return this._birth_date;
    }

    set birth_date(value) {
        this._birth_date = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get owner() {
        return this._owner;
    }

    set owner(value) {
        this._owner = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }

    get certificates() {
        return this._certificates;
    }

    set certificates(value) {
        this._certificates = value;
    }

    get transcriptions() {
        return this._transcriptions;
    }

    set transcriptions(value) {
        this._transcriptions = value;
    }

    getLocalizedName(locale = "ar") {
        return this._getLocalizedField("name", locale)
    }
}

export default Pet;
