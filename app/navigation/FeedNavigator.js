import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false, presentation: 'card' }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" options={{...TransitionPresets.RevealFromBottomAndroid}} component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
