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

/**
 * Met à jour un contrat existant
 * @param {string} id - L'identifiant du contrat
 * @param {Object} contractData - Les nouvelles données { title, description, reward }
 */
export const updateContract = async (id, contractData) => {
  try {
    const response = await fetch(`/api/contracts/${id}`, {
      method: 'PUT',
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
    console.error("Erreur updateContract:", error);
    throw error;
  }
};

/**
 * Assigne un contrat à un witcher
 * @param {*} witcherId 
 * @returns 
 */
export const assignContract = async (witcherId) => {

  try {
    const response = await fetch(`/api/contracts/${witcherId}/assignedTo`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assignedTo: witcherId }) 
    });
    if (!response.ok) throw new Error(`Erreur assignation: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Erreur assignContract:", error);
    throw error;
  }
};

/**
 * Marque un contrat comme terminé
 * @param {*} contractId 
 * @returns 
 */
export const completeContract = async (contractId) => {
    const cId = parseInt(contractId, 10);
  try {
    const response = await fetch(`/api/contracts/${cId}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify('Completed')
    });
    if (!response.ok) throw new Error(`Erreur completion: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Erreur completeContract:", error);
    throw error;
  }
};