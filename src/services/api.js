
class API {

    async request(method, endpoint, data = {}, options = {}, retried = 0) {

        let responseJson = {};
        let response = {};
        const request = {
            method,
        };
        // Logger.debug('deviceInfo',JSON.stringify(headers));
        if (['GET', 'HEAD'].indexOf(method) > -1) {
            request.params = JSON.stringify(data);
        } else {
            request.body = JSON.stringify(data);
        }

        try {

            response = await fetch(endpoint, request);
            responseJson = await response.json();
            return responseJson;
        } catch (error) {
            alert(error);
        }
    }

    async get(endpoint, data = {}, options = {}) {
        return await this.request('GET', endpoint, data, options);
    }

    async post(endpoint, data = {}, options = {}) {
        return await this.request('POST', endpoint, data, options);
    }

    async put(endpoint, data = {}, options = {}) {
        return await this.request('PUT', endpoint, data, options);
    }

    async delete(endpoint, data = {}, options = {}) {
        return await this.request('DELETE', endpoint, data, options);
    }

    async head(endpoint, data = {}, options = {}) {
        return await this.request('HEAD', endpoint, data, options);
    }
}

export default new API();
