import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title = "Title" }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image className="h-20 w-20 bg-gray-300 p-4" source={{ uri: imgUrl }} />
      <Text className="absolute bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
