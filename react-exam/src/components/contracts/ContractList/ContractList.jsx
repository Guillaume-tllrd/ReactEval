import { useContracts } from '../../../hooks/ContractsHooks';
import ContractCard from '../ContractCard/ContractCard';
import styles from './ContractList.module.css';

const ContractList = () => {
  const { contracts, loading, error } = useContracts();

    // Gestion des états d'affichage
  if (loading) return <div className={styles.loading}>Chargement des parchemins...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (contracts.length === 0) return <div className={styles.empty}>Aucun contrat disponible.</div>;

  return (
    <div className={styles.listContainer}>
      {contracts.map(contract => (
        <ContractCard key={contract.id} contract={contract} />
      ))}
    </div>
  );
};

export default ContractList;