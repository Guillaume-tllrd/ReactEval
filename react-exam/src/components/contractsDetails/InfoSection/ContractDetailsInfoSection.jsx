import styles from './ContractDetailsInfoSection.module.css';

const InfoSection = ({ label, children }) => {
  return (
    <section className={styles.section}>
      <span className={styles.label}>{label}</span>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default InfoSection;