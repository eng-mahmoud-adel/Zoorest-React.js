function showError(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;

        default:
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
}

export const getGeoLocation = (onSuccess, OnFail) => {
    if (navigator.geolocation) {
        //if no OnFail method passed use the default internal method
        navigator.geolocation.getCurrentPosition(onSuccess, OnFail || showError);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}
