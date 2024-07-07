# module7labs
Contains Labs from module 7
# Module 7 Labs

// 14, 33, 44, 58, 99

## Lab 1: Bitcoin Rates (Slide 14)

-   Using the following starter code, complete the BitcoinRates component to fetch and display the current price of Bitcoin in the selected currency.
-   Use a useEffect hook with cleanup and appropriate dependencies.

```jsx
import { useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {options}
                </select>
            </label>
        </div>
    );
}
```

## Lab 2: Bitcoin Rates Custom Hook (Slide 33)

-   Update your **BitcoinRates** component to use a custom hook for extracting the external data synchronization
-   **Extension**: Implement **useReducer** to handle the internal state management of your custom hook

## Lab 3: Emoji Context (Slide 44)

-   Modify the **Emoji** component from _Module 6 Lab 3_ and create a context for storing the current emoji/mood
-   Display the current emoji from the **BitcoinRates** component, and make sure it updates when clicking the 'Change Mood' button

## Lab 4: React Website (Slide 58)

-   Create an app with 3 different pages: Home, Login, and Bitcoin Rates
-   Use existing components to add content to each page
-   Include a _navbar_ to navigate between pages
-   **Extension**: Use _NextJS_

## Lab 5: Material UI

-   Update your solution for Lab 4 to use MUI components for styling
-   Use the _AppBar_ for navigation and MUI form components for any form inputs (**Extension** Create a _NavBar_ component and add to the root layout)
-   **Extension**: Include the _PostList_ component and style using MUI cards and grids
-   **Extension**: Try to create a custom theme using _createTheme_


data:image/jpeg;base64,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"