import styles from './ContractDetailsHeader.module.css';

const ContractHeader = ({ title, status }) => {
    
  // On récupère la classe correspondant au statut (ex: styles.Available)
  const statusClass = styles[status];

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      
      {/* On combine la classe de base et la classe de couleur */}
      <span className={`${styles.statusBadge} ${statusClass}`}>
        {status}
      </span>
    </header>
  );
};

export default ContractHeader;