/**
   * Récupère la liste de tous les contrats
   */
 export const  getAllContracts = async () => {
    try {
      const response = await fetch('/api/contracts');
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error("Erreur dans contractRepository.getAllContracts:", error);
      throw error; 
    }
  }
;
