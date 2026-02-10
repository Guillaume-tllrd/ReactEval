import { useParams, useNavigate } from 'react-router-dom';
import styles from './CreateContractPage.module.css';
import ContractForm from '../components/contracts/ContractForm/ContractForm';
import { useEditContract } from '../hooks/EditContractHooks';

const EditContractPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { formData, handleChange, submitChanges, loading, error } = useEditContract(id);

  const handleFormSubmit = async () => {
    const success = await submitChanges();
    if (success) {
      // Redirection vers le détail du contrat après modification
      navigate(`/contracts/${id}`);
    }
  };

  if (loading && !formData.title) return <div>Chargement des données...</div>;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Modifier le contrat</h1>
      
      <ContractForm 
        formData={formData}
        onChange={handleChange}
        onSubmit={handleFormSubmit}
        loading={loading}
        error={error}
        submitLabel="Sauvegarder les modifications" 
      />
    </main>
  );
};

export default EditContractPage;