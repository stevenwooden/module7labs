import { useEffect, useState } from "react";   

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);
const [exchange, setExchange] = useState(null);

useEffect(() => {

    let ignore = false;
    console.log('fetching bitcoin rates');
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then(response => response.json())
        .then(json => {
            
            if (!ignore){
                console.log(json);
                setExchange(json.bitcoin[currency.toLowerCase()]);
            };
        });

    return () => {
        ignore = true;
        console.log('cleanup effect')
    }
},
[currency]
);

const options = currencies.map(curr => 
<option value={curr} key={curr}>{curr}</option>);
return (
<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate</h3>
<label>Choose currency:
<select value={currency} onChange={e => setCurrency(e.target.value)}>
{options}
</select>
</label>
<p>Selected Currency = {currency}</p>
<p>Price in Bitcoin = {exchange}</p>
</div>
)
}

export default BitcoinRates