import BitcoinRates from "../Pages/BitcoinRates";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import {Routes, Route} from "react-router-dom"



function AppRoutes(props) {
    return(
        <Routes>
            <Route index element = { <HomePage {...props}/>}/>

            <Route path='/about' element={<AboutPage {...props}/>}/>

            <Route path='/bitcoinrates' element={<BitcoinRates {...props}/>}/>

        </Routes>
    )
}

export default AppRoutes;