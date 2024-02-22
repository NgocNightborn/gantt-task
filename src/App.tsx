import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import TaskListHeader from "./components/TaskListHeader";
import TaskListTable from "./components/TaskListTable";
import { useEffect, useMemo, useRef, useState } from "react";

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
    start: new Date(2020, 1, 10),
    end: new Date(2020, 1, 16),
    name: "Abords et jardins - Rousseau",
    id: "Task 4",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 4),
    end: new Date(2020, 1, 10),
    name: "Abords et jardins - Rousseau",
    id: "Task 5",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 17),
    end: new Date(2020, 1, 18),
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
  const [dateIndexes, setDateIndexes] = useState<number[]>([]);
  const datesRef = useRef<Element[]>([])
  const linesRef = useRef<Element[]>([])
  

  useEffect(() => {
    const dates = document.querySelectorAll('.calendar text');
    const lines = document.querySelectorAll('.ticks line');
    
    datesRef.current = Array.from(dates);
    linesRef.current = Array.from(lines);

    const newDateIndexes: number[] = []
    dates.forEach((date, index: number) => {
      if (date.textContent?.includes('Sat')) {
        newDateIndexes.push(index)
      }
      if (date.textContent?.includes('Sun')) {
        newDateIndexes.push(index + 1)
      }
    });
    setDateIndexes(newDateIndexes);

    return () => {
      datesRef.current = []
      linesRef.current = []
    }
  },[])

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      if (dateIndexes.includes(index)) {
        line.style.setProperty('stroke', '#5D6776', 'important')
      } else {
        line.style.setProperty('stroke', 'none', 'important')
      }
    })
  },[dateIndexes])


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
