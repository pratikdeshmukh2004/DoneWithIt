import * as Notifications from 'expo-notifications';
import expoPushTokenApi from "../api/expoPushToken";
import { useEffect } from "react";

const useNotifications = (notificationListener) => {
    const registerForPushNotifications = async () => {
        try {
            const permission = await Notifications.getPermissionsAsync()
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokenApi.register(token['data'])
        } catch (err) {
            console.log(err, 'error get push token...');
        }
    }
    if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener)

    useEffect(() => {
        registerForPushNotifications()
    }, [])
}

export default useNotifications;