import { useState, useEffect } from 'react';
import { getContractById } from '../contractRepository';
import { getWitcherById } from '../withcherRepository';

export const useContractDetails = (contractId) => {
  const [contract, setContract] = useState(null);
  const [witcher, setWitcher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. Récupération du contrat
        const contractData = await getContractById(contractId);
        setContract(contractData);

        // 2. Si le contrat est assigné à un sorceleur, on récupère ses infos
        if (contractData.assignedTo) {
          const witcherData = await getWitcherById(contractData.assignedTo);
          setWitcher(witcherData);
        }
      } catch (err) {
        setError("Impossible de récupérer les détails de la mission.");
      } finally {
        setLoading(false);
      }
    };

    if (contractId) {
      fetchData();
    }
  }, [contractId]);

  return { contract, witcher, loading, error };
};