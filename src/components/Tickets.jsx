import React from "react";
import TicketItem from "./TicketItem";
export default function Tickets({ tickets }) {
    return (
        <div className="list">
            <h2>Tickets</h2>
                {tickets.map((ticket) => <TicketItem ticket={ticket}  key={ticket.id}/>)}

        </div>
    )
}
