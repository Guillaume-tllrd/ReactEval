import styles from './ContractDetailsWitcherInfo.module.css';

const WitcherInfo = ({ witcher }) => {
  if (!witcher) return null; // Protection si pas de sorceleur

  return (
    <div className={styles.container}>
      <span className={styles.label}>Sorceleur assigné :</span>
      <p>⚔️ {witcher.name} (École du {witcher.school})</p>
    </div>
  );
};

export default WitcherInfo;