import React from "react";
import { View } from "react-native";
import TaskItemStatus from "./TaskItemStatus";
import TaskItemTitle from "./TaskItemTitle";

export default ({ task, changeTask }) => {
  return (
    <View style={style.container}>
      <TaskItemStatus
        isCompleted={task.isCompleted}
        onChange={isCompleted => changeTask(task.id, { isCompleted })}
      />
      <View style={style.title}>
        <TaskItemTitle
          task={task}
          onChange={newTitle => changeTask(task.id, { title: newTitle })}
        />
      </View>
    </View>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    flexShrink: 1,
    flexBasis: "100%",
    marginLeft: 10
  }
};
