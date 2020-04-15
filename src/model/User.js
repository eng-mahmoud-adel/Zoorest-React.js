import Model from "./Model";

class User extends Model {

    constructor(object = {}) {
        super();
        this._id = object.id
        this._email = object.email
        this._email2 = object.email2
        this._name = object.name
        this._type = object.type
        this._image = object.image
        this._description = object.description
        this._phone = object.phone
        this._created_at = object.created_at
        this._updated_at = object.updated_at
        this._wp_id = object.wp_id
        this._is_blocked = object.is_blocked
        this._account_views = object.account_views
        this._dob = object.dob
        this._gender = object.gender
        this._country_id = object.country_id
        this._city_id = object.city_id
        this._district_id = object.district_id
        this._calls_count = object.calls_count
        this._slug = object.slug
        this._upcoming_appointments_count = object.upcoming_appointments_count
        this._has_appointments = object.has_appointments
        this._is_favorite = object.is_favorite
        this._image_url = object.image_url
        this._country_name = object.country_name
        this._city_name = object.city_name
        this._district_name = object.district_name
        this._age = object.age
        this._text = object.text
        this._photo = object.photo
        this._human_created_at = object.human_created_at
        this._human_updated_at = object.human_updated_at

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

    get email2() {
        return this._email2;
    }

    set email2(value) {
        this._email2 = value;
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
    
    get upcoming_appointments_count() {
        return this._upcoming_appointments_count;
    }

    set upcoming_appointments_count(value) {
        this._upcoming_appointments_count = value;
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

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get human_created_at() {
        return this._human_created_at;
    }

    set human_created_at(value) {
        this._human_created_at = value;
    }
    
    get human_updated_at() {
        return this._human_updated_at;
    }

    set human_updated_at(value) {
        this._human_updated_at = value;
    }
}

export default User;