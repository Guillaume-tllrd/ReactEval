import { useState, useEffect } from 'react';
import { getContractById, updateContract } from '../contractRepository';

export const useEditContract = (contractId) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    reward: ''
  });
  
  const [loading, setLoading] = useState(true); // On commence en loading car on fetch les données
  const [error, setError] = useState(null);

  // Au chargement, on récupère les infos du contrat
  useEffect(() => {
    const loadContract = async () => {
      try {
        const data = await getContractById(contractId);
        // On ne garde que les champs modifiables dans le formulaire
        setFormData({
            title: data.title,
            description: data.description,
            reward: data.reward
        });
        setLoading(false);
      } catch (err) {
        setError("Impossible de charger le contrat original.");
        setLoading(false);
      }
    };

    if (contractId) {
      loadContract();
    }
  }, [contractId]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitChanges = async () => {
    if (!formData.title || !formData.description || !formData.reward) {
      setError("Tous les champs sont obligatoires.");
      return false;
    }

    try {
      setLoading(true);
      setError(null);
      await updateContract(contractId, formData);
      return true;
    } catch (err) {
      setError("Erreur lors de la modification du contrat.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, submitChanges, loading, error };
};