import React from "react";

const TicketActionCard = ({ taskStatus, onComplete }) => {
  if (taskStatus.length === 0) {
    return (
      <p className="text-gray-600 ml-2.5 text-sm">Select a ticket to add to Task Status</p>
    );
  }

  return (
    <div className="space-y-4">
      {taskStatus.map((task) => {
        const { id, title } = task;

        return (
          <div
            key={id}
            className="bg-gray-100 p-4 rounded-md border border-gray-200 w-full max-w-md"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {title}
            </h2>

            <button
              onClick={() => onComplete(title, id)}
              className="btn bg-[#02A53B] w-full text-white normal-case"
            >
              Complete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TicketActionCard;