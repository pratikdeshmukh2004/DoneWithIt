import * as SecureStore from "expo-secure-store"
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (err) {
        console.log(err, 'while storing auth token...');
    }
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key)
        return token

    } catch (err) {
        console.log(err, 'while getting token...');
    }
}

const getUser = async ()=>{
    const token = await getToken();
    return token? jwtDecode(token): null
}

const removeToken = async () => {
    try {

        await SecureStore.deleteItemAsync(key)
    } catch (err) {
        console.log(err, 'while deleting token...');
    }
}

export default {
    getUser,
    removeToken,
    getToken,
    storeToken
}