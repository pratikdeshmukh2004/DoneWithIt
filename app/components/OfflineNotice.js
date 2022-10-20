import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Text from './Text';
import Constants from 'expo-constants';
import { useNetInfo } from "@react-native-community/netinfo"

function OfflineNotice(props) {
  const netInfo = useNetInfo()
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable == false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  )
  return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    height: 50,
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  },
  text: {
    color: colors.white
  }
});

export default OfflineNotice