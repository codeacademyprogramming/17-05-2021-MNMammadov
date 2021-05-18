import React from 'react';
import './ExchangeWallet.css';
import arrowDownUp from './arrow-down-up.svg';
import rates from './rates.json';

function ExchangeWallet() {
    const [convertAmount, setConvertAmount] = React.useState("0");
    const [fromCurrency, setFromCurrency] = React.useState("--");
    const [toCurrency, setToCurrency] = React.useState("--");
    const [convertedAmount, setConvertedAmount] = React.useState("0");

    function handleInputChange(event) {
        setConvertAmount(event.target.value);
    }

    function handleFromCurrencyChange(event) {
        setFromCurrency(event.target.value);
    }

    function handleToCurrencyChange(event) {
        setToCurrency(event.target.value);
    }

    function handleExchangeClick(event) {
        const foundFromCurrency = rates.find(element => element.code === fromCurrency);
        const aznConverted = convertAmount / foundFromCurrency.nominal * foundFromCurrency.value;
        const foundToCurrency = rates.find(element => element.code === toCurrency);
        const finalValue = aznConverted * foundToCurrency.nominal / foundToCurrency.value;
        setConvertedAmount(finalValue);
    }

    return (
        <div className="exchange-wallet">
            <div className="exchange-wallet__calc">
                <form className="d-flex justify-content-between align-items-end">
                    <div className="d-flex f-direction-column">
                        <label htmlFor="amount-value" className="exchange-wallet__amount-header">From</label>
                        <input value={convertAmount} onChange={handleInputChange} type="number" className="exchange-wallet__amount" name="amount-value" />
                    </div>
                    <div>
                        <label htmlFor="currency"></label>
                        <select value={fromCurrency} onChange={handleFromCurrencyChange} name="currency" className="exchange-wallet__currency">
                            {rates.map((rate) => <option value={rate.code}>{rate.code}</option>)}
                        </select>
                    </div>
                </form>

                <div className="exchange-wallet__switch"></div>
                <img src={arrowDownUp} className="exchange-wallet__i" alt="Arrow increase decrease" />

                <form className="d-flex justify-content-between align-items-end">
                    <div className="d-flex f-direction-column">
                        <span className="exchange-wallet__amount-header">To</span>
                        <p className="exchange-wallet__return-amount">{convertedAmount}</p>
                    </div>
                    <div>
                        <label htmlFor="currency"></label>
                        <select value={toCurrency} onChange={handleToCurrencyChange} name="currency" className="exchange-wallet__currency">
                            {rates.map((rate) => <option value={rate.code}>{rate.code}</option>)}
                        </select>
                    </div>
                </form>
            </div>
            <button className="button" onClick={handleExchangeClick}>Exchange</button>
        </div>
    );
}

export default ExchangeWallet;