import React, { useMemo } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import listingData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingBottomSheet from "@/components/ListingBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Page = () => {
  const [category, setCategory] = React.useState("Tiny homes");
  const items = useMemo(() => listingData as any[], []);
  const getoItems = useMemo(() => listingsDataGeo, []);

  const onDateChange = (category: string) => {
    setCategory(category);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 45 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDateChange} />,
          }}
        />
        <ListingsMap listings={getoItems} />
        <ListingBottomSheet listings={items} category={category} />
      </View>
    </GestureHandlerRootView>
  );
};

export default Page;
