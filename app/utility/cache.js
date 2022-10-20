import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from "dayjs"

const expiryInMinutes = 5

const store = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify({ value, timestamp: Date.now() }))
    } catch (err) {
        console.log(err);
    }
}

const isExpired = (item)=>{
    const now = dayjs()
    const storedTime = dayjs(item.timestamp)
    return now.diff(storedTime, 'minute') > expiryInMinutes;
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        const item = JSON.parse(value)
        if (!item) return null
        if (isExpired(item)){
            await AsyncStorage.removeItem(key)
            return null
        }
        return item.value

    } catch (err) {
        console.log(err);
    }
}

export default { store, get }