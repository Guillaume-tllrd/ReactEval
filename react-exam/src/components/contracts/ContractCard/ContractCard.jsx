import { Link } from 'react-router-dom';
import styles from './ContractCard.module.css';

const ContractCard = ({ contract }) => {
  // On récupère le statut (ex: "Available") pour l'utiliser comme clé de style
  const statusKey = contract.status; 
  
  // On combine la classe de base .card avec la classe spécifique du statut
  const cardClasses = `${styles.card} ${styles[statusKey]}`;

  return (
    <article className={cardClasses}>
      <h3 className={styles.cardTitle}>{contract.title}</h3>
      <p className={styles.cardDesc}>{contract.description}</p>
      
      <div className={styles.footer}>
        <div className={styles.statusBadge}>
          {contract.status}
        </div>
        
        {/* Lien vers la page de détail */}
        <Link to={`/contracts/${contract.id}`} className={styles.detailsLink}>
          Voir détails &rarr;
        </Link>
      </div>
    </article>
  );
};

export default ContractCard;