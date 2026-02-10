import ContractList from '../components/contracts/ContractList/ContractList';
import styles from './ContractsPage.module.css';

const ContractsPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Tableau des Contrats</h1>
      <ContractList />
    </main>
  );
};

export default ContractsPage;