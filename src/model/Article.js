import Model from "./Model";
import Image from "./Image";
import User from "./User";

class Article extends Model {

    constructor(object = {}) {
        super();

        this._id = object.id
        this._slug = object.slug
        this._title = object.title
        this._description = object.description
        this._body = object.body
        this._cleaned_body = object.cleaned_body
        this._comments_count = object.comments_count || 0;
        this._favorites = object.favorites || 0;
        this._author = new User(object.author)

        this._photo = new Image(object.photo)

        this._is_favorite = object.is_favorite
        this._publish_on = object.publish_on
        this._created_at = object.created_at
        this._updated_at = object.updated_at
    }

    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get slug() {
        return this._slug;
    }

    set slug(value) {
        this._slug = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
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

    get is_favorite() {
        return this._is_favorite;
    }

    set is_favorite(value) {
        this._is_favorite = value;
    }

    get publish_on() {
        return this._publish_on;
    }

    set publish_on(value) {
        this._publish_on = value;
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

    get favorites() {
        return this._favorites;
    }

    set favorites(value) {
        this._favorites = value;
    }

    get cleaned_body() {
        return this._cleaned_body;
    }

    set cleaned_body(value) {
        this._cleaned_body = value;
    }

    get comments_count() {
        return this._comments_count;
    }

    set comments_count(value) {
        this._comments_count = value;
    }

    getLocalizedSlug(locale = "ar") {
        return this._getLocalizedField("slug", locale)
    }

    getLocalizedTitle(locale = "ar") {
        return this._getLocalizedField("title", locale)
    }

    getLocalizedCleanedBody(locale = "ar") {
        return this._getLocalizedField("cleaned_body", locale)
    }

    getLocalizedBody(locale = "ar") {
        return this._getLocalizedField("body", locale)
    }
}

export default Article;
