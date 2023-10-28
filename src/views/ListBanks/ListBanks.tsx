import CardBank from '../../components/CardBank/CardBank';
import styles from './listBanks.module.css'
import { useGetListQuery } from '../../redux/api/bank';

const ListBanks = () => {
    const { data, isFetching, isLoading, error } = useGetListQuery(null);
    console.log('data: ', data)
    if (isFetching || isLoading) return <p>Loading ...</p>;
    if (error) return <p>Some error</p>;
    return (
        <div className={styles.container}>
            <section className={styles.list}>
                {data?.map((bank) => (
                    <CardBank key={bank.bankName} bankData={bank} />
                ))}
            </section>

        </div>
    )
}

export default ListBanks
