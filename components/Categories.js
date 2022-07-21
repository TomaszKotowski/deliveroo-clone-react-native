import React from "react";
import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
};

export default Categories;
