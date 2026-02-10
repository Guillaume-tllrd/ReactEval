import styles from './ContractFilters.module.css';

const ContractFilters = ({ filters, onFilterChange }) => {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="title" className={styles.label}>Titre du contrat</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Rechercher un monstre..."
          value={filters.title}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="status" className={styles.label}>Statut</label>
        <select
          name="status"
          id="status"
          value={filters.status}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Tous les statuts</option>
          <option value="Available">Disponible</option>
          <option value="Assigned">Assigné</option>
          <option value="Completed">Terminé</option>
        </select>
      </div>
    </div>
  );
};

export default ContractFilters;