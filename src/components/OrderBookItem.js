export default function OrderBookItem({ticket, removeOrder}) {
    console.log("OrderBookItem", ticket);
    return (
        <div className="flexLine bordered">
            <div>
                {ticket.ticket.title} x {ticket.count}
            </div>
            <div className="flexContainer">
                <button
                    className="link"
                    onClick={() => removeOrder(ticket.ticket.id)}
                >
                    Remove
                </button>
                <button className="link">Details</button>
            </div>
        </div>
    )
}
