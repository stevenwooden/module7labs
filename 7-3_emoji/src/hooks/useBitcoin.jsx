import { useState, useEffect} from "react";


export function useBitcoin(currency) {
    
    const [exchange, setExchange] = useState(null);

    useEffect(()=> {
        if(currency) {
            let ignore = false;
            console.log('fetching bitcoin rates');
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
                .then (response => response.json())
                .then(json => {
                    if (!ignore){
                        setExchange(json.bitcoin[currency.toLowerCase()]);
                    }
                });
                return () => {
                    ignore = true;
                    console.log('cleanup effect');
                };
        }
    }, [currency]);
    return exchange  ;
}
