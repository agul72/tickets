import Tickets from "../../components/Tickets";
import OrderBook from "../../components/OrderBook";

export default function Home({tickets, myTickets, removeOrder}) {
    return (
        <div className="homeContainer">
            <div className="bordered">
                <Tickets tickets={tickets}/>
            </div>
            <div className="bordered">
                <OrderBook
                    tickets={myTickets}
                    removeOrder={removeOrder}
                />
            </div>
        </div>
    )
}
