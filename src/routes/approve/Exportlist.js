import React from 'react';
import { connect } from 'dva';
import styles from './Exportlist.css';

function Exportlist() {
  return (
    <div className={styles.normal}>
      Route Component: Approve/Exportlist
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Exportlist);
