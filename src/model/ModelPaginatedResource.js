import Link from "./pagination/Link";
import Meta from "./pagination/Meta";

class ModelPaginatedResource {
    constructor(object = {data: [], links: new Link(), meta: new Meta()}, dataType = null) {
        this._data = object.data;
        this._links = new Link(object.links);
        this._meta = new Meta(object.meta);

        if (dataType != null) {
            this._data = this._data.map(item => new dataType(item))
        }

    }

    get data() {
        return this._data || [];
    }

    set data(value) {
        this._data = value;
    }

    get links() {
        return this._links;
    }

    set links(value) {
        this._links = new Link(value);
    }

    get meta() {
        return this._meta;
    }

    set meta(value) {
        this._meta = new Meta(value);
    }

    hasMoreData() {
        return this.links.hasMoreData();
    }

    getNextLink() {
        return this.links.getNextLink();
    }
}

export default ModelPaginatedResource;
