
function AppRoutes(props) {
    return(
        <Routes>
            <Route index element = { <Homepage {...props}/>}/>

            <Route path='/about' element={<AboutPage {...props}/>}/>

            <Route path='/bitcoinrates' element={<BitcoinRates {...props}/>}/>

        </Routes>
    )
}

export default AppRoutes;