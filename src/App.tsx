import styles from './app.module.css'
import ListBanks from './views/ListBanks/ListBanks'

function App() {
  return (
    <div className={styles.background}>
      <h1>BankList App</h1>
      <ListBanks/>
    </div>
  )
}

export default App
