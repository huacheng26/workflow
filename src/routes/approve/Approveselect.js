import React from 'react';
import { connect } from 'dva';
import styles from './Approveselect.css';

function Approveselect() {
  return (
    <div className={styles.normal}>
      Route Component: Approve/Approveselect
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Approveselect);
