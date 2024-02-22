import React from 'react'

export default function TaskListHeader({headerHeight}) {
  return (
    <div
      style={{
        height: headerHeight,
        display: 'flex',
        alignItems: 'end',
        padding: '0 0 0 16px',
        color: '#C0C6CE'
      }}
    >
      Worksites
    </div>
  )
}
