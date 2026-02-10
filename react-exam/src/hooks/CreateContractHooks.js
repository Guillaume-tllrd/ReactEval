import { useState } from 'react';
import { createContract } from '../contractRepository';

export const useCreateContract = () => {
  // État initial du formulaire
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    reward: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Gestion des changements dans les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const submitContract = async () => {
    
    if (!formData.title || !formData.description || !formData.reward) {
      setError("Tous les champs sont obligatoires pour valider un contrat.");
      return false;
    }

    try {
      setLoading(true);
      setError(null);
      await createContract(formData);
      return true; 
    } catch (err) {
      setError("Impossible de publier le contrat. Vérifiez les champs et essayez à nouveau.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, submitContract, loading, error };
};