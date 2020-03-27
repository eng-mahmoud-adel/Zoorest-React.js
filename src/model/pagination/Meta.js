class Meta {
    constructor(object = {current_page: 0, from: 0, last_page: 0, path: "", per_page: 0, to: 0, total: 0}) {
        this.current_page = object.current_page;
        this.from = object.from;
        this.last_page = object.last_page;
        this.path = object.path;
        this.per_page = object.per_page;
        this.to = object.to;
        this.total = object.total;
    }
}

export default Meta;
