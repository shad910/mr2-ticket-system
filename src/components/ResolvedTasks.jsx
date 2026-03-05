import React from 'react';

const ResolvedTasks = ({ resolved }) => {
  return (
    <div>
      {resolved.length === 0 ? (
        <p className="text-gray-600 ml-2.5 text-sm">No tasks resolved yet.</p>
      ) : (
        <ul className="space-y-2 rounded-md">
          {resolved.map((task) => (
            <li 
              key={task.id} 
              className="bg-[#E0E7FF] text-[#001931] p-2.5"
            >
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResolvedTasks;