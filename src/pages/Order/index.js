import {useState} from "react";
import {useParams} from "react-router-dom";
import Delivery from "../../components/Delivery";
import Cards from "../../components/Cards";
import Summary from "../../components/Summary";
import CreditCardModal from "../../components/CreditCardModal";

export default function Order(props) {

    const {
        tickets,
        cards,
        activeCard,
        addCard,
        addTicket,
        changeActiveCard,
        updateCard
    } = props;
    const [showModal, setShowModal] = useState(false);
    const {ticketId} = useParams();
    const ticket = tickets.filter(ticket => ticket.id === Number(ticketId))[0];
    console.log("Order", ticket, props);

    return (
        <div className="homeWrapper">
            <div className="info">
                <Delivery ticket={ticket}/>
                <Cards
                    cards={cards}
                    activeCard={activeCard}
                />
            </div>
            <div>
                <Summary
                    ticket={ticket}
                    addTicket={addTicket}
                />
            </div>
            {showModal &&
                <CreditCardModal card={activeCard} close={setShowModal}/>
            }
        </div>
    )
}
