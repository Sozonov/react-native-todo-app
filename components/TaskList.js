import React, { useState } from "react";
import { Button, FlatList } from "react-native";
import TaskItem from "./TaskItem/index";
import Header from "./Header";

const id = () => Math.round(Math.random() * 1000000);

const useTasksList = () => {
  const defaultTasks = [
    { id: id(), title: "install expo", isCompleted: false },
    { id: id(), title: "read share-db docs", isCompleted: true }
  ];
  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = title => {
    setTasks([...tasks, { id: id(), title, isCompleted: false }]);
  };

  const updateTask = (id, changes) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, ...changes } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  const nonCompletedCount = tasks.filter(t => !t.isCompleted).length;

  return [tasks, addTask, updateTask, deleteTask, nonCompletedCount];
};

export default () => {
  const [
    tasks,
    addTask,
    updateTask,
    deleteTask,
    nonCompletedCount
  ] = useTasksList();
  return (
    <>
      <Header>
        Tasks list {nonCompletedCount} / {tasks.length}
      </Header>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            key={item.id}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        )}
      />
      <Button onPress={() => addTask("new task")} title="Add task" />
    </>
  );
};
