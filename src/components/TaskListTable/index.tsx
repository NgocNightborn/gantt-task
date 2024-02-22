import { Task } from 'gantt-task-react'

export default function TaskListTable({rowHeight, tasks, rowWidth}) {
  return (
    <div style={{ border: "1px solid #EEEDED" }}>
      {tasks.map((task: Task) => {
        return (
          <div 
            key={task.id}
            style={{
              height: rowHeight,
              width: rowWidth,
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingLeft: '16px',
              borderBottom: '1px solid #EEEDED',
            }}
          >
            {task.name}
          </div>
        )
      })}
    </div>
  )
}
