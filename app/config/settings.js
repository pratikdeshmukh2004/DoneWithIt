import { Constants } from "expo-constants"

const settings = {
    dev: {
        apiUrl: "http://ec2-65-0-97-41.ap-south-1.compute.amazonaws.com:5000/api"
    },
    prod: {
        apiUrl: "http://ec2-65-0-97-41.ap-south-1.compute.amazonaws.com:5000/api"
    },
    stag: {
        apiUrl: "http://ec2-65-0-97-41.ap-south-1.compute.amazonaws.com:5000/api"
    },
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev
    if (Constants.mainifest.releaseChannel === 'staging') return settings.stag
    return settings.prod
}

export default getCurrentSettings()