import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import { Button, Text, View } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import * as SplashScreen from 'expo-splash-screen';
import Screen from "./app/components/Screen";
import AppText from "./app/components/Text";


export default function App() {
  const [user, setUser] = useState()
  const [isRestored, setIsRestored] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
    setIsRestored(true)
    SplashScreen.hideAsync();
  }
  
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    restoreUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}
