import { useGetListQuery } from '../../redux/api/bank';

const ListBanks = () => {
    const { data, isFetching, isLoading, error } = useGetListQuery(null);
    console.log('data: ', data)
    if (isFetching || isLoading) return <p>Loading ...</p>;
    if (error) return <p>Some error</p>;
    return (
        <div>
            <h2>list</h2>
            <ul>
                {data?.map((bank) => (
                    <li key={bank.bankName}>{bank.bankName}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListBanks
