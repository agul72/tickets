import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Summary({ticket, addTicket}) {
    console.log("Summary", ticket);
    const {title, price, serviceFee, processingFee, mobileEntry, notes} = ticket;
    const navigate = useNavigate();

    const [countTickets, setCountTickers] = useState(1);
    const [agreement, setAgreement] = useState(false);

    const total = (price + serviceFee) * countTickets + processingFee;

    const increaseBtnHandler = () => {
        if (countTickets < 10) {
            setCountTickers(countTickets + 1)
        }
    }

    const decreaseBtnHandler = () => {
        if (countTickets > 1) {
            setCountTickers(countTickets - 1)
        }
    }

    const placeOrderBtnClickHandler = () => {
        console.log("placeOrderBtnClickHandler", ticket.id, countTickets);
        addTicket(ticket.id, countTickets);
        navigate("/");

    }

    return (
        <div className="bordered summary">
            <div className="title flexLine">
                <div>Total</div>
                <div>${total.toFixed(2)}</div>
            </div>
            <div className="subtitle">{title}</div>
            <div>
                <div className="subtitle">
                    Tickets
                </div>
                <div className="flexLine">
                    <div>
                        Count:
                    </div>
                    <div>
                        <button className="countBtn" onClick={increaseBtnHandler}>+</button>
                        {' '}{countTickets}{' '}
                        <button className="countBtn"  onClick={decreaseBtnHandler}>-</button>
                    </div>
                </div>
                <div className="flexLine">
                    <div>
                        Resale Tickets: ${price.toFixed(2)} x {countTickets}
                    </div>
                    <div>
                        ${(price * countTickets).toFixed(2)}
                    </div>
                </div>
            </div>
            <div>
                <div className="subtitle">
                    Notes From Seller
                </div>
                <div>
                    <div>
                        {notes}
                    </div>

                </div>
            </div>
            <div>
                <div className="subtitle">
                    Fees
                </div>
                <div className="flexLine">
                    <div>
                        Service Fee: ${serviceFee.toFixed(2)} x {countTickets}
                    </div>
                    <div>
                        ${(serviceFee * countTickets).toFixed(2)}
                    </div>
                </div>
                <div className="flexLine">
                    <div>
                        Order Processing Fee:
                    </div>
                    <div>
                        ${(processingFee).toFixed(2)}
                    </div>
                </div>
            </div>
            <div>
                <div className="subtitle">
                    Delivery
                </div>
                <div className="flexLine">
                    <div>
                        Mobile Entry
                    </div>
                    <div>
                        {mobileEntry}
                    </div>
                </div>
            </div>
            <div className="subtitle">
                <Link to="/" className="link">Cancel Order</Link>
            </div>
            <div className="subtitle">
                * All Sales Final - No Refunds
            </div>
            <div>
                <input
                    type="checkbox" value={agreement}
                    onChange={() => setAgreement(!agreement)}
                />
                <label className="subtitle">I have read and agree to the current{' '}
                    <Link to="#" className="link">Terms of Use</Link></label>
            </div>
            <div>
                <button
                    className="orderBtn subtitle"
                    disabled={!agreement}
                    onClick={placeOrderBtnClickHandler}
                >
                    Place Order
                </button>
            </div>
            <div className="smallText">
                * Exceptions may apply, see our Terms of Use
            </div>
        </div>
    )
}
