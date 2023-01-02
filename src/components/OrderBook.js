import OrderBookItem from "./OrderBookItem"

export default function OrderBook({tickets, removeOrder}) {
    return (
        <div className="list">
            <h2>Your tickets</h2>
            {tickets.map((ticket) =>
                <OrderBookItem
                    ticket={ticket}
                    key={ticket.id}
                    removeOrder={removeOrder}
                />)}
        </div>
    )
}
