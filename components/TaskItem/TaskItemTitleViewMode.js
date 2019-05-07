import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default ({ task, onEditMode }) => {
  return (
    <TouchableOpacity onPress={onEditMode}>
      <Text>{task.title}</Text>
    </TouchableOpacity>
  );
};
