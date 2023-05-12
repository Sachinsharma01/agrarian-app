import config from "../../config"

const updateToken = (token:any) => {
    // console.log(token + " IN ACTION")
    return  {
        type: config.actionTypes.UPDATE_TOKEN,
        token: token,
        isLoggedIn: true
    }
}
const removeToken = () => {
    return {
        type: config.actionTypes.REMOVE_TOKEN,
        token: null,
        isLoggedIn: false
    }
}

export { updateToken, removeToken }