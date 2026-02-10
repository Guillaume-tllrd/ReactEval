import styles from './ContractForm.module.css';

const ContractForm = ({ formData, onChange, onSubmit, loading, error, submitLabel = "Valider" }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.group}>
        <label htmlFor="title" className={styles.label}>Titre de la mission</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={onChange}
          className={styles.input}
          placeholder="Ex: Griffon menaçant à Velen"
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="description" className={styles.label}>Description détaillée</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={onChange}
          className={styles.textarea}
          placeholder="Détails sur la créature, le lieu, et les dangers..."
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="reward" className={styles.label}>Récompense promise</label>
        <input
          type="text"
          name="reward"
          id="reward"
          value={formData.reward}
          onChange={onChange}
          className={styles.input}
          placeholder="Ex: 500 Couronnes"
        />
      </div>

      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? 'Traitement...' : submitLabel}
      </button>
    </form>
  );
};

export default ContractForm;