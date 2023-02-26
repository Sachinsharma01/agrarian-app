import config from "../../config"

const updateNumber = (phone:any) => {
    return  {
        type: config.actionTypes.UPDATE_PHONE_NUMBER,
        phone: phone
    }
}
const removeNumber = () => {
    return {
        type: config.actionTypes.REMOVE_PHONE_NUMER,
        phone: '',
    }
}

export { updateNumber, removeNumber }