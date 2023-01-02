import {Link} from "react-router-dom";

export default function TicketItem({ticket}) {
    console.log("TicketItem", ticket);
    return (
        <div className="flexLine bordered">
            <div>
                {ticket.title}
            </div>
            <div >
                <Link to={`/order/${ticket.id}`} state={{ticket: ticket}}>
                    <button className="link">Order</button>
                </Link>
            </div>
        </div>
    )
}
