import React from "react";
import TaskItem from "./TaskItem/index";
import Header from "./Header";

const tasks = [
  { id: Math.random(), title: "install expo" },
  { id: Math.random(), title: "read share-db docs", isCompleted: true }
];

export default () => {
  return (
    <>
      <Header>Tasks list</Header>
      {tasks.map(task => (
        <TaskItem task={task} key={task.id} />
      ))}
    </>
  );
};
