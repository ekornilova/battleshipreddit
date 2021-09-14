import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import BattleShipGame from './BattleShipGame/BattleShipGame'

const App: React.FC = () => <BattleShipGame />
ReactDOM.render(<App />, document.getElementById('root'))
