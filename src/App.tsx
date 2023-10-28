import styles from './app.module.css'
import ListBanks from './views/ListBanks/ListBanks'

function App() {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>BankList App</h1>
      <ListBanks/>
    </div>
  )
}

export default App
