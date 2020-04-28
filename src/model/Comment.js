import Model from "./Base/Model";
import moment from "moment";
import Image from "./Image";
import User from "./User";

class Comment extends Model {
    constructor(object = {}) {
        super();
        this._id = object.id;
        this._user_id = object.user_id;
        this._text = object.text;
        this._likes_count = object.likes_count || 0;
        this._created_at = moment(object.created_at);
        this._updated_at = moment(object.updated_at);

        if (object.photo) {
            this._photo = new Image(object.photo);
        }


        if (object.user) {
            this._author = new User(object.user);
        }
        if (object.author) {
            this._author = new User(object.author);
        }

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

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
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

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }


    get likes_count() {
        return this._likes_count;
    }

    set likes_count(value) {
        this._likes_count = value;
    }
}

export default Comment;
