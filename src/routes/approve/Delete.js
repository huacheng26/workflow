import React from 'react';
import { connect } from 'dva';
import styles from './Delete.css';

function Delete() {
  return (
    <div className={styles.normal}>
      Route Component: Approve\Delete
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Delete);
