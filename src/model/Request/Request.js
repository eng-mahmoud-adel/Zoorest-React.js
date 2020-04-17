class Request {
    constructor() {
        this.headers = {}
    }

    static createInstance() {
        return new Request()
    }

    toJSON(data) {
        return data
    }
}

export default Request;
