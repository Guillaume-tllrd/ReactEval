import { useParams, Link } from 'react-router-dom';
import styles from './ContractDetailsPage.module.css';
import { useContractDetails } from '../hooks/ContractsDetailsHooks';
import ContractHeader from '../components/contractsDetails/Header/ContractDetailsHeader';
import InfoSection from '../components/contractsDetails/InfoSection/ContractDetailsInfoSection';
import WitcherInfo from '../components/contractsDetails/WitcherInfo/ContractDetailsWitcherInfo';
import { useWitcherAuth } from '../context/WitcherAuthContext';
import { assignContract, completeContract } from '../contractRepository';

const ContractDetailsPage = () => {
  const { id } = useParams(); 
  // On récupère la fonction reload du hook details
  const { contract, witcher, loading, error, reload } = useContractDetails(id);

  // On récupère l'utilisateur connecté depuis le useState global
  const { currentWitcher } = useWitcherAuth(); 

  const handleAssign = async () => {
    if (confirm("Acceptez-vous cette mission périlleuse ?")) {
      await assignContract( Number(id), Number(currentWitcher.id));
      reload(); 
    }
  };

  const handleComplete = async () => {
    if (confirm("Avez-vous bien reçu la prime ?")) {
      await completeContract(id);
      reload();
    }
  };

  if (loading) return <div>Décryptage du contrat...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!contract) return <div>Contrat introuvable.</div>;

  // Logique d'affichage des boutons
  const showAssignBtn = currentWitcher && contract.status === 'Available';
  
  const showCompleteBtn = currentWitcher && 
                          contract.status === 'Assigned' && 
                          Number(contract.assignedTo) === Number(currentWitcher.id);

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

      <div className={styles.actions}>
      <Link to="/" className={styles.backButton}>← Retour</Link>
      
      
      <Link to={`/contracts/${id}/edit`} className={styles.editButton}>
        Modifier le contrat
      </Link>
      {showAssignBtn && (
            <button onClick={handleAssign} className={styles.assignButton}>
              Accepter la mission
            </button>
          )}

          {showCompleteBtn && (
            <button onClick={handleComplete} className={styles.completeButton}>
              Marquer comme terminé
            </button>
          )}
  </div>
    </main>
  )
};

export default ContractDetailsPage;