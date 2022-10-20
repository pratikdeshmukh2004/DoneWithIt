import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";


function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const getListingsApi = useApi(listingsApi.getListings)
  useEffect(() => {
    getListingsApi.request()
  }, []);
  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && <>
          <AppText>Couldn't retrive the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>}
        <FlatList
          onRefresh={() => getListingsApi.request()}
          data={getListingsApi.data}
          refreshing={refreshing}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
