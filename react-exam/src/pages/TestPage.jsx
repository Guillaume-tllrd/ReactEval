import React from 'react';
import styles from './TestPage.module.css';

function TestPage() {
  return (
    <div className={styles.container}>
      <h1>Page de Test</h1>
      <p>Si vous voyez ce message, React Router est correctement configuré !</p>
    </div>
  );
}

export default TestPage;