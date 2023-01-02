import okImage from "../assets/icons8-ok.svg";
import cvvImage from "../assets/cvv.svg"

export default function CreditCardItem({card}) {

    function getCardNetwork(number) {
        switch (number.slice(0, 1)) {
            case "4":
                return "Visa";
            case "5":
                return "MasterCard";
            case "3":
                return "American Express";
            case "6":
                return "Discover";
            default:
                return "Unknown";
        }
    }

    return (
        <div className="creditCardItemContainer">
            <div>
                <input type="radio" name="activeCard" value={card.number}/>
            </div>
            <div className="creditCardsDetails">
                <div className="subtitle">{getCardNetwork(card.number)} - {card.number.slice(-4)}</div>
                <div>{card.owner} | exp. {card.expiredDate}</div>
                <div className="link subtitle">Edit | Delete</div>

                <div>
                    <div>Security Code</div>
                    <div className="flexContainer">
                        <div className="bordered flexLine">
                            <div>{card.cvc}</div>
                            <div className="okImage"><img src={okImage}/></div>
                        </div>
                        <div><img src={cvvImage} height={50}/></div>
                        <div>3-digits on back of card</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
