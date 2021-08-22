const rp = require('request-promise-native');

class RequestBuilder {
    
    constructor() {

    }

    sendGetRequest(requestOptions) {
        rp(requestOptions).then()
    }
}