import Model from "./Base/Model";
import Provider from "./Provider";
import Image from "./Image";
import moment from "moment";
import Album from "./Album";
import Alarm from "./Alarm";
import Pet from "./Pet";

class User extends Model {

    constructor(object = {}) {
        super();
        this._id = object.id
        this._name = object.name
        this._slug = object.slug
        this._email = object.email
        this._type = object.type

        this._description = object.description
        this._phone = object.phone
        this._additional_phone_number = object.additional_phone_number

        this._is_blocked = object.is_blocked
        this._is_liked = object.is_liked
        this._likes_count = object.likes_count
        this._shares_count = object.shares_count
        this._views_count = object.views_count
        this._calls_count = object.calls_count
        this._dob = object.dob
        this._gender = object.gender
        this._country_name = object.country_name
        this._city_name = object.city_name
        this._district_name = object.district_name


        this._image = object.image
        this._created_at = object.created_at
        this._updated_at = object.updated_at
        this._wp_id = object.wp_id
        this._account_views = object.account_views
        this._created_at = moment(object.created_at)
        this._updated_at = moment(object.updated_at)

        if (object.provider) {
            this._provider = new Provider(object.provider)
        }

        this._image_url = object.image_url

        this._photo = new Image();
        if (object.photo) {
            this._photo = new Image(object.photo)
        }

        this._images = [];
        if (object.images) {
            this._images = object.images.map(photo => new Image(photo))
        }

        this._pets = [];
        if (object.pets) {
            this._pets = object.pets.map(pet => new Pet(pet))
        }

        this._albums = [];
        if (object.albums) {
            this._albums = object.albums.map(album => new Album(album))
        }

        this._alarms = [];
        if (object.alarms) {
            this._alarms = object.alarms.map(alarms => new Alarm(alarms))
        }
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
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

    get wp_id() {
        return this._wp_id;
    }

    set wp_id(value) {
        this._wp_id = value;
    }

    get is_blocked() {
        return this._is_blocked;
    }

    set is_blocked(value) {
        this._is_blocked = value;
    }

    get account_views() {
        return this._account_views;
    }

    set account_views(value) {
        this._account_views = value;
    }

    get dob() {
        return this._dob;
    }

    set dob(value) {
        this._dob = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get country_id() {
        return this._country_id;
    }

    set country_id(value) {
        this._country_id = value;
    }

    get city_id() {
        return this._city_id;
    }

    set city_id(value) {
        this._city_id = value;
    }

    get district_id() {
        return this._district_id;
    }

    set district_id(value) {
        this._district_id = value;
    }

    get calls_count() {
        return this._calls_count;
    }

    set calls_count(value) {
        this._calls_count = value;
    }

    get slug() {
        return this._slug;
    }

    set slug(value) {
        this._slug = value;
    }

    get has_appointments() {
        return this._has_appointments;
    }

    set has_appointments(value) {
        this._has_appointments = value;
    }

    get is_favorite() {
        return this._is_favorite;
    }

    set is_favorite(value) {
        this._is_favorite = value;
    }

    get image_url() {
        return this._image_url;
    }

    set image_url(value) {
        this._image_url = value;
    }

    get country_name() {
        return this._country_name;
    }

    set country_name(value) {
        this._country_name = value;
    }

    get city_name() {
        return this._city_name;
    }

    set city_name(value) {
        this._city_name = value;
    }

    get district_name() {
        return this._district_name;
    }

    set district_name(value) {
        this._district_name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get is_liked() {
        return this._is_liked;
    }

    set is_liked(value) {
        this._is_liked = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get provider() {
        return this._provider;
    }

    set provider(value) {
        this._provider = value;
    }

    get additional_phone_number() {
        return this._additional_phone_number;
    }

    set additional_phone_number(value) {
        this._additional_phone_number = value;
    }

    get likes_count() {
        return this._likes_count;
    }

    set likes_count(value) {
        this._likes_count = value;
    }

    get shares_count() {
        return this._shares_count;
    }

    set shares_count(value) {
        this._shares_count = value;
    }

    get views_count() {
        return this._views_count;
    }

    set views_count(value) {
        this._views_count = value;
    }


    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }


    get pets() {
        return this._pets;
    }

    set pets(value) {
        this._pets = value;
    }

    get albums() {
        return this._albums;
    }

    set albums(value) {
        this._albums = value;
    }

    get alarms() {
        return this._alarms;
    }

    set alarms(value) {
        this._alarms = value;
    }

    getNameInitials = () => {
        return this.name[0]
    }

    getJoiningDateString = () => {
        return this.created_at.format("MMMM D Y")
    }

    isProvider() {
        return !!this.provider
    }

    getProfileRoute() {
        if (this.isProvider()) {
            return `/provider/${this.getKey()}`
        } else {
            return `/user/${this.getKey()}`
        }
    }
}

export default User;
