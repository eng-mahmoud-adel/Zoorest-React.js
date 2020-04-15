import Model from "./Model";
import User from './User';
import Image from './Image';

class Question extends Model {

    constructor(object = {}) {
        super();

        this._id = object.id
        this._user_id = object.user_id
        this._title= object.title
        this._category = object.category
        this._description = object.description
        this._views= object.views
        this._favourites= object.favourites
        this._closed= object.closed
        this._created_at = object.created_at
        this._updated_at = object.updated_at
        this._slug = object.slug
        this._replies_count= object.replies_count
        this._is_favorite = object.is_favorite
        this._image_url = object.image_url
        this._text = object.text
        this._user = new User(object.user)
        this._images = new Image(object.photo)
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

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get views() {
        return this._views;
    }

    set views(value) {
        this._views = value;
    }

    get favourites() {
        return this._favourites;
    }

    set favourites(value) {
        this._favourites = value;
    }

    get closed() {
        return this._closed;
    }

    set closed(value) {
        this._closed = value;
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

    get slug() {
        return this._slug;
    }

    set slug(value) {
        this._slug = value;
    }

    get replies_count() {
        return this._replies_count;
    }

    set replies_count(value) {
        this._replies_count = value;
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
 
    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

}

export default Question;