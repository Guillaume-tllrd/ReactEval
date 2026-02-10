import ContractCard from '../ContractCard/ContractCard';
import styles from './ContractList.module.css';

const ContractList = ({ contracts, loading, error }) => {

    // Gestion des états d'affichage
  if (loading) {
    return <div className={styles.loading}>Consultation des registres...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!contracts || contracts.length === 0) {
    return (
      <div className={styles.empty}>
        Aucun contrat ne correspond à ces critères.
      </div>
    );
  }

 return (
    <div className={styles.listContainer}>
      {contracts.map(contract => (
        <ContractCard key={contract.id} contract={contract} />
      ))}
    </div>
  );
};

export default ContractList;