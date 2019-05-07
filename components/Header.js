import React from "react";
import { Text } from "react-native";

export default ({ children }) => {
  return <Text style={{ fontSize: 50, paddingTop: 10, paddingBottom: 10 }}>{children}</Text>;
};
