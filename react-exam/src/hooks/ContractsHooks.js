import { useState, useEffect } from 'react';
import { getAllContracts } from '../contractRepository'; 

export const useContracts = () => {
    
    const [filters, setFilters] = useState({
    title: '',
    status: ''
  });
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour mettre à jour les filtres
    const updateFilter = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        setLoading(true);
        const data = await getAllContracts(filters.title, filters.status);
        setContracts(data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les contrats. Les monstres bloquent la route ?");
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, [filters.title, filters.status]); //On relance quand l'un des deux change

  return { contracts, loading, error, filters, updateFilter };
};