import {useState} from "react";
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';

export default function CreditCardModal(card) {

    const {cvc, expiry, owner, number} = card;
    const [focus, setFocus] = useState();

    const handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    return (
        <div id="PaymentForm">
            <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
            />
            <form>
                <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                ...
            </form>
        </div>
    )
}
