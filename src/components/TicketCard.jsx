import React from "react";
import { MdCalendarToday } from "react-icons/md";

const TicketCard = ({ ticket, handleProgress }) => {

    const {
        id,
        title,
        description,
        customer,
        priority,
        status,
        createdAt,
    } = ticket;

    const statusBadge =
        status === "Open"
            ? "badge bg-[#B9F8CF] text-[#0B5E06] badge-sm"
            : status === "In Progress"
                ? "badge badge-warning badge-sm"
                : "badge badge-neutral badge-sm";

    const priorityColor =
        priority === "High"
            ? "text-red-600"
            : priority === "Medium"
                ? "text-yellow-600"
                : "text-green-600";


    return (
        <div onClick={() => handleProgress(id, title)} className="bg-gray-100 rounded-md p-2.5 sm:p-3 md:p-4 border border-gray-200">

            <section className="flex items-center justify-between mb-2">
                <h2 className="lg:text-lg font-semibold text-gray-800">
                    {title}
                </h2>

                <span className={`${statusBadge} gap-1 font-medium text-xs`}>
                    <span className="w-2 h-2 bg-current rounded-full"></span>
                    {status}
                </span>
            </section>


            <p className="text-sm text-gray-600 mb-4">
                {description}
            </p>

            <section className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2.5">
                    <span className="text-gray-400">#{id}</span>

                    <span className={`font-semibold text-xs uppercase ${priorityColor}`}>
                        {priority} Priority
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-xs ">{customer}</span>

                    <div className="flex items-center gap-1">
                        <MdCalendarToday className="text-gray-400 text-sm" />
                        <span>
                            {new Date(createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TicketCard;