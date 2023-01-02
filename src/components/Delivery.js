import okImage from "../assets/icons8-ok.svg"

export default function Delivery({ticket}) {
    console.log("Delivery", ticket)
    return (
        <div className="bordered">
            <div className="title">
                <div>Delivery</div>
                <div className="okImage"><img src={okImage}/></div>
            </div>

            <div className="subtitle">Mobile Entry - {ticket.mobileEntry}</div>
            <div>Ticket available by {Date(ticket.date).slice(0, 15)}</div>
            <div>{ticket.delivery}</div>
        </div>
    )
}
