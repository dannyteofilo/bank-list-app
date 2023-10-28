import { Bank } from '../../interfaces/bank.interface';
import styles from './cardBank.module.css'

interface CardBankProps {
    bankData: Bank;
}

const CardBank: React.FC<CardBankProps> = ({ bankData }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img className={styles.image} src={bankData?.url} alt="" />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{bankData?.bankName}</h3>
                <p className={styles.description}>{bankData?.description}</p>
                <p className={styles.description}>Edad: {bankData?.age} Años</p>
            </div>
        </div>
    )
}

export default CardBank
