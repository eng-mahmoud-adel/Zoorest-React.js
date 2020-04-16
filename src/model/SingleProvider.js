import Model from './Model';

class SingleProvider extends Model {

    constructor(object= {}) {
        super();

        this._id = object.id
        this._user_id = object.user_id
        this._address = object.address
        this._government = object.government
        this._geo_lat = object.geo_lat
        this._geo_lng = object.geo_lng
        this._rate = object.rate
        this._views = object.views
        this._bookings = object.bookings
        this._favourites = object.favourites
        this._examination_price = object.examination_price
        this._active = object.active
        this._certificate = object.certificate
        this._deleted_at = object.deleted_at
        this._created_at = object.created_at
        this._updated_at = object.updated_at
        this._payment_plane_id = object.payment_plane_id
        this._payment_plane_type = object.payment_plane_type
        this._type = object.type
        this._sponsored_until = object.sponsored_until
        this._sponsored_color = object.sponsored_color
        this._official_name = object.official_name
        this._slug = object.slug
        this._upcoming_appointments_count = object.upcoming_appointments_count
        this._has_appointments = object.has_appointments
        this._is_on_payed_plane = object.is_on_payed_plane
        this._image_url = object.image_url
        this._certificate_url = object.certificate_url
        this._subscribable_type = object.subscribable_type
        this._schedule = object.schedule
        this._is_nearby = object.is_nearby
        this._human_created_at = object.human_created_at
        this._human_updated_at = object.human_updated_at
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

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get government() {
        return this._government;
    }

    set government(value) {
        this._government = value;
    }

    get geo_lat() {
        return this._geo_lat;
    }

    set geo_lat(value) {
        this._geo_lat = value;
    }

    get geo_lng() {
        return this._geo_lng;
    }

    set geo_lng(value) {
        this._geo_lng = value;
    }

    get rate() {
        return this._rate;
    }

    set rate(value) {
        this._rate = value;
    }

    get views() {
        return this._views;
    }

    set views(value) {
        this._views = value;
    }

    get bookings() {
        return this._bookings;
    }

    set bookings(value) {
        this._bookings = value;
    }

    get favourites() {
        return this._favourites;
    }

    set favourites(value) {
        this._favourites = value;
    }

    get examination_price() {
        return this._examination_price;
    }

    set examination_price(value) {
        this._examination_price = value;
    }

    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }

    get certificate() {
        return this._certificate;
    }

    set certificate(value) {
        this._certificate = value;
    }

    get deleted_at() {
        return this._deleted_at;
    }

    set deleted_at(value) {
        this._deleted_at = value;
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

    get payment_plane_id() {
        return this._payment_plane_id;
    }

    set payment_plane_id(value) {
        this._payment_plane_id = value;
    }

    get payment_plane_type() {
        return this._payment_plane_type;
    }

    set payment_plane_type(value) {
        this._payment_plane_type = value;
    }
    
    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
    
    get sponsored_until() {
        return this._sponsored_until;
    }

    set sponsored_until(value) {
        this._sponsored_until = value;
    }
    
    get sponsored_color() {
        return this._sponsored_color;
    }

    set sponsored_color(value) {
        this._sponsored_color = value;
    }
    
    get official_name() {
        return this._official_name;
    }

    set official_name(value) {
        this._official_name = value;
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

    get is_on_payed_plane() {
        return this._is_on_payed_plane;
    }

    set is_on_payed_plane(value) {
        this._is_on_payed_plane = value;
    }
    
    get image_url() {
        return this._image_url;
    }

    set image_url(value) {
        this._image_url = value;
    }
    
    get certificate_url() {
        return this._certificate_url;
    }

    set certificate_url(value) {
        this._certificate_url = value;
    }

    get subscribable_type() {
        return this._subscribable_type;
    }

    set subscribable_type(value) {
        this._subscribable_type = value;
    }

    get schedule() {
        return this._schedule;
    }

    set schedule(value) {
        this._schedule = value;
    }

    get is_nearby() {
        return this._is_nearby;
    }

    set is_nearby(value) {
        this._is_nearby = value;
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

export default SingleProvider;