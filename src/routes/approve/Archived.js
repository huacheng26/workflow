import React from 'react';
import { connect } from 'dva';
import styles from './Archived.css';

function Archived() {
  return (
    <div className={styles.normal}>
      Route Component: Approve\Archived
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Archived);
