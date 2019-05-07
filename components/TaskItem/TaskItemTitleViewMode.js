import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default ({ task, onEditMode, onDelete }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onEditMode} style={style.title}>
        <Text>{task.title}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Image
          source={require("../../assets/images/trash.png")}
          style={style.deleteButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = {
  container: {
    flexDirection: "row",
    width: "100%"
  },
  title: {
    flexBasis: "100%",
    flexShrink: 1
  },
  deleteButton: {
    width: 24,
    height: 24,
    opacity: 0.5
  }
};
