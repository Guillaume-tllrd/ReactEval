import { useState, useEffect } from 'react';
import { getAllContracts } from '../contractRepository'; 

export const useContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        setLoading(true);
        const data = await getAllContracts();
        setContracts(data);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les contrats. Les monstres bloquent la route ?");
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  return { contracts, loading, error };
};