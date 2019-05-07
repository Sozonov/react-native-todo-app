import React from "react";
import { View, Image } from "react-native";

const isCompletedPathMap = new Map();
isCompletedPathMap.set(false, require("../../assets/images/checkbox-off.png"));
isCompletedPathMap.set(true, require("../../assets/images/checkbox-on.png"));

export default ({ isCompleted, onChange }) => {
  return (
    <View onClick={onChange}>
      <Image
        source={isCompletedPathMap.get(Boolean(isCompleted))}
        style={{ width: 24, height: 24 }}
      />
    </View>
  );
};
