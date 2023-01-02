import {Link} from "react-router-dom";
import CreditCardItem from "./CreditCardItem";
import okImage from "../assets/icons8-ok.svg";
import creditCardImage from "../assets/creditCard.svg"

export default function Cards(
    {
        cards,
        activeCard,
        showCreditCardModal,

    }
) {
    console.log("Cards", cards)
    return (
        <div className="bordered">
            <div className="title">
                <div>Payment</div>
                <div className="okImage"><img src={okImage}/></div>
            </div>
            <div className="subtitle">Use Credit / Debit Card</div>
            <div>
                {cards.map(card => <CreditCardItem card={card} key={card.number}/>)}
            </div>
            <div onClick={showCreditCardModal} className="flexContainer">
                <div className="plus">+</div>
                <div><img src={creditCardImage} height={50}/></div>
                <div className="link subtitle">Add New Card</div>
            </div>
            <div>
                <div className="subtitle">
                    Or Pay With
                </div>
                <div>
                    By using a digital wallet and continuing past this page,{" "}
                    you have read and are accepting the{" "}
                    <Link to="#" className="link">Terms of Use</Link>
                </div>
            </div>

        </div>

    )
}
