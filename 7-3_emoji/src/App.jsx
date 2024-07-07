
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import Emojis from './components/Emojis'
import { EmojiMood } from './context/CurrentEmoji'


function App() {
  return (
    <>
    <EmojiMood>
      <BitcoinRates/>
      <Emojis/>
    </EmojiMood>
    </>
  )
}

export default App
