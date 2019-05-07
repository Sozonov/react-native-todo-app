import React, { useState } from "react";
import TaskItemTitleViewMode from "./TaskItemTitleViewMode";
import TaskItemTitleEditMode from "./TaskItemTitleEditMode";

export default ({ task, onChange }) => {
  const [isEditMode, setEditMode] = useState(false);

  return isEditMode ? (
    <TaskItemTitleEditMode
      task={task}
      onViewMode={() => setEditMode(false)}
      onChange={title => onChange(title)}
    />
  ) : (
    <TaskItemTitleViewMode onEditMode={() => setEditMode(true)} task={task} />
  );
};
