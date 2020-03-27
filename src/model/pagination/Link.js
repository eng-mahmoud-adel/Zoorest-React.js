class Link {
    constructor(object = {first: null, last: null, prev: null, next: null}) {
        this._first = object.first;
        this._last = object.last;
        this._prev = object.prev;
        this._next = object.next;
    }

    get first() {
        return this._first;
    }

    set first(value) {
        this._first = value;
    }

    get last() {
        return this._last;
    }

    set last(value) {
        this._last = value;
    }

    get prev() {
        return this._prev;
    }

    set prev(value) {
        this._prev = value;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    hasMoreData() {
        return this._next != null;
    }

    getNextLink(){
        return this.next
    }
}

export default Link;
