/**
 * Récupère tous les witchers disponibles
 * @returns 
 */
export const getAllWitchers = async () => {
  try {
    const response = await fetch('/api/witchers');
    if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Erreur getAllWitchers:", error);
    throw error;
  }
};

/**
 * Récupère un witcher spécifique par son ID
 * @param {*} id 
 * @returns 
 */
export const getWitcherById = async (id) => {
  try {
    const response = await fetch(`/api/witchers/${id}`);
    if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Erreur getWitcherById:", error);
    throw error;
  }
};