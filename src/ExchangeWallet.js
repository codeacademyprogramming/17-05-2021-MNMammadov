import './ExchangeWallet.css';
import arrowDownUp from './arrow-down-up.svg';

function ExchangeWallet() {
    return (
        <div className="exchange-wallet">
            <div className="exchange-wallet__calc">
                <form className="d-flex justify-content-between align-items-end">
                    <div className="d-flex f-direction-column">
                        <label for="amount-value" className="exchange-wallet__amount-header">From</label>
                        <input type="number" className="exchange-wallet__amount" name="amount-value" />
                    </div>
                    <div>
                        <label for="currency"></label>
                        <select name="currency" className="exchange-wallet__currency">
                            <option value="azn">AZN</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                        </select>
                    </div>
                </form>

                <div className="exchange-wallet__switch"></div>
                <img src={arrowDownUp} className="exchange-wallet__i" alt="Arrow increase decrease" />

                <form className="d-flex justify-content-between align-items-end">
                    <div className="d-flex f-direction-column">
                        <span className="exchange-wallet__amount-header">To</span>
                        <p className="exchange-wallet__return-amount">1700</p>
                    </div>
                    <div>
                        <label for="currency"></label>
                        <select name="currency" className="exchange-wallet__currency">
                            <option value="azn">AZN</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                        </select>
                    </div>
                </form>
            </div>
            <button className="button">Exchange</button>
        </div>
    );
}

export default ExchangeWallet;