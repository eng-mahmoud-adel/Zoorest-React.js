import Model from "./Base/Model";
import User from "./User";
import moment from "moment";

class Appointment extends Model {

    constructor(object = {}) {
        super();

        this._id = object.id
        this._provider_user_id = object.provider_user_id
        this._user_id = object.user_id
        this._start_time = moment(object.start_time)
        this._end_time_expected = moment(object.end_time_expected)
        this._canceled = object.canceled
        this._cancellation_reason = object.cancellation_reason
        this._day_of_week = object.day_of_week
        this._month = object.month
        this._year = object.year
        this._status = object.status
        this._price = object.price
        this._final_price = object.final_price
        this._discounted_price = object.discounted_price
        this._promocode_id = object.promocode_id;

        if (object.user) {
            this._user = new User(object.user);
        }

        if (object.provider_user) {
            this._provider_user = new User(object.provider_user);
        }

        if (object.promocode) {
            this._promocode = object.promocode;
        }

    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get provider_user_id() {
        return this._provider_user_id;
    }

    set provider_user_id(value) {
        this._provider_user_id = value;
    }

    get user_id() {
        return this._user_id;
    }

    set user_id(value) {
        this._user_id = value;
    }

    get start_time() {
        return this._start_time;
    }

    set start_time(value) {
        this._start_time = value;
    }

    get end_time_expected() {
        return this._end_time_expected;
    }

    set end_time_expected(value) {
        this._end_time_expected = value;
    }

    get canceled() {
        return this._canceled;
    }

    set canceled(value) {
        this._canceled = value;
    }

    get cancellation_reason() {
        return this._cancellation_reason;
    }

    set cancellation_reason(value) {
        this._cancellation_reason = value;
    }

    get day_of_week() {
        return this._day_of_week;
    }

    set day_of_week(value) {
        this._day_of_week = value;
    }

    get month() {
        return this._month;
    }

    set month(value) {
        this._month = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get promocode_id() {
        return this._promocode_id;
    }

    set promocode_id(value) {
        this._promocode_id = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get provider_user() {
        return this._provider_user;
    }

    set provider_user(value) {
        this._provider_user = value;
    }


    get final_price() {
        return this._final_price;
    }

    set final_price(value) {
        this._final_price = value;
    }

    get discounted_price() {
        return this._discounted_price;
    }

    set discounted_price(value) {
        this._discounted_price = value;
    }

    get promocode() {
        return this._promocode;
    }

    set promocode(value) {
        this._promocode = value;
    }
}

export default Appointment;
