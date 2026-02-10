import { useParams, Link } from 'react-router-dom';
import styles from './ContractDetailsPage.module.css';
import { useContractDetails } from '../hooks/ContractsDetailsHooks';
import ContractHeader from '../components/contractsDetails/Header/ContractDetailsHeader';
import InfoSection from '../components/contractsDetails/InfoSection/ContractDetailsInfoSection';
import WitcherInfo from '../components/contractsDetails/WitcherInfo/ContractDetailsWitcherInfo';

const ContractDetailsPage = () => {
  const { id } = useParams(); 
  const { contract, witcher, loading, error } = useContractDetails(id);

  if (loading) return <div>Décryptage du contrat...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!contract) return <div>Contrat introuvable.</div>;

  return (
    <main className={styles.container}>
      
      <ContractHeader title={contract.title} status={contract.status} />

      <InfoSection label="Description :">
        {contract.description}
      </InfoSection>

      <InfoSection label="Récompense :">
        {contract.reward}
      </InfoSection>

      {witcher && <WitcherInfo witcher={witcher} />}

      <Link to="/" className={styles.backButton}>← Retour au tableau</Link>
    </main>
  )
};

export default ContractDetailsPage;