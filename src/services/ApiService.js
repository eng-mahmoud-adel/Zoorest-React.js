import axios from "axios";
import config from '../config'

// import store from '../store';

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

const instance = axios.create({
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: config.apiUrl,//todo get from app env

    // `headers` are custom headers to be sent
    headers: {
        // 'Authorization': 'Bearer ',
        "X-Platform": window.navigator.platform,
        "X-Os": getOS(),
        "X-Os-Version": "",
        "X-App-Version": "",//todo get from app env
        "X-App-Language": "",//todo add this when localization is implemented
        "X-Language": window.navigator.language,
        // "X-geolocation": window.navigator.geolocation,//todo check this works
    },


    // `transformRequest` allows changes to the request data before it is sent to the server
    // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    // FormData or Stream
    // You may modify the headers object.
    // transformRequest: [function (data, headers) {
    //     // Do whatever you want to transform the data
    //     // console.log(data);
    //
    //     if (false) {
    //         headers.authorization = "Bearer 132456";
    //     }
    //     return [data,headers];
    // }],

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    // timeout: 1000, // default is `0` (no timeout)


    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    //   browser only: 'blob'
    responseType: 'json', // default


    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    // withCredentials: true,


    // `onUploadProgress` allows handling of progress events for uploads
    // browser only
    onUploadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },

    // `onDownloadProgress` allows handling of progress events for downloads
    // browser only
    onDownloadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },

    // `maxContentLength` defines the max size of the http response content in bytes allowed
    // maxContentLength: 2000,
});


instance.interceptors.request.use(function (config) {
    // Do something before request is sent

    //todo try and get the token from state
    const token = sessionStorage.getItem('access_token') || localStorage.getItem('access_token');

    if (token) {
        //if access token is present, append it to any request
        config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // eslint-disable-next-line default-case
    switch (error.response.status) {
        case 401:
            //show validation error
            break;
        case 403:
            //show validation error
            break;
        case 404:
            //show not found component

            break;
        case 422:
            //show validation error
            //showValidationNoty(error.response.data,message)
            break;
        case 500:
            //show something went wrong
            break;
        case 503:
            //show server maintenance alert
            break;
    }
    return Promise.reject(error);
});
export default instance;
