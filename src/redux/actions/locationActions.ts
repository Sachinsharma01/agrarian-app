import config from "../../config"

const setUserLocation = (weather: any) => {
    return {
        weather: weather,
        type: config.actionTypes.SET_LOCATION
    }
}

const removeUserLocation = () => {
    return {
        weather: {},
        type: config.actionTypes.REMOVE_LOCATION
    }
}

export { setUserLocation, removeUserLocation}