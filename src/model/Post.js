import Model from "./Model";
import User from './User';
import Image from './Image';

class Post extends Model {

    constructor(object = {}) {
        super();

        this._id = object.id
        this._user_id = object.user_id
        this._name = object.name
        this._gender = object.gender
        this._type = object.type
        this._breed = object.breed
        this._breed_purity = object.breed_purity
        this._color = object.color
        this._body_marks = object.body_marks
        this._licence_number = object.licence_number
        this._price = object.price
        this._currency = object.currency
        this._post_type = object.post_type
        this._is_closed = object.is_closed
        this._dob = object.dob
        this._created_at = object.created_at
        this._updated_at = object.updated_at
        this._description = object.description
        this._country_id = object.country_id
        this._city_id = object.city_id
        this._district_id = object.district_id
        this._slug = object.slug
        this._image_url = object.image_url
        this._country_name = object.country_name
        this._city_name = object.city_name
        this._district_name = object.district_name
        this._text = object.text
        this._user = new User(object.user)
        this._images = object.images.map(item => new Image(item))
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get breed() {
        return this._breed;
    }

    set breed(value) {
        this._breed = value;
    }

    get breed_purity() {
        return this._breed_purity;
    }

    set breed_purity(value) {
        this._breed_purity = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get body_marks() {
        return this._body_marks;
    }

    set body_marks(value) {
        this._body_marks = value;
    }

    get licence_number() {
        return this._licence_number;
    }

    set licence_number(value) {
        this._licence_number = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        this._currency = value;
    }

    get post_type() {
        return this._post_type;
    }

    set post_type(value) {
        this._post_type = value;
    }

    get is_closed() {
        return this._is_closed;
    }

    set is_closed(value) {
        this._is_closed = value;
    }

    get dob() {
        return this._dob;
    }

    set dob(value) {
        this._dob = value;
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

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
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

    get slug() {
        return this._slug;
    }

    set slug(value) {
        this._slug = value;
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

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }

}

export default Post;