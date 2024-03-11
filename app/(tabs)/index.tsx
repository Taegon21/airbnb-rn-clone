import React, { useMemo } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const [category, setCategory] = React.useState("Tiny homes");
  const items = useMemo(() => listingData as any[], []);

  const onDateChange = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex:1, marginTop: 100 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDateChange} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default Page;
