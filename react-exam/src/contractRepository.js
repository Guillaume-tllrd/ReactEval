/**
   * Récupère la liste de tous les contrats
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
