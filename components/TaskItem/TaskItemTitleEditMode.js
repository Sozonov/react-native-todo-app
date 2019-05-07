import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default ({ task, onChange, onViewMode }) => {
  const [title, setTitle] = useState(task.title);
  return (
    <View style={style.editContainer}>
      <TextInput
        onChangeText={text => setTitle(text)}
        value={title}
        style={style.input}
        autoFocus={true}
      />
      <View style={style.button}>
        <Button
          title="OK"
          onPress={() => {
            onChange && onChange(title);
            onViewMode();
          }}
        />
        <Button title="Cancel" onPress={onViewMode} />
      </View>
    </View>
  );
};

const style = {
  editContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    flexBasis: "100%",
    flexShrink: 1
  },
  button: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
  }
};
