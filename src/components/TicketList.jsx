import React from "react";
import TicketCard from "./TicketCard";

const TicketList = ({ tickets, handleProgress }) => {
  if (!tickets || tickets.length === 0) {
    return <p className="text-gray-600">No tickets found.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-2.5 lg:gap-5">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          handleProgress={handleProgress}
        />
      ))}
    </div>
  );
};

export default TicketList;