import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css'; 
import { getAllWitchers } from '../withcherRepository';
import { useWitcherAuth } from '../context/WitcherAuthContext';

const LoginPage = () => {
  const [witchers, setWitchers] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const { login } = useWitcherAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    getAllWitchers().then(data => setWitchers(data));
  }, []);

  const handleLogin = () => {
    // On trouve l'objet complet du sorceleur grâce à l'ID sélectionné
    const witcher = witchers.find(w => w.id === parseInt(selectedId));
    
    if (witcher) {
      login(witcher); // Mise à jour du State global uniquement
      navigate('/');  // Retour à l'accueil
    }
  };

  return (
    <div className={styles.container}>
      <h2>Identification</h2>
      <p>Qui êtes-vous, maître Sorceleur ?</p>
      
      <select 
        className={styles.select}
        value={selectedId} 
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">-- Choisir un profil --</option>
        {witchers.map(w => (
          <option key={w.id} value={w.id}>{w.name}</option>
        ))}
      </select>

      <button 
        className={styles.button} 
        onClick={handleLogin} 
        disabled={!selectedId}
      >
        Entrer dans la guilde
      </button>
    </div>
  );
};

export default LoginPage;