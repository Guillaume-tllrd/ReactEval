import { useNavigate } from 'react-router-dom';
import styles from './CreateContractPage.module.css';
import { useCreateContract } from '../hooks/CreateContractHooks';
import ContractForm from '../components/contracts/ContractForm/ContractForm';

const CreateContractPage = () => {
  const navigate = useNavigate();
  const { formData, handleChange, submitContract, loading, error } = useCreateContract();

  const handleFormSubmit = async () => {
    const success = await submitContract();
    if (success) {
      navigate('/');
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Rédiger un nouveau contrat</h1>
      
      <ContractForm 
        formData={formData}
        onChange={handleChange}
        onSubmit={handleFormSubmit}
        loading={loading}
        error={error}
      />
    </main>
  );
};

export default CreateContractPage;