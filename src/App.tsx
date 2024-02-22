import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import TaskListHeader from "./components/TaskListHeader";
import TaskListTable from "./components/TaskListTable";
import { useEffect, useMemo, useState } from "react";

const tasks: Task[] = [
  {
    start: new Date(2020, 5, 1),
    end: new Date(2020, 5, 1),
    name: "Abords et jardins - Rousseau",
    id: "Task 1",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: {
      progressColor: "#ffbb54",
      progressSelectedColor: "#ff9e0d",
      "& .sdaluyt": "white",
    },
  },
  {
    start: new Date(2020, 4, 1),
    end: new Date(2020, 4, 2),
    name: "Abords et jardins - Rousseau",
    id: "Task 2",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 4, 1),
    end: new Date(2020, 4, 2),
    name: "Abords et jardins - Rousseau",
    id: "Task 3",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 6),
    end: new Date(2020, 1, 12),
    name: "Abords et jardins - Rousseau",
    id: "Task 4",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 2),
    end: new Date(2020, 1, 6),
    name: "Abords et jardins - Rousseau",
    id: "Task 5",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 13),
    end: new Date(2020, 1, 14),
    name: "Abords et jardins - Rousseau",
    id: "Task 6",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: "Abords et jardins - Rousseau",
    id: "Task 7",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
];

function App() {
  useEffect(() => {
    const dates = document.querySelectorAll("._9w8d5");
    dates.forEach((date) => {
      date.textContent = "|";
    });
  }, []);

  return (
    <div className='styled-div'>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Day}
        TaskListHeader={(props) => <TaskListHeader {...props} />}
        TaskListTable={(props) => <TaskListTable {...props} />}
        barCornerRadius={8}
        barBackgroundColor='white'
        barProgressColor='white'
      />
    </div>
  );
}

export default App;
