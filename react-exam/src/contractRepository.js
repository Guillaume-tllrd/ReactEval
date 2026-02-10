  /**
   * Récupère la liste de tous les contrats en fonction dutitre et/ou du statut
   * @param {*} title 
   * @param {*} status 
   * @returns 
   */
export const getAllContracts = async (title = '', status = '') => {
  
  let url = '/api/contracts?';

  if (title) {
    url += `title=${encodeURIComponent(title)}&`;
  }

  if (status) {
    url += `status=${encodeURIComponent(status)}`;
  }

  try {
    const response = await fetch(url);
    
    if (!response.ok) { 
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Erreur dans contractRepository:", error);
    throw error; 
  }
};

/**
 * Récupère les détails d'un contrat spécifique par son ID
 * @param {*} id 
 * @returns 
 */
export const getContractById = async (id) => {
  try {
    const response = await fetch(`/api/contracts/${id}`);
    if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Erreur getContractById:", error);
    throw error;
  }
};

/**
 * Crée un nouveau contrat
 * @param {Object} contractData - { title, description, reward }
 */
export const createContract = async (contractData) => {
  try {
    const response = await fetch('/api/contracts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contractData),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur createContract:", error);
    throw error;
  }
};