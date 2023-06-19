import React, {useRef, useState} from 'react'
import Mint from './components/MintButton/Mint'

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="app">
      <div className="header">
        <img src="/img/hammer.webp" alt="" />
        <h1>$HIRECZ</h1>
        <img className='coin' src="/img/coin.webp" alt="" />
      </div>
      <div className="main">
        <img src="/img/main.webp" alt="" />
        <div className="buy-wrap">
          <Mint accounts={accounts} setAccounts={setAccounts}/>
        </div>
        <p>
          Gary sued CZ for denying his job application... but CZ doesn't play. #HireCZ 
        </p>

        <footer>
          <h5>
            © 2023 HireCZ. 
          </h5>
          <a href="http://twitter.com/hirecz">
            <img src="/img/twitter.png" alt="" />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App

