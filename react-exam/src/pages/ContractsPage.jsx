import ContractFilters from '../components/contracts/ContractFilters/ContractFilters';
import ContractList from '../components/contracts/ContractList/ContractList';
import { useContracts } from '../hooks/ContractsHooks';
import styles from './ContractsPage.module.css';

const ContractsPage = () => {

    const { contracts, loading, error, filters, updateFilter } = useContracts();
    
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Tableau des Contrats</h1>
      <ContractFilters
        filters={filters} 
        onFilterChange={updateFilter} 
      />
      <ContractList 
      contracts={contracts} 
        loading={loading} 
        error={error}
        />
    </main>
  );
};

export default ContractsPage;