import {Suspense, lazy, useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import TICKETS from "./services/tickets.json"
import CARDS from "./services/cards.json"

import './App.css';

const Order = lazy(() => import("./pages/Order"));
const Home = lazy(() => import("./pages/Home"));

function App() {

    const [tickets, setTickets] = useState([]);
    const [myTickets, setMyTickets] = useState([]);
    const [cards, setCards] = useState([]);
    const [activeCard, setActiveCard] = useState(0);

    function addTicket(ticketId, count) {
        const ticket = tickets.filter(ticket => ticket.id === ticketId)[0]
        setMyTickets(prev => [...prev, {ticket, count}])
    }

    function removeOrder(orderId) {
        setMyTickets(myTickets.filter(order => order.ticket.id !== orderId))
    }

    function addCard(card) {
        setCards([...cards, card]);
    }

    function updateCard(card) {
        setCards(cards.map(item =>
            item.number === card.number ? card : item
        ));
    }

    useEffect(() => {
        async function fetchData() {
            await setTickets(TICKETS);
            await setCards(CARDS)
        }

        fetchData();
    }, []);

    return (
        <div className="mainContainer">
            <Router>
                <h1>Buy your ticket there!</h1>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route
                            path="/order/:ticketId"
                            element={
                                <Order
                                    cards={cards}
                                    activeCard={activeCard}
                                    tickets={tickets}
                                    addTicket={addTicket}

                                    addCard={addCard}
                                    updateCard={updateCard}
                                    changeActiveCard={setActiveCard}
                                />
                            }
                        />
                        <Route
                            exact path="/"
                            element={
                                <Home
                                    tickets={tickets}
                                    myTickets={myTickets}
                                    removeOrder={removeOrder}
                                />}
                        />
                    </Routes>
                </Suspense>
            </Router>
        </div>

    );

}

export default App;
